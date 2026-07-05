import { useState } from 'react'
import logo from '../assets/logo.png'
import ThemeToggle from './ThemeToggle'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#requirements', label: 'Requirements' },
  { href: '#careers', label: 'Careers' },
  { href: '#journey', label: 'Your Journey' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-(--border-color) backdrop-blur-md" style={{ backgroundColor: 'var(--nav-bg)' }}>
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-3">
          <img src={logo} alt="deutsch-way logo" className="h-10 w-10" />
          <span className="font-display text-xl font-bold tracking-tight">
            <span className="text-german-red">deutsch</span>
            <span className="text-german-gold">-way</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-(--text-secondary) transition-colors hover:text-german-red"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href="#contact"
            className="hidden rounded-full bg-german-red px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-german-red-dark sm:inline-block"
          >
            Enroll Now
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-(--border-color) md:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="border-t border-(--border-color) bg-(--bg-secondary) px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-(--text-secondary) hover:bg-(--bg-primary) hover:text-german-red"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded-full bg-german-red px-5 py-2.5 text-center text-sm font-semibold text-white"
            >
              Enroll Now
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
