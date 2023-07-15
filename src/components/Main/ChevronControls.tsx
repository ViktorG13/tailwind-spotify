import { ChevronLeft, ChevronRight} from "lucide-react";

export default function ChevronControls() {
  return (
    <div className="flex items-center gap-4">
      <button className="rounded-full bg-bleck/440 p-1">
        <ChevronLeft />
      </button>
      <button className="rounded-full bg-bleck/440 p-1">
        <ChevronRight />
      </button>
    </div>
  );
}
