import Link from "next/link";
import Image from "next/image";

import facebook_img from "/public/icons/facebook.png";
import whatsapp_img from "/public/icons/whatsapp.png";
import telegram_img from "/public/icons/telegram.png";
import x_img from "/public/icons/x.png";

const Footer = ({
  descricaoParaCompartilhamento,
  url,
}: {
  descricaoParaCompartilhamento: string;
  url: string;
}) => {
  return (
    <footer className="flex flex-row flex-wrap items-center gap-3 border-t pt-6">
      <span className="text-gray-500">Compartilhar:</span>
      <Link
        href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
        className="inline-flex"
      >
        <Image
          src={facebook_img}
          width="24"
          height="24"
          alt="Facebook"
          title="Facebook"
        />
      </Link>
      <Link
        href={`https://api.whatsapp.com/send?text=${descricaoParaCompartilhamento}`}
        className="inline-flex"
      >
        <Image
          src={whatsapp_img}
          width="24"
          height="24"
          alt="WhatsApp"
          title="WhatsApp"
        />
      </Link>
      <Link
        href={`https://t.me/share/url?url=${url}&text=${descricaoParaCompartilhamento}`}
        className="inline-flex"
      >
        <Image
          src={telegram_img}
          width="24"
          height="24"
          alt="Telegram"
          title="Telegram"
        />
      </Link>
      <Link
        href={`https://twitter.com/intent/tweet?text=${descricaoParaCompartilhamento}`}
        className="inline-flex"
      >
        <Image src={x_img} width="24" height="24" alt="X" title="X" />
      </Link>
    </footer>
  );
};

export default Footer;
