import MusicImage from "./MusicImage";
import MusicControls from "./MusicControls";
import MusicAudioControls from "./MusicAudioControls";

export default function Footer() {
  return (
    <footer className="bg-zinc-850 border-t border-zinc-700 px-6 py-4 flex items-center justify-between">
      <MusicImage />
      <MusicControls />
      <MusicAudioControls />
    </footer>
  );
}