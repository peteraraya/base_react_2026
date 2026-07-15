export interface JobAnalysis {
  compatibilityScore: number;
  verdict: string;
  matches: { skill: string; evidenceInCV: string }[];
  gaps: { skill: string; severity: 'high' | 'medium' | 'low' }[];
  strategicRecommendations: string[];
  extractedData?: {
    role?: string;
    company?: string;
    modality?: string;
    salary?: string;
  };
}

// Mapa de habilidades clave y cómo se evidencian en el CV
const skillEvidenceMap: Record<string, { evidence: { es: string; en: string }; category: string }> = {
  'react': {
    evidence: { es: 'Gym Tracker App & 5+ años en Ticblue', en: 'Gym Tracker App & 5+ years at Ticblue' },
    category: 'Frontend'
  },
  'next': {
    evidence: { es: 'Gym Tracker App (Next.js 15)', en: 'Gym Tracker App (Next.js 15)' },
    category: 'Frontend'
  },
  'angular': {
    evidence: { es: 'Proyecto Real Seguros', en: 'Real Seguros Project' },
    category: 'Frontend'
  },
  'typescript': {
    evidence: { es: 'Uso estricto en Gym Tracker & Ticblue', en: 'Strict mode usage in Gym Tracker & Ticblue' },
    category: 'Frontend'
  },
  'tailwind': {
    evidence: { es: 'UI de proyectos recientes', en: 'Recent projects UI' },
    category: 'Frontend'
  },
  'node': {
    evidence: { es: 'Migración iMed & Backend Ticblue', en: 'iMed Migration & Ticblue Backend' },
    category: 'Backend'
  },
  'nest': {
    evidence: { es: 'API de Bonos y Licencias Médicas', en: 'Medical Bonus and Licenses API' },
    category: 'Backend'
  },
  'php': {
    evidence: { es: 'Proyecto RedBlu & Mantenimiento legacy', en: 'RedBlu Project & Legacy maintenance' },
    category: 'Backend'
  },
  'wordpress': {
    evidence: { es: 'E-commerce RedBlu con WooCommerce', en: 'RedBlu E-commerce with WooCommerce' },
    category: 'Backend'
  },
  'postgresql': {
    evidence: { es: 'Base de datos en proyectos Atlassian', en: 'Database in Atlassian projects' },
    category: 'Backend'
  },
  'supabase': {
    evidence: { es: 'Gym Tracker & Tienda de Confecciones', en: 'Gym Tracker & Clothing Store' },
    category: 'Backend'
  },
  'serverless': {
    evidence: { es: 'Atlassian Forge', en: 'Atlassian Forge' },
    category: 'Backend'
  },
  'aws': {
    evidence: { es: 'Despliegues y Serverless', en: 'Deployments and Serverless' },
    category: 'Backend'
  },
  'jest': {
    evidence: { es: 'Testing integral (Buenas Prácticas)', en: 'Comprehensive testing (Best Practices)' },
    category: 'Testing'
  },
  'vitest': {
    evidence: { es: 'Testing en entornos Vite', en: 'Testing in Vite environments' },
    category: 'Testing'
  },
  'playwright': {
    evidence: { es: 'Testing E2E', en: 'E2E Testing' },
    category: 'Testing'
  },
  'git': {
    evidence: { es: 'Control de versiones', en: 'Version control' },
    category: 'Tools'
  },
  'jira': {
    evidence: { es: 'Gestión Ágil y Jira Service Management', en: 'Agile Management and Jira Service Management' },
    category: 'Tools'
  },
  'ci/cd': {
    evidence: { es: 'Automatización de despliegues', en: 'Deployment automation' },
    category: 'Tools'
  },
  'rbac': {
    evidence: { es: 'Permisos en Proyecto RGSTCS', en: 'Permissions in RGSTCS Project' },
    category: 'Security'
  },
  'mfa': {
    evidence: { es: 'Autenticación Proyecto RGSTCS', en: 'Authentication RGSTCS Project' },
    category: 'Security'
  }
};

// Diccionario de habilidades comunes que pueden ser gaps
const commonTechStack = [
  'python', 'java', 'ruby', 'go', 'rust', 'c++', 'c#', '.net', 
  'vue', 'svelte', 'ember', 'django', 'flask', 'spring', 'laravel',
  'docker', 'kubernetes', 'jenkins', 'terraform', 'ansible',
  'mongodb', 'mysql', 'oracle', 'redis', 'elasticsearch', 'cassandra',
  'aws', 'azure', 'gcp', 'graphql', 'apollo', 'redux', 'mobx',
  'figma', 'sketch', 'adobe', 'photoshop', 'illustrator'
];

