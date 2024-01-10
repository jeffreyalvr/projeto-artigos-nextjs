import Link from "next/link";

import Box from "../../components/Box";

const Criar = () => {
  return (
    <Box title="Criar novo artigo">
      <div className="flex flex-col gap-1 w-full sm:flex-row">
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
    </Box>
  );
};

export default Criar;
