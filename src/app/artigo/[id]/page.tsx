import { prisma } from "@/db";
import { revalidatePath } from "next/cache";
import Link from "next/link";
import Image from "next/image";

import Box from "@/components/Box";
import Footer from "./components/Footer";

import back_img from "/public/icons/back.png";

const Artigo = async ({ params }: { params: { id: number } }) => {
  const { id } = params;

  const getArtigoPorId = async (productId: number) => {
    revalidatePath("/");
    return prisma.artigo.findUnique({ where: { id: productId } });
  };

  const getTituloFormatadoParaURL = () => {
    if (!artigo) return "";
    // usa expressão regular para substituir vírgulas pelo "%20"
    return artigo.title.trim().replace(/ /g, "%20").toString();
  };

  const artigo = await getArtigoPorId(Number(id));

  const url = `https://projeto-artigos-nextjs.vercel.app/artigo/${artigo?.id}`;

  const tituloFormatadoParaURL = getTituloFormatadoParaURL();
  const descricaoParaCompartilhamento = `Venha%20ler%20o%20meu%20post%20"${tituloFormatadoParaURL}"%20no%20site%20${url}`;
  return (
    <>
      <div className="flex flex-row justify-center my-4 sm:justify-start sm:mb-4">
        <Link
          href="/"
          title="Voltar a homepage"
          className="flex flex-row gap-2 px-4 py-2 rounded-lg text-center bg-black text-white hover:opacity-85"
        >
          <Image
            src={back_img}
            width="24"
            height="24"
            alt="Facebook"
            title="Voltar"
          />
          Voltar a homepage
        </Link>
      </div>
      <Box
        title={artigo?.title}
        subtitle={`postado em ${artigo?.createdAt.toLocaleString()}`}
      >
        <article>{artigo?.content}</article>
        <Footer
          descricaoParaCompartilhamento={descricaoParaCompartilhamento}
          url={url}
        />
      </Box>
    </>
  );
};

export default Artigo;
