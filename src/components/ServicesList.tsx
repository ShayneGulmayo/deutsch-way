const services = [
  {
    title: "A1 Beginner",
    description: "",
  },
  {
    title: "A2 Elementary",
    description: "",
  },
  {
    title: "B1 Intermediate",
    description: "",
  },
  {
    title: "B2 Upper Intermediate",
    description: "",
  },
  {
    title: "Finnish Language Training",
    description: "",
  },
];

export default function ServicesList() {
  return (
    <section className="py-16 pt-28 sm:py-24 sm:pt-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-semibold tracking-wider text-german-red uppercase">
            What We Offer
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Our Services
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[var(--text-secondary)]">
            Deutsch-Way provides German language training and guidance on
            educational pathways. Employment opportunities and admission
            decisions are handled by authorized institutions and partner
            organizations.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="relative overflow-hidden rounded-2xl border border-[var(--border-color)] bg-[var(--bg-elevated)] p-6 shadow-[var(--card-shadow)]"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-dark text-sm font-bold text-white">
                {index + 1}
              </span>
              <h3 className="mt-4 text-lg font-bold">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
