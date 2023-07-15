import Image from 'next/image';

export default function ShortPlaylist() {
  return (
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
  );
}