export default function LoginLayout({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-3xl bg-white bg-opacity-30 flex flex-col justify-center items-center relative shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
      <h1 className="mt-8 w-full text-start text-4xl px-8 text-white">
        {title}
      </h1>
      {children}
    </div>
  );
}
