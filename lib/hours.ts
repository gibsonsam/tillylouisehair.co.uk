/** Converts a 24h "HH:MM" string to a human-readable 12h string, e.g. "9:30am", "4:00pm". */
function formatTime(t: string): string {
  const [h, m] = t.split(":").map(Number);
  const period = h >= 12 ? "pm" : "am";
  const hour12 = h % 12 || 12;
  return `${hour12}:${String(m).padStart(2, "0")}${period}`;
}

/**
 * Converts a hours entry into a human-readable string.
 *
 * @example
 * formatHours("09:30", "16:00") // "9:30am – 4:00pm"
 * formatHours(null, null)       // "Closed"
 */
export function formatHours(opens: string | null, closes: string | null): string {
  if (!opens || !closes) return "Closed";
  return `${formatTime(opens)} – ${formatTime(closes)}`;
}
