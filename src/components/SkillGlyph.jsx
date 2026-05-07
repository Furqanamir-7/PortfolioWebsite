function SkillGlyph({ name }) {
  const common = 'h-8 w-8'
  switch (name) {
    case 'html':
      return (
        <svg className={common} viewBox="0 0 32 32" aria-hidden>
          <path fill="#e34f26" d="M6 28L4 3h24l-2 25-9 3-9-3z" />
          <path fill="#efefef" d="M16 5.5h10l-.7 7H16v-7z" />
        </svg>
      )
    case 'css':
      return (
        <svg className={common} viewBox="0 0 32 32" aria-hidden>
          <path fill="#1572b6" d="M6 28L4 3h24l-2 25-9 3-9-3z" />
          <path fill="#efefef" d="M16 5.5h10l-.5 5.5H16V5.5z" />
        </svg>
      )
    case 'js':
      return (
        <svg className={common} viewBox="0 0 32 32" aria-hidden>
          <rect width="32" height="32" rx="6" fill="#f7df1e" />
          <text x="16" y="21" textAnchor="middle" fontSize="11" fontWeight="700" fill="#0f172a" fontFamily="system-ui">
            JS
          </text>
        </svg>
      )
    case 'ts':
      return (
        <svg className={common} viewBox="0 0 32 32" aria-hidden>
          <rect width="32" height="32" rx="6" fill="#3178c6" />
          <text x="16" y="21" textAnchor="middle" fontSize="11" fontWeight="700" fill="#fff" fontFamily="system-ui">
            TS
          </text>
        </svg>
      )
    case 'react':
      return (
        <svg className={common} viewBox="0 0 32 32" aria-hidden>
          <circle cx="16" cy="16" r="3" fill="#61dafb" />
          <ellipse cx="16" cy="16" rx="11" ry="4.5" fill="none" stroke="#61dafb" strokeWidth="1.2" />
          <ellipse cx="16" cy="16" rx="11" ry="4.5" fill="none" stroke="#61dafb" strokeWidth="1.2" transform="rotate(60 16 16)" />
          <ellipse cx="16" cy="16" rx="11" ry="4.5" fill="none" stroke="#61dafb" strokeWidth="1.2" transform="rotate(120 16 16)" />
        </svg>
      )
    case 'next':
      return (
        <svg className={common} viewBox="0 0 32 32" aria-hidden>
          <rect width="32" height="32" rx="6" fill="#0f172a" />
          <path fill="#fff" d="M9 22V10h2.5l7.2 9.4V10H21v12h-2.4l-7.3-9.5V22H9z" />
        </svg>
      )
    case 'tailwind':
      return (
        <svg className={common} viewBox="0 0 32 32" aria-hidden>
          <path
            fill="#38bdf8"
            d="M16 8c-3 0-4.9 1.5-5.8 4.5 1.1-1.5 2.4-2 3.9-1.5 0.8 0.3 1.4 1.2 2 2.2 1 1.7 2.1 3.6 4.6 3.6 3 0 4.9-1.5 5.8-4.5-1.1 1.5-2.4 2-3.9 1.5-0.8-0.3-1.4-1.2-2-2.2-1-1.7-2.1-3.6-4.6-3.6z"
          />
        </svg>
      )
    case 'node':
      return (
        <svg className={common} viewBox="0 0 32 32" aria-hidden>
          <path fill="#3c873a" d="M16 4 6 9.5v13L16 28l10-5.5v-13L16 4z" />
          <path fill="#6bcc64" d="M16 7.5v9l-6.5-3.6V11l6.5-3.5zm0 9 6.5-3.6V11L16 7.5v9z" />
        </svg>
      )
    case 'express':
      return (
        <svg className={common} viewBox="0 0 32 32" aria-hidden>
          <rect width="32" height="32" rx="6" fill="#1e293b" />
          <path fill="#cbd5e1" d="M8 20V12h2.4l2.8 5.2 2.8-5.2H19v8h-2v-5.2L14 20h-1.4l-2.9-5.3V20H8z" />
        </svg>
      )
    case 'mongo':
      return (
        <svg className={common} viewBox="0 0 32 32" aria-hidden>
          <path fill="#47a248" d="M16 3s-3 14-3 19c0 3 1.3 5 3 7 1.7-2 3-4 3-7 0-5-3-19-3-19z" />
        </svg>
      )
    case 'shopify':
      return (
        <svg className={common} viewBox="0 0 32 32" aria-hidden>
          <rect width="32" height="32" rx="6" fill="#95bf47" />
          <path fill="#fff" d="M20.5 11.2c-.1-1.1-1-1.5-2.1-1.5h-.3l-1.6 9.6-4.2-9.6h-3l1.2 14h3.4l-.3-7.2 3.8 7.2h2.1l4-14.5z" />
        </svg>
      )
    case 'wordpress':
      return (
        <svg className={common} viewBox="0 0 32 32" aria-hidden>
          <circle cx="16" cy="16" r="14" fill="#21759b" />
          <path
            fill="#fff"
            d="M9 16c0 3.1 1.8 5.8 4.4 7.1L9.8 11.6A7.96 7.96 0 009 16zm11.4 7.7c.7.4 1.5.6 2.4.6.6 0 1.1-.1 1.6-.3l-.1-.3-1.9-5.2-2.1 5.2h.1zm3.3-11.1c0-.9-.2-1.6-.4-2.2-.3-.7-.6-1.3-1.1-1.9-.5-.6-1.1-1.1-1.8-1.5-.7-.4-1.6-.7-2.6-.9-1-.2-2.1-.3-3.4-.3h-4.4l1.1 3 3.1 9.1 2.8-8.3h1.7c1 0 1.7.2 2.2.6.5.4.8 1 .8 1.8 0 .3 0 .6-.1.9l-2.6 7.5 2.4 6.6A7.95 7.95 0 0024 16c0-1.4-.2-2.6-.6-3.6l.1.2z"
          />
        </svg>
      )
    case 'ui':
      return (
        <svg className={common} viewBox="0 0 32 32" aria-hidden>
          <rect x="5" y="7" width="22" height="18" rx="3" fill="none" stroke="#a78bfa" strokeWidth="1.5" />
          <path d="M10 13h12M10 17h8" stroke="#a78bfa" strokeWidth="1.2" />
        </svg>
      )
    case 'brand':
      return (
        <svg className={common} viewBox="0 0 32 32" aria-hidden>
          <path fill="#8b5cf6" d="M6 22 16 6l10 16H6z" opacity="0.9" />
          <path fill="#c4b5fd" d="M12 20h8l-4-7-4 7z" />
        </svg>
      )
    case 'social':
      return (
        <svg className={common} viewBox="0 0 32 32" aria-hidden>
          <rect x="6" y="9" width="20" height="14" rx="2" fill="none" stroke="#f472b6" strokeWidth="1.4" />
          <circle cx="16" cy="15" r="2.5" fill="#f472b6" />
        </svg>
      )
    default:
      return (
        <div className={`${common} rounded-lg bg-accent-primary/20`} />
      )
  }
}

export default SkillGlyph
