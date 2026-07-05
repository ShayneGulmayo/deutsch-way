export default function Footer() {
  return (
    <footer className="border-t border-[var(--border-color)] bg-[var(--bg-primary)] py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-3">
            <div className="flag-stripe h-8 w-2 rounded-sm" />
            <span className="font-display text-lg font-bold">
              <span className="text-german-red">deutsch</span>
              <span className="text-german-gold">-way</span>
            </span>
          </div>
          <p className="text-center text-sm text-[var(--text-muted)]">
            Language Training Center — Your Partner to Germany
          </p>
        </div>

        <div className="mt-8 border-t border-[var(--border-color)] pt-8">
          <p className="text-center text-xs leading-relaxed text-[var(--text-muted)]">
            Deutsch-Way Language Training Center provides German language training and
            guidance on educational pathways. Employment opportunities and admission
            decisions are handled by authorized institutions and partner organizations.
          </p>
          <p className="mt-4 text-center text-xs text-[var(--text-muted)]">
            &copy; {new Date().getFullYear()} Deutsch-Way Language Training Center. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
