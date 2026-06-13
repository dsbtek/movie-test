import { AlertCircle } from 'lucide-react';

export const ErrorState = ({ message }: { message: string }) => (
  <div className="flex flex-col items-center justify-center min-h-[400px] w-full gap-4 text-center px-4">
    <div className="p-4 rounded-full bg-red-500/10">
      <AlertCircle className="w-10 h-10 text-red-500" />
    </div>
    <h3 className="text-xl font-bold text-white">Oops! Something went wrong</h3>
    <p className="text-gray-400 max-w-md">{message}</p>
  </div>
);
