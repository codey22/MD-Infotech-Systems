const iconClass =
  "h-5 w-5 text-white/80 transition-colors hover:text-white";

export default function SocialIcons() {
  return (
    <div className="flex items-center gap-4">
      <a aria-label="LinkedIn" href="https://www.linkedin.com" target="_blank" rel="noreferrer">
        <svg className={iconClass} viewBox="0 0 24 24" fill="currentColor">
          <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5.001 2.5 2.5 0 0 0 0-5zM3 9h4v12H3zM14.5 9c-2.14 0-3.5 1.17-3.5 2.86V21h4v-6.29c0-.92.66-1.71 1.72-1.71 1.02 0 1.78.77 1.78 1.71V21H23v-7.37C23 10.61 21.36 9 19.18 9c-1.49 0-2.5.68-3.07 1.48V9h-1.61z" />
        </svg>
      </a>
      <a aria-label="X (Twitter)" href="https://x.com" target="_blank" rel="noreferrer">
        <svg className={iconClass} viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2H21L13.5 10.4 21.6 22H15.6L10.7 14.9 4.6 22H2l7.8-8.9L2.6 2H8.6l4.7 6.7L18.244 2z" />
        </svg>
      </a>
      <a aria-label="Facebook" href="https://facebook.com" target="_blank" rel="noreferrer">
        <svg className={iconClass} viewBox="0 0 24 24" fill="currentColor">
          <path d="M22 12a10 10 0 1 0-11.6 9.9v-7h-2.1V12h2.1V9.8c0-2.1 1.2-3.3 3-3.3.9 0 1.8.16 1.8.16v2h-1c-1 0-1.3.62-1.3 1.26V12h2.3l-.37 2.9h-1.93v7A10 10 0 0 0 22 12Z" />
        </svg>
      </a>
      <a aria-label="Instagram" href="https://instagram.com" target="_blank" rel="noreferrer">
        <svg className={iconClass} viewBox="0 0 24 24" fill="currentColor">
          <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 4a6 6 0 1 0 0 12 6 6 0 0 0 0-12zm6.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
        </svg>
      </a>
      <a aria-label="Gmail" href="mailto:hello@mdinfotech.systems" target="_blank" rel="noreferrer">
        <svg className={iconClass} viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm-1.2 3.2-6.8 5.1-6.8-5.1V6l6.8 5.1L18.8 6v1.2z" />
        </svg>
      </a>
    </div>
  );
}
