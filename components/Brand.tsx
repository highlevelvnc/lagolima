import Image from "next/image";

type Props = {
  /** "light" para fundos escuros (header/footer/loader-dark), "dark" para fundos claros */
  variant?: "light" | "dark";
  /** Altura visual da imagem em px */
  height?: number;
};

export default function Brand({ variant = "light", height = 38 }: Props) {
  const src = variant === "light" ? "/logo-light.png" : "/logo.png";
  return (
    <span className="brand" aria-label="LAGO LIMA">
      <Image
        src={src}
        alt="LAGO LIMA"
        width={360}
        height={188}
        priority
        style={{ width: "auto", height: `${height}px` }}
      />
    </span>
  );
}
