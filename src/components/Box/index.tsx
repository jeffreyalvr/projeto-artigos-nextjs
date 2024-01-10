const Box = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="rounded-lg border-2 border-slate-200 p-8">
      <h1 className="text-3xl text-sky-700 font-bold border-b-2 border-slate-100 py-4 mb-4">
        {title}
      </h1>
      {children ? <div>{children}</div> : null}
    </div>
  );
};

export default Box;
