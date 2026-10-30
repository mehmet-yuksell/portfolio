import { Mail } from "lucide-react";
import type { SocialLink } from "@/data/site";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

export function SocialIcon({ icon, size = 18 }: { icon: SocialLink["icon"]; size?: number }) {
  switch (icon) {
    case "github":
      return <GithubIcon size={size} />;
    case "linkedin":
      return <LinkedinIcon size={size} />;
    case "mail":
      return <Mail size={size} aria-hidden="true" />;
  }
}
