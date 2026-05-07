import { techLogos } from "../data/techLogos";

const invertedLogos = ["expressjs", "github", "gpt"];

type TechIconProps = {
  tech: string;
  size?: number;
};

export default function TechIcon({ tech, size = 24 }: TechIconProps) {
  const logoUrl = techLogos[tech.toLowerCase()];

  if (!logoUrl) {
    return <span className="text-xs bg-gray-100 px-2 py-1 rounded">{tech}</span>;
  }

  return (
    <img
      src={logoUrl}
      alt={tech}
      className={`inline-block${invertedLogos.includes(tech.toLowerCase()) ? ' invert brightness-0 dark:invert' : ''}`}
      style={{ width: size, height: size }}
      title={tech}
    />
  );
}