export function analyzeJobDescription(text: string, lang: 'es' | 'en'): JobAnalysis {
  const normalizedText = text.toLowerCase();
  
  // Extracción básica heurística
  let company = lang === 'es' ? 'Empresa no detectada' : 'Company not detected';
  let role = lang === 'es' ? 'Rol no detectado' : 'Role not detected';
  let modality = lang === 'es' ? 'Modalidad no especificada' : 'Modality not specified';
  let salary = lang === 'es' ? 'Salario no especificado' : 'Salary not specified';

  // Buscar empresa ("en [Empresa]", "at [Company]", "empresa: [Empresa]")
  const companyMatch = text.match(/(?:en la empresa|empresa:|company:|at)\s+([A-Z][a-zA-Z0-9\s]+)/i);
  if (companyMatch && companyMatch[1]) {
    company = companyMatch[1].trim().split('\n')[0]?.substring(0, 30) || company;
  }

  // Buscar rol (Senior, Junior, Full Stack, Frontend, Backend)
  if (normalizedText.includes('senior') || normalizedText.includes('sr')) role = 'Senior Developer';
  else if (normalizedText.includes('junior') || normalizedText.includes('jr')) role = 'Junior Developer';
  else if (normalizedText.includes('full stack') || normalizedText.includes('fullstack')) role = 'Full Stack Developer';
  else if (normalizedText.includes('frontend') || normalizedText.includes('front-end')) role = 'Frontend Developer';
  else if (normalizedText.includes('backend') || normalizedText.includes('back-end')) role = 'Backend Developer';

  // Buscar modalidad
  if (normalizedText.includes('remot') || normalizedText.includes('home office')) modality = lang === 'es' ? '100% Remoto' : '100% Remote';
  else if (normalizedText.includes('híbrid') || normalizedText.includes('hybrid')) modality = lang === 'es' ? 'Híbrido' : 'Hybrid';
  else if (normalizedText.includes('presencial') || normalizedText.includes('on-site')) modality = lang === 'es' ? 'Presencial' : 'On-site';

  // Buscar salario ($100,000, 50k, 50.000 USD, etc)
  const salaryMatch = text.match(/(?:usd|\$|€|£)?\s*\d{1,3}(?:[.,]\d{3}|k)(?:\s*(?:-|a|to)\s*(?:usd|\$|€|£)?\s*\d{1,3}(?:[.,]\d{3}|k))?\s*(?:usd|\$|€|£)?/i);
  if (salaryMatch && salaryMatch[0]) {
    salary = salaryMatch[0].trim();
    // Limpiar si capturó mal algo muy corto
    if (salary.length < 3) {
      salary = lang === 'es' ? 'Salario no especificado' : 'Salary not specified';
    }
  }

  const matches: JobAnalysis['matches'] = [];
  const foundSkills = new Set<string>();
  
  // Buscar matches
  Object.entries(skillEvidenceMap).forEach(([skill, data]) => {
    if (normalizedText.includes(skill)) {
      matches.push({
        skill: skill.charAt(0).toUpperCase() + skill.slice(1),
        evidenceInCV: data.evidence[lang]
      });
      foundSkills.add(skill);
    }
  });

  // Buscar gaps (skills que pide la oferta pero no están en el CV)
  const gaps: JobAnalysis['gaps'] = [];
  let gapCount = 0;
  
  commonTechStack.forEach(skill => {
    if (normalizedText.includes(skill) && !skillEvidenceMap[skill]) {
      gaps.push({
        skill: skill.charAt(0).toUpperCase() + skill.slice(1),
        severity: gapCount < 2 ? 'high' : 'medium'
      });
      gapCount++;
    }
  });

  // Calcular Score
  const totalRelevantSkills = matches.length + gaps.length;
  let score = 0;
  
  if (totalRelevantSkills === 0) {
    // Si no hay skills técnicas detectadas, asumimos un score neutral basado en experiencia general
    score = 65;
  } else {
    score = Math.round((matches.length / totalRelevantSkills) * 100);
    // Bonificación si pide React o Node (core skills)
    if (foundSkills.has('react') || foundSkills.has('node')) {
      score = Math.min(100, score + 15);
    }
  }

  // Generar recomendaciones
  const recommendations: string[] = [];
  
  if (foundSkills.has('react') || foundSkills.has('next')) {
    recommendations.push(
      lang === 'es' 
        ? "Destaca tu proyecto 'Gym Tracker App' para demostrar dominio actual en React 19 y Next.js 15."
        : "Highlight your 'Gym Tracker App' project to demonstrate up-to-date mastery of React 19 and Next.js 15."
    );
  }
  
  if (foundSkills.has('node') || foundSkills.has('serverless')) {
    recommendations.push(
      lang === 'es'
        ? "Menciona cómo redujiste el time-to-market un 30% usando Serverless en Atlassian Forge."
        : "Mention how you reduced time-to-market by 30% using Serverless on Atlassian Forge."
    );
  }
  
  if (gaps.length > 0 && gaps[0]) {
    recommendations.push(
      lang === 'es'
        ? `La oferta pide ${gaps[0]?.skill}. Menciona tu capacidad autodidacta (+14 cursos) para aprender nuevas herramientas rápidamente.`
        : `The job requires ${gaps[0]?.skill}. Mention your self-taught ability (14+ courses) to learn new tools quickly.`
    );
  } else {
    recommendations.push(
      lang === 'es'
        ? "Haces match perfecto con los requisitos técnicos. Enfócate en demostrar tus habilidades blandas y autonomía."
        : "You are a perfect technical match. Focus on demonstrating your soft skills and autonomy."
    );
  }

  // Generar Veredicto
  let verdict = '';
  if (score >= 80) {
    verdict = lang === 'es'
      ? "Tu perfil es altamente compatible con esta oferta. Cumples con la mayoría de los requisitos técnicos clave."
      : "Your profile is highly compatible with this job. You meet most of the key technical requirements.";
  } else if (score >= 50) {
    verdict = lang === 'es'
      ? "Tienes un nivel de compatibilidad moderado. Deberás justificar cómo puedes suplir las tecnologías que te faltan."
      : "You have a moderate compatibility level. You will need to justify how you can compensate for the missing technologies.";
  } else {
    verdict = lang === 'es'
      ? "La oferta requiere un stack tecnológico bastante distinto a tu experiencia principal. Podría ser un reto."
      : "The job requires a tech stack quite different from your main experience. It could be a challenge.";
  }

  // Ordenar gaps y matches para presentar máximo 5
  return {
    compatibilityScore: score,
    verdict,
    matches: matches.slice(0, 6),
    gaps: gaps.slice(0, 5),
    strategicRecommendations: recommendations,
    extractedData: {
      role,
      company,
      modality,
      salary
    }
  };
}
