import Link from "next/link";

import Box from "../../components/Box";

const Criar = () => {
  return (
    <Box title="Criar novo artigo">
      <form className="flex flex-col gap-8">
        <div className="flex flex-col gap-4 w-full">
          <label htmlFor="title">Título</label>
          <input
            type="text"
            id="title"
            placeholder="Como o artigo se chama?"
            className="border p-2 rounded-lg"
          />
          <label htmlFor="content">Conteúdo</label>
          <textarea
            id="content"
            placeholder="Sobre o que você quer falar?"
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
          <button className="px-4 py-2 rounded-lg text-center bg-black text-white hover:opacity-85">
            Criar
          </button>
        </div>
      </form>
    </Box>
  );
};

export default Criar;
