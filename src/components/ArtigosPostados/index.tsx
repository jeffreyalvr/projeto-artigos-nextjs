import Link from "next/link";

const ArtigosPostados = () => {
  interface Artigo {
    id: number;
    title: string;
  }

  const artigos: Array<Artigo> = [];

  return (
    <div className="flex flex-col gap-1">
      {artigos.length > 0 ? (
        artigos.map((artigo: Artigo) => (
          <Link
            href={`/${artigo.id}`}
            key={artigo.id}
            title="Clique par ler o artigo"
            className="hover:opacity-85 hover:underline"
          >
            {artigo.title}
          </Link>
        ))
      ) : (
        <p className="italic text-slate-500">Nenhum artigo postado.</p>
      )}
    </div>
  );
};

export default ArtigosPostados;
