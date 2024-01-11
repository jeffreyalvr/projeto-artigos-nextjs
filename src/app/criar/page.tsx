import { prisma } from "@/db";
import { redirect } from "next/navigation";
import Link from "next/link";

import Box from "@/components/Box";
import SubmitButton from "@/app/criar/components/SubmitButton";

const Criar = () => {
  const handleSubmit = async (formData: FormData) => {
    "use server";
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;

    if (!title || !content) return alert("campos vazios");

    await prisma.artigo.create({ data: { title, content } });
    redirect("/");
  };

  return (
    <Box title="Criar novo artigo">
      <form action={handleSubmit} className="flex flex-col gap-8">
        <div className="flex flex-col gap-4 w-full">
          <label htmlFor="title">Título</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Como o artigo se chama?"
            required
            maxLength={155}
            className="border p-2 rounded-lg"
          />
          <label htmlFor="content">Conteúdo</label>
          <textarea
            id="content"
            name="content"
            placeholder="Sobre o que você quer falar?"
            required
            className="border p-2 rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-1 w-full justify-end sm:flex-row">
          <Link
            href="/"
            className="px-4 py-2 rounded-lg text-center bg-white border border-slate-300 text-black hover:bg-gray-100"
          >
            Cancelar
          </Link>
          <SubmitButton />
        </div>
      </form>
    </Box>
  );
};

export default Criar;
