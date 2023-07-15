import { Play } from "lucide-react";
import Image from "next/image";

export default function LargePlaylist() {
  return (
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
  );
}
