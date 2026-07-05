const benefits = [
  {
    title: 'Earn While You Learn',
    description: 'Receive a training salary while gaining hands-on experience in your chosen field.',
    color: 'red',
  },
  {
    title: 'No Tuition Fees',
    description: 'Public training institutions in Germany charge no tuition — focus on learning, not debt.',
    color: 'gold',
  },
  {
    title: 'High-Demand Careers',
    description: 'Train in fields with strong job markets and long-term career security in Germany.',
    color: 'red',
  },
  {
    title: 'Your Partner to Germany',
    description: 'From language training to arrival support — we guide you every step of the way.',
    color: 'gold',
  },
]

export default function Benefits() {
  return (
    <section className="bg-[var(--bg-secondary)] py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-semibold tracking-wider text-german-red uppercase">
            Why Ausbildung
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Build a Future That Lasts
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className={`relative overflow-hidden rounded-2xl border border-[var(--border-color)] bg-[var(--bg-elevated)] p-8 shadow-[var(--card-shadow)]`}
            >
              <div
                className={`absolute top-0 left-0 h-1 w-full ${
                  benefit.color === 'red' ? 'bg-german-red' : 'bg-german-gold'
                }`}
              />
              <h3 className="text-xl font-bold">{benefit.title}</h3>
              <p className="mt-3 leading-relaxed text-[var(--text-secondary)]">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
