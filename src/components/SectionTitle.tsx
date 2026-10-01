type Props = { title: string; caption: string; dark?: boolean };

export default function SectionTitle({ title, caption, dark = false }: Props) {
  return (
    <div className="mb-12 text-center">
      <h2 className={`font-display text-4xl tracking-wide sm:text-5xl ${dark ? "text-white" : "text-ink"}`}>{title}</h2>
      <p className={`mt-2 text-sm ${dark ? "text-white/60" : "text-ink/50"}`}>{caption}</p>
      <div className={`mx-auto mt-4 h-1 w-10 rounded-full ${dark ? "bg-white" : "bg-accent"}`} />
    </div>
  );
}
