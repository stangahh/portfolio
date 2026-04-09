import { projects } from '../data/projects';

const allTags = [...new Set(projects.flatMap(p => p.tags))];
const sortedTags = [...allTags].sort((a, b) => b.length - a.length);

/**
 * Scans prose text for mentions of project tags (case-insensitive, whole-word)
 * and wraps each match in an <a class="skill-chip"> linking to /projects?tech=<tag>.
 * Longer tags are matched first to avoid partial matches (e.g. "React Three Fiber"
 * before "React"). Use for experience descriptions and bio text — not for skill labels.
 */
export function tagify(text: string): string {
  if (!text) return text;
  const escaped = sortedTags.map(t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  const regex = new RegExp(`\\b(${escaped.join('|')})\\b`, 'gi');
  return text.replace(regex, (match) => {
    const canonical = allTags.find(t => t.toLowerCase() === match.toLowerCase());
    if (!canonical) return match;
    return `<a href="/projects?tech=${canonical.toLowerCase()}" class="skill-chip">${match}</a>`;
  });
}

/**
 * For skill label strings (e.g. "Docker / Kubernetes", "React.js / Node.js"):
 * finds the first project tag that appears in the skill text and returns its
 * canonical form, or null if none match. Use this to make whole skill items
 * link to the relevant project filter without fragmenting the label text.
 */
export function findSkillTag(skill: string): string | null {
  for (const tag of sortedTags) {
    const escaped = tag.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    if (new RegExp(`\\b${escaped}\\b`, 'i').test(skill)) return tag;
  }
  return null;
}
