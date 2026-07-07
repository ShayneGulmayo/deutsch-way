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
            <p className="mt-4 text-sm leading-relaxed text-[var(--text-muted)]">
              Purok 2, Capareda St., Lagao, General Santos City, Philippines
            </p>
          </div>
          <AssessmentForm />
        </div>

        <div className="mt-10 border-t border-[var(--border-color)] pt-8">
          <p className="text-center text-xs leading-relaxed text-[var(--text-muted)]">
            Deutsch-Way Language Training Center provides German language
            training and guidance on educational pathways. Employment
            opportunities and admission decisions are handled by authorized
            institutions and partner organizations.
          </p>
          <p className="mt-4 text-center text-xs text-[var(--text-muted)]">
            &copy; {new Date().getFullYear()} Deutsch-Way Language Training
            Center. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
