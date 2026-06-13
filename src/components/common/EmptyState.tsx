import { Film } from 'lucide-react';

export const EmptyState = ({ message = "No movies found." }: { message?: string }) => (
  <div className="flex flex-col items-center justify-center min-h-[400px] w-full gap-4 text-center px-4">
    <div className="p-4 rounded-full bg-surface">
      <Film className="w-10 h-10 text-gray-500" />
    </div>
    <p className="text-gray-400 font-medium text-lg">{message}</p>
  </div>
);
