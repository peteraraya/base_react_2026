import { User } from 'lucide-react';
import { Card } from '@/components/ui/Card';

export function SummarySection({ summary, title }: { summary: string; title: string }) {
  return (
    <Card>
      <header className="flex items-center gap-2 mb-4">
        <User className="w-6 h-6 text-blue-600" aria-hidden="true" />
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
      </header>
      <div className="text-gray-700 leading-relaxed text-lg space-y-4">
        {summary.split('\n\n').map((paragraph, idx) => (
          <p key={idx}>{paragraph}</p>
        ))}
      </div>
    </Card>
  );
}
