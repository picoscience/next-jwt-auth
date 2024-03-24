import LoginButton from "../atoms/buttons/LoginButton";

export default function FormLayout({
  children,
  textButton = "",
  className = "",
  onSubmit,
}: {
  children: React.ReactNode;
  textButton?: string;
  className?: string;
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
}) {
  return (
    <form
      onSubmit={onSubmit}
      className={
        className
          ? className
          : "flex items-center justify-center relative flex-col py-8"
      }
    >
      {children}
      {textButton && (
        <LoginButton
          className="bg-[#78A083]/80 hover:bg-[#78A083]/50 transition-colors bg-opacity-70 px-12 py-2 rounded-lg my-5 text-[#0F1035]"
          text={textButton}
        />
      )}
    </form>
  );
}
