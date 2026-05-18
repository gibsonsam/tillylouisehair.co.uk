type LogoProps = {
  className?: string;
  variant?: "dark" | "light";
};

export function Logo({ className, variant = "dark" }: LogoProps) {
  const primary = variant === "light" ? "#FAF8F5" : "#2C1A0E";
  const accent = "#C9A84C";

  return (
    <svg
      viewBox="0 0 200 58"
      className={className}
      role="img"
      aria-label="Tilly Louise Hair"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Tilly Louise Hair</title>
      <text
        x="100"
        y="26"
        textAnchor="middle"
        fill={primary}
        style={{
          fontFamily: "var(--font-display)",
          fontSize: 26,
          letterSpacing: 1.5,
          fontWeight: 600,
        }}
      >
        Tilly Louise
      </text>
      <text
        x="100"
        y="48"
        textAnchor="middle"
        fill={accent}
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: 10,
          letterSpacing: 7,
          textTransform: "uppercase",
          fontWeight: 600,
        }}
      >
        HAIR
      </text>
    </svg>
  );
}
