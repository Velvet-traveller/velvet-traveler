import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  className?: string;
  variant?: "light" | "dark";
}

export default function Logo({ className = "", variant = "light" }: LogoProps) {
  const logoSrc =
    variant === "dark" ? "/assets/vlogogold.svg" : "/assets/velvetlogo.svg";

  return (
    <Link
      href="/"
      className={`inline-flex items-center ${className}`}
      data-variant={variant}
      aria-label="Velvet Traveler home"
    >
      <Image
        src={logoSrc}
        alt="Velvet Traveler logo"
        width={122}
        height={75}
        priority
        className="h-10 w-auto sm:h-12 md:h-14"
      />
    </Link>
  );
}
