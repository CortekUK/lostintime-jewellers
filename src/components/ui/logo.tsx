import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "full" | "icon" | "text" | "login";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function Logo({ variant = "full", size = "md", className }: LogoProps) {
  
  const sizeClasses = {
    sm: {
      image: "h-16 w-auto",
      login: "h-32 w-auto"
    },
    md: {
      image: "h-24 w-auto", 
      login: "h-40 w-auto"
    },
    lg: {
      image: "h-32 w-auto",
      login: "h-48 w-auto"
    }
  };

  const renderLogos = (imgClass: string) => (
    <>
      <img src="/logo-light.png" alt="Lost In Time" className={cn(imgClass, "dark:!hidden")} />
      <img src="/logo-dark.png" alt="Lost In Time" className={cn(imgClass, "!hidden dark:!block")} />
    </>
  );

  if (variant === "login") {
    return renderLogos(cn("login-logo", className));
  }

  if (variant === "icon") {
    return renderLogos(cn(sizeClasses[size].image, className));
  }

  return (
    <div className={cn("flex items-center space-x-3", className)}>
      {renderLogos(sizeClasses[size].image)}
    </div>
  );
}