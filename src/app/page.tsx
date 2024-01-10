import Box from "../components/Box";
import ArtigosPostados from "../components/ArtigosPostados";

const Home = () => {
  return (
    <Box title="Artigos postados">
      <ArtigosPostados />
      <button className="px-4 py-2 rounded-lg bg-sky-800 text-white hover:opacity-85">
        Novo artigo
      </button>
    </Box>
  );
};

export default Home;
