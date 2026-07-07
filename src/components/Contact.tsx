export default function Contact() {
  return (
    <section className="bg-[var(--bg-secondary)] py-16 pt-28 sm:py-24 sm:pt-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold tracking-wider text-german-red uppercase">
            Get in Touch
          </span>
          <h1 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Contact Us
          </h1>
          <p className="mt-4 text-lg text-[var(--text-secondary)]">
            Reach out by phone, email, or visit our training center. For a free
            eligibility assessment, use the form in the footer on any page.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <a
            href="tel:+639176353254"
            className="flex items-center gap-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-elevated)] p-5 transition-all hover:border-german-red/40 hover:shadow-[var(--card-shadow)]"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-german-red/10 text-german-red">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <p className="text-sm text-[var(--text-muted)]">Call Us</p>
              <p className="text-lg font-semibold">0917 635 3254</p>
            </div>
          </a>

          <a
            href="mailto:deutschway.ltc@gmail.com"
            className="flex items-center gap-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-elevated)] p-5 transition-all hover:border-german-gold/40 hover:shadow-[var(--card-shadow)]"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-german-gold/10 text-german-gold-dark">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
            </div>
            <div>
              <p className="text-sm text-[var(--text-muted)]">Email Us</p>
              <p className="text-lg font-semibold">deutschway.ltc@gmail.com</p>
            </div>
          </a>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Purok%202%2C%20Capareda%20St.%2C%20Lagao%2C%20General%20Santos%20City%2C%20Philippines"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-elevated)] p-5 transition-all hover:border-german-gold/40 hover:shadow-[var(--card-shadow)]"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-german-gold/10 text-german-gold-dark">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                <path d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
              </svg>
            </div>
            <div>
              <p className="text-sm text-[var(--text-muted)]">Visit Us</p>
              <p className="text-lg font-semibold">Purok 2, Capareda St., Lagao</p>
              <p className="text-sm text-[var(--text-muted)]">General Santos City, Philippines</p>
            </div>
          </a>

          <a
            href="https://www.facebook.com/profile.php?id=61590450644946"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-elevated)] p-5 transition-all hover:border-[#1877F2]/40 hover:shadow-[var(--card-shadow)]"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1877F2]/10 text-[#1877F2]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                <path d="M22 12a10 10 0 10-11.5 9.9v-7h-2.5v-2.9h2.5V9.3c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.3.2 2.3.2v2.5h-1.3c-1.3 0-1.7.8-1.7 1.6v1.9h2.9l-.5 2.9h-2.4v7A10 10 0 0022 12z" />
              </svg>
            </div>
            <div>
              <p className="text-sm text-[var(--text-muted)]">Visit & Message</p>
              <p className="text-lg font-semibold">Facebook</p>
              <p className="text-sm text-[var(--text-muted)]">deutschway.ltc</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
