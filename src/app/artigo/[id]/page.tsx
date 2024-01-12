import { prisma } from "@/db";
import { revalidatePath } from "next/cache";
import Link from "next/link";

import Box from "@/components/Box";

const Home = async () => {
  const getArtigoPorId = async (id: number) => {
    "use server";
    revalidatePath("/");
    return prisma.artigo.findUnique({ where: { id } });
  };

  const getTituloFormatadoParaURL = () => {
    if (!artigo) return "";
    // usa expressão regular para substituir vírgulas pelo "%20"
    return artigo.title.trim().replace(/ /g, "%20").toString();
  };

  const artigo = await getArtigoPorId(1);

  // TEMPORARY: adicionar url dinâmica posteriormente
  const url = `https://projeto-artigos-nextjs.vercel.app/artigo/${artigo?.id}`;

  const tituloFormatadoParaURL = getTituloFormatadoParaURL();
  const descricaoParaCompartilhamento = `Venha%20ler%20o%20meu%20post%20"${tituloFormatadoParaURL}"%20no%20site%20${url}`;
  return (
    <>
      <div className="flex flex-row justify-center my-4 sm:justify-start sm:mb-4">
        <Link
          href="/"
          title="Voltar a homepage"
          className="inline-flex px-4 py-2 rounded-lg text-center bg-black text-white hover:opacity-85"
        >
          Voltar a homepage
        </Link>
      </div>
      <Box
        title={artigo?.title}
        subtitle={`postado em ${artigo?.createdAt.toLocaleString()}`}
      >
        <article>{artigo?.content}</article>
        <footer className="flex flex-row flex-wrap gap-2 border-t pt-6">
          <span className="text-gray-500">Compartilhar:</span>
          <Link
            href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
            className="hover:underline"
          >
            Facebook
          </Link>
          <Link
            href={`https://api.whatsapp.com/send?text=${descricaoParaCompartilhamento}`}
            className="hover:underline"
          >
            WhatsApp
          </Link>
          <Link
            href={`https://t.me/share/url?url=${url}&text=${descricaoParaCompartilhamento}`}
            className="hover:underline"
          >
            Telegram
          </Link>
          <Link
            href={`https://twitter.com/intent/tweet?text=${descricaoParaCompartilhamento}`}
            className="hover:underline"
          >
            X
          </Link>
        </footer>
      </Box>
    </>
  );
};

export default Home;
