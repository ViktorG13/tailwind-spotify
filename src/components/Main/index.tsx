import ChevronControls from "./ChevronControls";
import LargePlaylist from "./LargePlaylist";
import ShortPlaylist from "./ShortPlaylist";

export default function Main() {
  return (
    <main className="flex-1 p-6">
      <ChevronControls />
      <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>
      <LargePlaylist />
      <h2 className="font-semibold text-2xl mt-10">Recomendarions</h2>
      <ShortPlaylist />
    </main>
  );
}