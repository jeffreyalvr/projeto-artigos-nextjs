import Link from "next/link";

interface Artigo {
  id: number;
  title: string;
}

const ArtigosPostados = ({ listaArtigos }: { listaArtigos: Array<Artigo> }) => {
  return (
    <div className="flex flex-col gap-1">
      {listaArtigos.length > 0 ? (
        listaArtigos.map((artigo: Artigo) => (
          <Link
            href={`/artigo/${artigo.id}`}
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
