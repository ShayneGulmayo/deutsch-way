import { useState, type FormEvent } from 'react'
import emailjs from '@emailjs/browser'

export default function AssessmentForm() {
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
    <div
      id="assessment"
      className="scroll-mt-24 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-elevated)] p-6 shadow-[var(--card-shadow)] sm:p-8"
    >
      {submitted ? (
        <div className="flex flex-col items-center py-8 text-center">
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
              <label htmlFor="assessment-name" className="block text-sm font-medium">
                Full Name
              </label>
              <input
                type="text"
                id="assessment-name"
                name="name"
                required
                className="mt-1 w-full rounded-lg border border-[var(--border-color)] bg-[var(--bg-primary)] px-4 py-2.5 text-[var(--text-primary)] outline-none transition-colors focus:border-german-red focus:ring-2 focus:ring-german-red/20"
              />
            </div>
            <div>
              <label htmlFor="assessment-email" className="block text-sm font-medium">
                Email Address
              </label>
              <input
                type="email"
                id="assessment-email"
                name="email"
                required
                className="mt-1 w-full rounded-lg border border-[var(--border-color)] bg-[var(--bg-primary)] px-4 py-2.5 text-[var(--text-primary)] outline-none transition-colors focus:border-german-red focus:ring-2 focus:ring-german-red/20"
              />
            </div>
            <div>
              <label htmlFor="assessment-phone" className="block text-sm font-medium">
                Phone Number
              </label>
              <input
                type="tel"
                id="assessment-phone"
                name="phone"
                required
                className="mt-1 w-full rounded-lg border border-[var(--border-color)] bg-[var(--bg-primary)] px-4 py-2.5 text-[var(--text-primary)] outline-none transition-colors focus:border-german-red focus:ring-2 focus:ring-german-red/20"
              />
            </div>
            <div>
              <label htmlFor="assessment-message" className="block text-sm font-medium">
                Message (Optional)
              </label>
              <textarea
                id="assessment-message"
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
  )
}
