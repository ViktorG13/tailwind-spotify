import Image from "next/image";

export default function MusicImage() {
  return (
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
  );
}
