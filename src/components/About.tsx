export default function About() {
  return (
    <section className="py-16 pt-28 sm:py-24 sm:pt-32">
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
              Deutsch-Way Language Training Center is a premier language
              institution committed to empowering Filipinos with the language
              skills, cultural competence, and confidence needed to pursue
              educational and career opportunities in Germany
            </p>
            <p className="mt-4 text-[var(--text-muted)]">
              Founded with the vision of transforming lives through education,
              Deutsch-Way provides comprehensive German language training
              aligned with the Common European Framework of Reference for
              Languages (CEFR), from A1 to B2 levels. Our programs are designed
              to help students communicate effectively and prepare for
              internationally recognized German language examinations.
            </p>
            <p className="mt-4 text-[var(--text-muted)]">
              At Deutsch-Way, learning goes beyond the classroom. We foster a
              supportive, interactive, and learner-centered environment where
              every student is encouraged to develop practical communication
              skills, cultural awareness, and the confidence to thrive in a
              global setting. With dedicated instructors, quality learning
              materials, and a passion for student success, Deutsch-Way Language
              Training Center remains committed to helping every learner move
              one step closer to achieving their German dream.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-german-red/20 to-german-gold/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl border border-[var(--border-color)] bg-[var(--bg-elevated)] shadow-[var(--card-shadow)]">
              <div className="flag-stripe h-2 w-full" />
              <div className="p-8">
                <h3 className="text-xl font-bold">Our Mission</h3>
                <p className="mt-4 text-[var(--text-secondary)]">
                  To provide accessible, high-quality language education that
                  empowers learners with the knowledge, skills, and confidence
                  needed to succeed in an increasingly global environment. We
                  strive to create a supportive learning experience that
                  promotes excellence, professionalism, and lifelong learning.
                </p>
                <h3 className="mt-5 text-xl font-bold">Our Vision</h3>
                <p className="mt-4 text-[var(--text-secondary)]">
                  To become a trusted and recognized language training
                  institution that inspires learners to pursue international
                  opportunities through language proficiency, cultural
                  understanding, and professional development.
                </p>
                <h3 className="mt-5 text-xl font-bold">Our Core Values</h3>
                <ul className="mt-6 space-y-4">
                  {[
                    "D - Dedication",
                    "E - Excellence",
                    "U - Unity",
                    "T - Trust",
                    "S - Service",
                    "C - Commitment",
                    "H - Honesty",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      
                      <span className="text-[var(--text-secondary)]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
