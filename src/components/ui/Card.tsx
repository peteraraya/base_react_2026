import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function Card({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={cn("bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 hover:-translate-y-1 hover:shadow-md transition-all duration-300", className)}>
      {children}
    </div>
  );
}
