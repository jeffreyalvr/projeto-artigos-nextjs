import Link from "next/link";

import Box from "../components/Box";
import ArtigosPostados from "../components/ArtigosPostados";

const Home = () => {
  return (
    <Box title="Artigos postados">
      <ArtigosPostados />
      <Link
        href="/criar"
        className="px-4 py-2 rounded-lg text-center bg-sky-800 text-white hover:opacity-85"
      >
        Novo artigo
      </Link>
    </Box>
  );
};

export default Home;
