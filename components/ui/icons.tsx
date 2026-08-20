import type { SVGProps } from "react";

interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
}

function Icon({ size = 20, children, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="square"
      strokeLinejoin="miter"
      {...props}
    >
      {children}
    </svg>
  );
}

export function ArrowDown(props: IconProps) {
  return (
    <Icon {...props}>
      <line x1="12" y1="4" x2="12" y2="20" />
      <polyline points="6 14 12 20 18 14" />
    </Icon>
  );
}

export function ChevronDown(props: IconProps) {
  return (
    <Icon {...props}>
      <polyline points="5 9 12 16 19 9" />
    </Icon>
  );
}

export function ExternalLink(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M9 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3" />
      <path d="M13 4h7v7" />
      <line x1="20" y1="4" x2="11" y2="13" />
    </Icon>
  );
}

export function Download(props: IconProps) {
  return (
    <Icon {...props}>
      <line x1="12" y1="3" x2="12" y2="15" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="4" y1="20" x2="20" y2="20" />
    </Icon>
  );
}

export function Menu(props: IconProps) {
  return (
    <Icon {...props}>
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </Icon>
  );
}

export function X(props: IconProps) {
  return (
    <Icon {...props}>
      <line x1="5" y1="5" x2="19" y2="19" />
      <line x1="19" y1="5" x2="5" y2="19" />
    </Icon>
  );
}

export function Mail(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x="3" y="5" width="18" height="14" />
      <polyline points="3 6 12 13 21 6" />
    </Icon>
  );
}

export function Code(props: IconProps) {
  return (
    <Icon {...props}>
      <polyline points="9 6 3 12 9 18" />
      <polyline points="15 6 21 12 15 18" />
    </Icon>
  );
}

export function Layers(props: IconProps) {
  return (
    <Icon {...props}>
      <polygon points="12 3 21 8 12 13 3 8 12 3" />
      <polyline points="3 15 12 20 21 15" />
      <polyline points="3 11.5 12 16.5 21 11.5" />
    </Icon>
  );
}

export function Globe(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx="12" cy="12" r="9" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <path d="M12 3c3 3.5 3 14.5 0 18" />
      <path d="M12 3c-3 3.5-3 14.5 0 18" />
    </Icon>
  );
}

export function Library(props: IconProps) {
  return (
    <Icon {...props}>
      <line x1="4" y1="4" x2="4" y2="20" />
      <line x1="9" y1="4" x2="9" y2="20" />
      <line x1="14" y1="6" x2="19" y2="20" />
      <line x1="19" y1="6" x2="14" y2="20" />
    </Icon>
  );
}

export function Github(props: IconProps) {
  return (
    <Icon {...props} strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
    </Icon>
  );
}

export function Linkedin(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x="3" y="3" width="18" height="18" />
      <line x1="7.5" y1="10" x2="7.5" y2="17" />
      <circle cx="7.5" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
      <line x1="12" y1="17" x2="12" y2="10" />
      <path d="M12 13c0-1.7 1.3-3 3-3s3 1.3 3 3v4" />
    </Icon>
  );
}
