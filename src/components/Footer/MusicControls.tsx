import { Shuffle, SkipBack, Play, SkipForward, Repeat } from "lucide-react";

export default function MusicControls() {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex items-center gap-6">
        <Shuffle size={20} className="text-zinc-200" />
        <SkipBack size={20} className="text-zinc-200" />

        <button className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center pl-1">
          <Play />
        </button>

        <SkipForward size={20} className="text-zinc-20" />
        <Repeat size={20} className="text-zinc-20" />
      </div>

      <div className="flex items-center gap-2">
        <span className="text-xs text-zinc-500">0:00</span>
        <div className="h-1 rounded-full w-96 bg-zinc-600">
          <div className="bg-zinc-200 w-1 h-1 rounded-full"></div>
        </div>
        <span className="text-xs text-zinc-500">2:06</span>
      </div>
    </div>
  );
}