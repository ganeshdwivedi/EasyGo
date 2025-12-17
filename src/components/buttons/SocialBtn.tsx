import React from "react";

type Platform = "google" | "apple" | "facebook" | "twitter";

interface SocialAuthButtonProps {
  platform: Platform;
  className?: string;
  iconClassName?: string;
  onClick?: () => void;
}

const PLATFORM_CONFIG = {
  google: {
    label: "Continue with Google",
    icon: "/icons/google.svg",
    alt: "google-icon",
    iconClass: "",
  },
  apple: {
    label: "Continue with Apple",
    icon: "/icons/flowbite_apple-solid.svg",
    alt: "apple-icon",
    iconClass: "",
  },
  facebook: {
    label: "Continue with Facebook",
    icon: "/icons/logos_facebook.svg",
    alt: "facebook-icon",
    iconClass: "text-blue-400",
  },
  twitter: {
    label: "Continue with Twitter",
    icon: "/icons/twitter.svg",
    alt: "twitter-icon",
    iconClass: "",
  },
} as const;

const SocialAuthButton: React.FC<SocialAuthButtonProps> = ({
  platform,
  className = "",
  iconClassName = "",
  onClick,
}) => {
  const config = PLATFORM_CONFIG[platform];

  return (
    <button
      onClick={onClick}
      className={`
        flex items-center justify-between gap-3
        rounded-lg border border-white/30
        bg-transparent py-2 px-3
        text-white hover:bg-white/10
        transition-colors group
        ${className}
      `}
    >
      <img
        src={config.icon}
        alt={config.alt}
        className={`
          text-xl group-hover:scale-105 w-7 transition-transform
          ${config.iconClass ?? ""}
          ${iconClassName}
        `}
      />

      <span className="text-xs font-medium">{config.label}</span>
    </button>
  );
};

export default SocialAuthButton;
