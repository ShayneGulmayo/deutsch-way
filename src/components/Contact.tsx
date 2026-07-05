import { useState, type FormEvent } from 'react'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [isSending, setIsSending] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const form = e.currentTarget
    const formData = new FormData(form)
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    const ownerEmail = import.meta.env.VITE_OWNER_EMAIL

    if (!serviceId || !templateId || !publicKey || !ownerEmail) {
      setErrorMessage('Email delivery is not configured yet. Please contact us by phone or email.')
      return
    }

    setIsSending(true)
    setErrorMessage('')

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          to_email: ownerEmail,
          from_name: String(formData.get('name') ?? ''),
          from_email: String(formData.get('email') ?? ''),
          phone_number: String(formData.get('phone') ?? ''),
          message: String(formData.get('message') ?? ''),
          reply_to: String(formData.get('email') ?? ''),
        },
        {
          publicKey,
        },
      )

      setSubmitted(true)
      form.reset()
    } catch {
      setErrorMessage('We could not send your inquiry right now. Please try again in a moment.')
    } finally {
      setIsSending(false)
    }
  }

  return (
    <section id="contact" className="bg-[var(--bg-secondary)] py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <span className="text-sm font-semibold tracking-wider text-german-red uppercase">
              Get Started
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to Enroll?
            </h2>
            <p className="mt-4 text-lg text-[var(--text-secondary)]">
              Take the first step toward your future in Germany. Contact us for a
              free counseling session and eligibility assessment.
            </p>

            <div className="mt-8 space-y-6">
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
            </div>
          </div>

          <div className="rounded-2xl border border-[var(--border-color)] bg-[var(--bg-elevated)] p-8 shadow-[var(--card-shadow)]">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center py-12 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-german-gold/20 text-german-gold-dark">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8">
                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="mt-4 text-xl font-bold">Thank You!</h3>
                <p className="mt-2 text-[var(--text-secondary)]">
                  We&apos;ve received your inquiry. Our team will contact you soon.
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-bold">Request Free Assessment</h3>
                <p className="mt-2 text-sm text-[var(--text-muted)]">
                  Fill out the form and we&apos;ll get back to you within 24 hours.
                </p>
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="mt-1 w-full rounded-lg border border-[var(--border-color)] bg-[var(--bg-primary)] px-4 py-2.5 text-[var(--text-primary)] outline-none transition-colors focus:border-german-red focus:ring-2 focus:ring-german-red/20"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="mt-1 w-full rounded-lg border border-[var(--border-color)] bg-[var(--bg-primary)] px-4 py-2.5 text-[var(--text-primary)] outline-none transition-colors focus:border-german-red focus:ring-2 focus:ring-german-red/20"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="mt-1 w-full rounded-lg border border-[var(--border-color)] bg-[var(--bg-primary)] px-4 py-2.5 text-[var(--text-primary)] outline-none transition-colors focus:border-german-red focus:ring-2 focus:ring-german-red/20"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium">
                      Message (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      className="mt-1 w-full rounded-lg border border-[var(--border-color)] bg-[var(--bg-primary)] px-4 py-2.5 text-[var(--text-primary)] outline-none transition-colors focus:border-german-red focus:ring-2 focus:ring-german-red/20"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSending}
                    className="w-full rounded-full bg-german-red py-3.5 text-base font-semibold text-white transition-colors hover:bg-german-red-dark disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {isSending ? 'Sending Inquiry...' : 'Submit Inquiry'}
                  </button>
                  {errorMessage ? (
                    <p className="text-sm text-german-red" role="alert">
                      {errorMessage}
                    </p>
                  ) : null}
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
