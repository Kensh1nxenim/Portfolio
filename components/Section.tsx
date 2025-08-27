export function Section({
  id,
  title,
  subtitle,
  children
}: {
  id?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="section">
      <div className="container space-y-4">
        <h2 className="h2">{title}</h2>
        {subtitle && <p className="p">{subtitle}</p>}
        {children}
      </div>
    </section>
  );
}
