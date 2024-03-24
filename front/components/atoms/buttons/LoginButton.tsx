export default function LoginButton({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  return (
    <button type="submit" className={className}>
      {text}
    </button>
  );
}
