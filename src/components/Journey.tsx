const steps = [
  {
    step: 1,
    title: 'Free Counseling & Assessment',
    description: 'Meet with our team to evaluate your eligibility and discuss your career goals.',
  },
  {
    step: 2,
    title: 'German Language Training',
    description: 'Build the language skills you need through structured, professional instruction.',
  },
  {
    step: 3,
    title: 'Ausbildung Application Support',
    description: 'Get guidance on applications, documents, and requirements for your chosen path.',
  },
  {
    step: 4,
    title: 'Placement in Partner Companies',
    description: 'Connect with authorized partner organizations for training placements in Germany.',
  },
  {
    step: 5,
    title: 'Travel & Arrival Support',
    description: 'Receive assistance as you prepare to travel and settle into your new life in Germany.',
  },
]

export default function Journey() {
  return (
    <section id="journey" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-semibold tracking-wider text-german-red uppercase">
            How It Works
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Your Journey to Germany
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[var(--text-secondary)]">
            From your first consultation to arriving in Germany — we support you at every stage.
          </p>
        </div>

        <div className="relative mt-16">
          <div className="absolute top-0 left-8 hidden h-full w-0.5 bg-gradient-to-b from-german-red via-german-gold to-german-red sm:left-1/2 sm:block sm:-translate-x-px" />

          <div className="space-y-12">
            {steps.map((item, index) => (
              <div
                key={item.step}
                className={`relative flex flex-col gap-6 sm:flex-row sm:items-center ${
                  index % 2 === 0 ? 'sm:flex-row-reverse' : ''
                }`}
              >
                <div className="hidden sm:block sm:w-1/2" />
                <div
                  className={`sm:w-1/2 ${
                    index % 2 === 0 ? 'sm:pr-12 sm:text-right' : 'sm:pl-12'
                  }`}
                >
                  <div className="rounded-2xl border border-[var(--border-color)] bg-[var(--bg-elevated)] p-6 shadow-[var(--card-shadow)]">
                    <span className="text-sm font-semibold text-german-gold">
                      Step {item.step}
                    </span>
                    <h3 className="mt-1 text-lg font-bold">{item.title}</h3>
                    <p className="mt-2 text-[var(--text-secondary)]">{item.description}</p>
                  </div>
                </div>

                <div className="absolute left-8 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-german-red text-sm font-bold text-white shadow-lg sm:left-1/2">
                  {item.step}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
