import {
  Home as HomeIcon,
  Search,
  Library,
  ChevronRight,
  ChevronLeft,
  Play,
  Shuffle,
  SkipBack,
  SkipForward,
  Repeat,
  Mic2,
  Laptop2,
  LayoutList,
  Volume,
  Maximize2,
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <nav className="space-y-5 mt-10">
            <a
              href="#"
              className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
            >
              <HomeIcon />
              Home
            </a>
            <a
              href="#"
              className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
            >
              <Search />
              Search
            </a>
            <a
              href="#"
              className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
            >
              <Library />
              Your Library
            </a>
          </nav>

          <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3">
            <a href="" className="text-sm text-zinc-400 hover:text-sinc-100">
              Hot Hits Brasil
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-sinc-100">
              Aniver Funk
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-sinc-100">
              My Playlist
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-sinc-100">
              Top Brasil
            </a>
          </nav>
        </aside>

        <main className="flex-1 p-6">
          <div className="flex items-center gap-4">
            <button className="rounded-full bg-bleck/440 p-1">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-bleck/440 p-1">
              <ChevronRight />
            </button>
          </div>

          <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>

          <div className="grid grid-cols-3 gap-4 mt-4">
            <a
              href="#"
              className="bg-white/5 group rounded flex gap-4 items-center overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image
                src="/album.jpg"
                width={104}
                height={104}
                alt="Capa do Album Inferno de Cant"
              />
              <strong>Inferno de Kant (Deluxe)</strong>
              <button className="w-12 h-12 rounded-full bg-green-400 text-black ml-auto mr-8 flex items-center justify-center pl-1 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 group rounded flex gap-4 items-center overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image
                src="/album.jpg"
                width={104}
                height={104}
                alt="Capa do Album Inferno de Cant"
              />
              <strong>Inferno de Kant (Deluxe)</strong>
              <button className="w-12 h-12 rounded-full bg-green-400 text-black ml-auto mr-8 flex items-center justify-center pl-1 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 group rounded flex gap-4 items-center overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image
                src="/album.jpg"
                width={104}
                height={104}
                alt="Capa do Album Inferno de Cant"
              />
              <strong>Inferno de Kant (Deluxe)</strong>
              <button className="w-12 h-12 rounded-full bg-green-400 text-black ml-auto mr-8 flex items-center justify-center pl-1 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 group rounded flex gap-4 items-center overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image
                src="/album.jpg"
                width={104}
                height={104}
                alt="Capa do Album Inferno de Cant"
              />
              <strong>Inferno de Kant (Deluxe)</strong>
              <button className="w-12 h-12 rounded-full bg-green-400 text-black ml-auto mr-8 flex items-center justify-center pl-1 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 group rounded flex gap-4 items-center overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image
                src="/album.jpg"
                width={104}
                height={104}
                alt="Capa do Album Inferno de Cant"
              />
              <strong>Inferno de Kant (Deluxe)</strong>
              <button className="w-12 h-12 rounded-full bg-green-400 text-black ml-auto mr-8 flex items-center justify-center pl-1 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 group rounded flex gap-4 items-center overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image
                src="/album.jpg"
                width={104}
                height={104}
                alt="Capa do Album Inferno de Cant"
              />
              <strong>Inferno de Kant (Deluxe)</strong>
              <button className="w-12 h-12 rounded-full bg-green-400 text-black ml-auto mr-8 flex items-center justify-center pl-1 invisible group-hover:visible">
                <Play />
              </button>
            </a>
          </div>

          <h2 className="font-semibold text-2xl mt-10">Good Afternoon</h2>
          <div className="grid grid-cols-8 gap-4 mt-4">
            <a
              href="#"
              className="bg-white/5 p-2 rounded-s-md flex flex-col hover:bg-white/10"
            >
              <Image
                src="/album.jpg"
                width={104}
                height={104}
                alt="Capa do Album Inferno de Cant"
                className="w-full"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-xs text-zinc-500">Kant, Chiock, Sid</span>
            </a>
            <a
              href="#"
              className="bg-white/5 p-2 rounded-s-md flex flex-col hover:bg-white/10"
            >
              <Image
                src="/album.jpg"
                width={104}
                height={104}
                alt="Capa do Album Inferno de Cant"
                className="w-full"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-xs text-zinc-500">Kant, Chiock, Sid</span>
            </a>
            <a
              href="#"
              className="bg-white/5 p-2 rounded-s-md flex flex-col hover:bg-white/10"
            >
              <Image
                src="/album.jpg"
                width={104}
                height={104}
                alt="Capa do Album Inferno de Cant"
                className="w-full"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-xs text-zinc-500">Kant, Chiock, Sid</span>
            </a>
            <a
              href="#"
              className="bg-white/5 p-2 rounded-s-md flex flex-col hover:bg-white/10"
            >
              <Image
                src="/album.jpg"
                width={104}
                height={104}
                alt="Capa do Album Inferno de Cant"
                className="w-full"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-xs text-zinc-500">Kant, Chiock, Sid</span>
            </a>
            <a
              href="#"
              className="bg-white/5 p-2 rounded-s-md flex flex-col hover:bg-white/10"
            >
              <Image
                src="/album.jpg"
                width={104}
                height={104}
                alt="Capa do Album Inferno de Cant"
                className="w-full"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-xs text-zinc-500">Kant, Chiock, Sid</span>
            </a>
          </div>
        </main>
      </div>
      <footer className="bg-zinc-850 border-t border-zinc-700 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/album.jpg"
            width={56}
            height={56}
            alt="Capa do Album Inferno de Cant"
          />
          <div className="flex flex-col">
            <strong className="font-normal">Mercúrio</strong>
            <span className="text-xs text-zinc-400">Kant</span>
          </div>
        </div>
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
        <div className="flex items-center gap-2">
          <Mic2 size={20} />
          <LayoutList size={20} />
          <Laptop2 size={20} />
          <div className="flex items-center gap-2">
            <Volume size={20} />
            <div className="h-1 rounded-full w-24 bg-zinc-600">
              <div className="bg-zinc-200 w-14 h-1 rounded-full"></div>
            </div>
          </div>
          <Maximize2 size={20} />
        </div>
      </footer>
    </div>
  );
}
