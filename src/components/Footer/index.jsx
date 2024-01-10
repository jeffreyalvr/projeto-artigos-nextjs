import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full text-center py-10">
      <span>
        Feito por{" "}
        <Link
          href="https://jeffreyalvr.dev"
          target="_blank"
          rel="noopener noreferrer"
          title="Clique para abrir o meu GitHub"
          className="text-sky-600 hover:opacity-85 hover:underline"
        >
          @jeffreyalvr
        </Link>
        .
      </span>
    </footer>
  );
};

export default Footer;
