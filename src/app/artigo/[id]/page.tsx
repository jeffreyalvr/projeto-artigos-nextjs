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

  const artigo = await getArtigoPorId(1);
  return (
    <Box
      title={artigo?.title}
      subtitle={`postado em ${artigo?.createdAt.toLocaleString()}`}
    >
      <article>{artigo?.content}</article>
      <footer className="flex flex-row gap-2 border-t pt-6">
        <span className="text-gray-500">Compartilhar:</span>
        <Link href="/" className="hover:underline">
          Facebook
        </Link>
        <Link href="/" className="hover:underline">
          WhatsApp
        </Link>
        <Link href="/" className="hover:underline">
          Telegram
        </Link>
        <Link href="/" className="hover:underline">
          X
        </Link>
      </footer>
    </Box>
  );
};

export default Home;
