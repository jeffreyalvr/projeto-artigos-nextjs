import Link from "next/link";

const Footer = ({
  descricaoParaCompartilhamento,
  url,
}: {
  descricaoParaCompartilhamento: string;
  url: string;
}) => {
  return (
    <footer className="flex flex-row flex-wrap items-center gap-2 border-t pt-6">
      <span className="text-gray-500">Compartilhar:</span>
      <Link
        href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
        className="inline-flex px-4 py-1 rounded-lg bg-zinc-200 hover:opacity-75"
      >
        Facebook
      </Link>
      <Link
        href={`https://api.whatsapp.com/send?text=${descricaoParaCompartilhamento}`}
        className="inline-flex px-4 py-1 rounded-lg bg-zinc-200 hover:opacity-75"
      >
        WhatsApp
      </Link>
      <Link
        href={`https://t.me/share/url?url=${url}&text=${descricaoParaCompartilhamento}`}
        className="inline-flex px-4 py-1 rounded-lg bg-zinc-200 hover:opacity-75"
      >
        Telegram
      </Link>
      <Link
        href={`https://twitter.com/intent/tweet?text=${descricaoParaCompartilhamento}`}
        className="inline-flex px-4 py-1 rounded-lg bg-zinc-200 hover:opacity-75"
      >
        X
      </Link>
    </footer>
  );
};

export default Footer;
