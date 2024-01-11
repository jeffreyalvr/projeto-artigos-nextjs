import { prisma } from "@/db";
import { revalidatePath } from "next/cache";
import Link from "next/link";

import Box from "../components/Box";
import ArtigosPostados from "../components/ArtigosPostados";

const Home = async () => {
  const getArtigos = async () => {
    "use server";
    revalidatePath("/");
    return prisma.artigo.findMany();
  };

  const artigos = await getArtigos();
  return (
    <Box title="Artigos postados">
      <ArtigosPostados />
      <Link
        href="/criar"
        className="px-4 py-2 rounded-lg text-center bg-black text-white hover:opacity-85"
      >
        Novo artigo
      </Link>
    </Box>
  );
};

export default Home;
