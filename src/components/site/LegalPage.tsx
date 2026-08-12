import { footer } from "@/content/site";

export function LegalPage({
  title,
  sections,
}: {
  title: string;
  sections: { heading: string; body: string[] }[];
}) {
  return (
    <article className="surface-card p-6 md:p-8">
      <h1 className="text-2xl font-bold tracking-tight md:text-3xl">{title}</h1>
      <p className="mt-2 text-xs text-muted-foreground">Last updated: 2026</p>

      <div className="mt-6 space-y-6">
        {sections.map((s) => (
          <section key={s.heading}>
            <h2 className="text-lg font-semibold tracking-tight">{s.heading}</h2>
            {s.body.map((p) => (
              <p key={p} className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {p}
              </p>
            ))}
          </section>
        ))}
      </div>

      <p className="mt-8 text-xs text-muted-foreground">{footer.text}</p>
    </article>
  );
}

export default LegalPage;
