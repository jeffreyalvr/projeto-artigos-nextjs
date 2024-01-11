const Box = ({
  title,
  subtitle,
  children,
}: {
  title: string | undefined;
  subtitle?: string | undefined;
  children: React.ReactNode;
}) => {
  return (
    <div className="rounded-lg border-2 border-slate-200 p-8">
      <header className="border-b pb-6 mb-6">
        <h1 className="text-3xl text-black font-bold">{title}</h1>
        {subtitle ? (
          <span className="inline-block mt-4 text-gray-500 text-sm italic">
            {subtitle}
          </span>
        ) : null}
      </header>
      <div className="flex flex-col gap-6 w-full">
        {children ? children : null}
      </div>
    </div>
  );
};

export default Box;
