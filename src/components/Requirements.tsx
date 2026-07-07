const requirements = [
  '18–35 years old',
  'Valid passport or willing to apply for one',
  'SHS graduate, college undergraduate, or college graduate',
  'Willing to learn German',
  'Ready to embrace a new culture and overcome language barriers',
  'Committed to personal and professional growth',
  'Excited to build your future and explore Europe',
]

export default function Requirements() {
  return (
    <section className="bg-[var(--bg-secondary)] py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-semibold tracking-wider text-german-red uppercase">
            Eligibility
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Are You a Good Fit?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[var(--text-secondary)]">
            We look for motivated individuals ready to invest in their future.
            Check if you meet these requirements.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {requirements.map((req, index) => (
            <div
              key={req}
              className="group flex items-start gap-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-elevated)] p-5 transition-all hover:border-german-gold/50 hover:shadow-[var(--card-shadow)]"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-german-red text-sm font-bold text-white">
                {index + 1}
              </span>
              <p className="pt-2 text-[var(--text-secondary)] group-hover:text-[var(--text-primary)]">
                {req}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#assessment"
            className="inline-flex items-center gap-2 rounded-full bg-german-gold px-8 py-3.5 text-base font-semibold text-brand-dark transition-all hover:bg-german-gold-dark"
          >
            Check Your Eligibility — Free Assessment
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
              <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
