import { Loader2 } from 'lucide-react';

export const LoadingState = () => (
  <div className="flex flex-col items-center justify-center min-h-[400px] w-full gap-4">
    <Loader2 className="w-10 h-10 animate-spin text-primary" />
    <p className="text-gray-400 font-medium">Loading amazing movies...</p>
  </div>
);
