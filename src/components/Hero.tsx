export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-24">
      <div
        className="absolute inset-0 -z-10"
        style={{ background: 'var(--hero-gradient)' }}
      />
      <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-german-gold/10 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-german-red/10 blur-3xl" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="animate-fade-up mb-6 inline-flex items-center gap-2 rounded-full border border-german-gold/40 bg-german-gold/10 px-4 py-1.5">
            <span className="h-2 w-2 rounded-full bg-german-red" />
            <span className="text-sm font-medium text-german-red">
              Your Partner to Germany
            </span>
          </div>

          <h1 className="animate-fade-up-delay-1 font-display text-4xl leading-tight font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Your Future.{' '}
            <span className="text-german-red">Your Career.</span>{' '}
            <span className="text-german-gold">Your Way.</span>
          </h1>

          <p className="animate-fade-up-delay-2 mt-6 max-w-2xl text-lg leading-relaxed text-[var(--text-secondary)] sm:text-xl">
            Are you ready for <strong className="text-[var(--text-primary)]">Ausbildung in Germany</strong>?
            Learn German. Gain skills. Build a future that lasts.
          </p>

          <div className="animate-fade-up-delay-2 mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-german-red px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-german-red/25 transition-all hover:bg-german-red-dark hover:shadow-xl"
            >
              Start Your Journey
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border-2 border-german-gold bg-german-gold/10 px-8 py-3.5 text-base font-semibold text-[var(--text-primary)] transition-all hover:bg-german-gold/20"
            >
              Free Counseling & Assessment
            </a>
          </div>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-3">
          {[
            { stat: 'Earn', label: 'While You Learn' },
            { stat: 'No Tuition', label: 'In Public Institutions' },
            { stat: 'High Demand', label: 'Secure Future Careers' },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-[var(--border-color)] bg-[var(--bg-elevated)] p-6 text-center shadow-[var(--card-shadow)]"
            >
              <p className="font-display text-2xl font-bold text-german-red">{item.stat}</p>
              <p className="mt-1 text-sm text-[var(--text-muted)]">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
