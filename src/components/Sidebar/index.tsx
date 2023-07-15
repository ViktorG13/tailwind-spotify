import BottomNavbar from "./BottomNavbar";
import CircleIcons from "./CircleIcons";
import TopNavbar from "./TopNavbar";

export default function Sidebar() {
  return (
    <aside className="w-72 bg-zinc-950 p-6">
      <CircleIcons />
      <TopNavbar />
      <BottomNavbar />
    </aside>
  );
}