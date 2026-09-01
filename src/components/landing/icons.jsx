export function ReadIcon(props) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <rect x="7" y="5" width="18" height="22" rx="3" stroke="currentColor" strokeWidth="2" />
      <path d="M12 12h8M12 16h8M12 20h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="23" cy="24" r="4.5" fill="var(--color-accent)" stroke="currentColor" strokeWidth="1.5" />
      <path d="M21.7 24l1 1 1.8-2" stroke="var(--color-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function NavigateIcon(props) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <rect x="4" y="9" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="2" />
      <rect x="20" y="9" width="8" height="8" rx="2" fill="var(--color-accent)" stroke="currentColor" strokeWidth="2" />
      <rect x="12" y="19" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M12 13h8M16 17v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function ResultIcon(props) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <path d="M6 26V16M16 26V8M26 26v-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="16" cy="6" r="2.5" fill="var(--color-accent)" stroke="currentColor" strokeWidth="1.5" />
      <path d="M4 26h24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function ShieldIcon(props) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <path
        d="M16 5l9 3.5v6c0 6-3.8 10.6-9 12.5-5.2-1.9-9-6.5-9-12.5v-6L16 5z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M12 16l3 3 5-6" stroke="var(--color-accent-hover)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
