export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="text-sm font-semibold tracking-wider text-german-red uppercase">
              About Deutsch-Way
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Do You Have What It Takes?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[var(--text-secondary)]">
              Deutsch-Way Language Training Center provides German language training
              and guidance on educational pathways — helping you take the first step
              toward a rewarding career in Germany.
            </p>
            <p className="mt-4 text-[var(--text-muted)]">
              We prepare you with the language skills and support you need. Employment
              opportunities and admission decisions are handled by authorized institutions
              and partner organizations.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-german-red/20 to-german-gold/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl border border-[var(--border-color)] bg-[var(--bg-elevated)] shadow-[var(--card-shadow)]">
              <div className="flag-stripe h-2 w-full" />
              <div className="p-8">
                <h3 className="text-xl font-bold">Why Choose Germany?</h3>
                <ul className="mt-6 space-y-4">
                  {[
                    'Earn while you learn through dual vocational training',
                    'No tuition fees in public training institutions',
                    'High-demand careers with a secure future',
                    'Explore Europe while building your life abroad',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-german-gold/20 text-german-red">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                          <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="text-[var(--text-secondary)]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
