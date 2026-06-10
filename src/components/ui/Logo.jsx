/**
 * Brand mark — an isometric cube built from three purple facets.
 * Abstract "building blocks" emblem matching the site's accent palette.
 */
export function Logo({ className = '', title = 'Furqan Amir' }) {
  return (
    <svg
      viewBox="0 0 32 32"
      role="img"
      aria-label={title}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* top face — lightest */}
      <path d="M16 3.5 27 9.75 16 16 5 9.75Z" fill="#c4b5fd" />
      {/* left face — mid */}
      <path d="M5 9.75 16 16v12.5L5 22.25Z" fill="#8b5cf6" />
      {/* right face — deep */}
      <path d="M27 9.75 16 16v12.5l11-6.25Z" fill="#6d28d9" />
      {/* edge highlight */}
      <path
        d="M16 3.5 27 9.75 16 16 5 9.75Z"
        stroke="#ede9fe"
        strokeWidth="0.6"
        strokeLinejoin="round"
        opacity="0.5"
      />
    </svg>
  )
}
