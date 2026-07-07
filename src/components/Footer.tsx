import logo from "../assets/logo.png";
import AssessmentForm from "./AssessmentForm";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border-color)] bg-[var(--bg-primary)]">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <div className="flex items-center gap-3">
              <img src={logo} alt="deutsch-way logo" className="h-10 w-10" />
              <span className="font-display text-lg font-bold">
                <span className="text-german-red">deutsch</span>
                <span className="text-german-gold">-way</span>
              </span>
            </div>
            <p className="mt-4 text-sm text-[var(--text-muted)]">
              <strong>Deutsch-Way Language Training Center</strong>  — Your Partner to Germany
            </p>
            <p className="mt-4 text-sm text-[var(--text-muted)]">
              <a
                href="mailto:info@deutsch-way.com"
                className="hover:text-german-gold"
              >
                info@deutsch-way.com
              </a>
            </p>
            <p className="mt-4 text-sm text-[var(--text-muted)]">
              <a
                href="tel:+639176353254"
                className="hover:text-german-gold"
              >
                0917 635 3254
              </a>
            </p>
            <p className="mt-4 mb-5 text-sm leading-relaxed text-[var(--text-muted)]">
              Purok 2, Capareda St., Lagao, General Santos City, Philippines
            </p>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1877F2]/10 text-[#1877F2]">
              <a href="https://www.facebook.com/profile.php?id=61590450644946">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                <path d="M22 12a10 10 0 10-11.5 9.9v-7h-2.5v-2.9h2.5V9.3c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.3.2 2.3.2v2.5h-1.3c-1.3 0-1.7.8-1.7 1.6v1.9h2.9l-.5 2.9h-2.4v7A10 10 0 0022 12z" />
              </svg>
              </a>
            </div>
          </div>
          <AssessmentForm />
        </div>

        <div className="mt-10 border-t border-[var(--border-color)] pt-8">
          <p className="mt-4 text-center text-xs text-[var(--text-muted)]">
            &copy; {new Date().getFullYear()} Deutsch-Way Language Training
            Center. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
