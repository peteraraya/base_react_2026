import { GoogleGenerativeAI } from '@google/generative-ai';
import { JobAnalysis } from './analyzer';

// Utiliza la variable de entorno de Vite
// Asegúrate de agregar VITE_GEMINI_API_KEY en tu archivo .env
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY || '';
const genAI = new GoogleGenerativeAI(API_KEY);

export async function analyzeJobDescriptionWithAI(text: string, lang: 'es' | 'en'): Promise<JobAnalysis> {
  console.log("Diagnóstico - API_KEY recibida en build:", API_KEY ? `Sí (${API_KEY.length} caracteres)` : "No / Vacía");
  
  if (!API_KEY) {
    throw new Error('No API key provided');
  }

  // Usamos la versión dinámica más reciente (evita problemas de deprecación)
  const model = genAI.getGenerativeModel({ model: 'gemini-flash-latest' });

  const prompt = `You are an expert technical recruiter and career coach.
Analyze the following job description against my professional profile.
My profile: I am a Full Stack Developer (Frontend focused) with 5+ years of experience. Key technologies: React, Next.js, TypeScript, Tailwind CSS, Node.js, NestJS, PHP, PostgreSQL, Supabase, AWS (Serverless). Strong focus on testing (Jest, Vitest, Playwright), CI/CD, and Agile/Jira. 

Your task is to analyze the job description and return a JSON object with this exact structure:
{
  "compatibilityScore": number (0-100),
  "verdict": "A short summary (1-2 sentences) of my compatibility with the role.",
  "matches": [{"skill": "Name of the matching skill", "evidenceInCV": "Short proof of where I used it based on my profile"}],
  "gaps": [{"skill": "Name of the missing skill", "severity": "high" | "medium" | "low"}],
  "strategicRecommendations": ["Actionable advice for the interview based on the matches and gaps. Add at least 1-3 recommendations."],
  "extractedData": {
    "role": "Detected job role or 'Not specified'",
    "company": "Detected company name or 'Not specified'",
    "modality": "Remote, Hybrid, On-site, or 'Not specified'",
    "salary": "Detected salary or 'Not specified'"
  }
}

IMPORTANT RULES:
1. Output ONLY valid JSON. Do not include markdown code blocks like \`\`\`json.
2. If the text does not look like a valid job description or lacks technical requirements, return a compatibilityScore of 0, empty matches and gaps, and a verdict stating that no technical skills were found.
3. The language for ALL strings (verdict, evidenceInCV, recommendations, extracted data) MUST BE in ${lang === 'es' ? 'Spanish' : 'English'}.

Job Description to analyze:
"""
${text}
"""`;

  try {
    const result = await model.generateContent(prompt);
    const responseText = result.response.text().trim();
    
    // Remove markdown json wrappers if the AI included them by mistake
    const cleanJson = responseText.replace(/^```json\s*/i, '').replace(/\s*```$/i, '');
    
    const parsedData: JobAnalysis = JSON.parse(cleanJson);
    return parsedData;
  } catch (error) {
    console.error("Error generating content with Gemini:", error);
    throw error;
  }
}
