import InstagramIcon from "@/components/icons/instagram-icon";
import TiktokIcon from "@/components/icons/tiktok-icon";
import TwitchIcon from "@/components/icons/twitch-icon";
import XIcon from "@/components/icons/x-icon";
import YoutubeIcon from "@/components/icons/youtube-icon";
import { Button } from "@/components/ui/button";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { HomeIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const socialNetworks = [
  {
    name: "Twitch",
    href: "https://www.twitch.tv/choke7",
    icon: <TwitchIcon />,
  },
  {
    name: "X - Twitter",
    href: "https://x.com/choke7_",
    icon: <XIcon />,
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@choke7.clipes",
    icon: <TiktokIcon />,
  },
  {
    name: "Youtube",
    href: "https://www.youtube.com/@Choke7",
    icon: <YoutubeIcon />,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/choke7_",
    icon: <InstagramIcon />,
  },
];

export default function BtnSocialNetwork() {
  const [hasMounted, setHasMounted] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 600px)");

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return <></>;
  }

  if (isDesktop) {
    return (
      <ul className="flex flex-row items-center gap-3">
        <li>
          <Button
            variant="link"
            size="icon"
            className="transition-transform duration-300 hover:scale-110"
            asChild
          >
            <Link href="/">
              <HomeIcon className="text-primary-foreground" />
            </Link>
          </Button>
        </li>
        {socialNetworks.map((socialNetwork) => (
          <li key={socialNetwork.name}>
            <Button
              variant="link"
              size="icon"
              className="transition-transform duration-300 hover:scale-110"
              asChild
            >
              <a href={socialNetwork.href} target="_blank">
                <span className="fill-primary-foreground">
                  {socialNetwork.icon}
                </span>
              </a>
            </Button>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <ul className="flex flex-col items-center gap-3">
      <li>
        <Button
          variant="link"
          size="icon"
          className="w-[150px] border-2 border-primary"
          asChild
        >
          <Link href="/">
            <HomeIcon className="text-primary" />
            Home
          </Link>
        </Button>
      </li>
      {socialNetworks.map((socialNetwork) => (
        <li key={socialNetwork.name}>
          <Button
            variant="outline"
            className="w-[150px] border-2 border-primary"
            asChild
          >
            <a href={socialNetwork.href} target="_blank">
              <span className="flex items-center gap-3 fill-primary">
                {socialNetwork.icon} {socialNetwork.name}
              </span>
            </a>
          </Button>
        </li>
      ))}
    </ul>
  );
}
