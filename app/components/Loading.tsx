import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex justify-center items-center">
      <Loader2 className="h-6 w-6 animate-spin text-primary" />
    </div>
  );
}
