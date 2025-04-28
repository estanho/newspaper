import InstagramIcon from "@/components/icons/instagram-icon";
import TiktokIcon from "@/components/icons/tiktok-icon";
import TwitchIcon from "@/components/icons/twitch-icon";
import XIcon from "@/components/icons/x-icon";
import YoutubeIcon from "@/components/icons/youtube-icon";
import { Button } from "@/components/ui/button";
import { HomeIcon } from "lucide-react";
import Link from "next/link";

const socialNetworks = [
  {
    name: "Twitch",
    href: "https://www.twitch.tv/choke7",
    icon: <TwitchIcon className="fill-secondary" />,
  },
  {
    name: "X - Twitter",
    href: "https://x.com/choke7_",
    icon: <XIcon className="fill-secondary" />,
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@choke7.clipes",
    icon: <TiktokIcon className="fill-secondary" />,
  },
  {
    name: "Youtube",
    href: "https://www.youtube.com/@Choke7",
    icon: <YoutubeIcon className="fill-secondary" />,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/choke7_",
    icon: <InstagramIcon className="fill-secondary" />,
  },
];

export default function BtnSocialNetwork() {
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
            <HomeIcon className="text-secondary" />
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
              {socialNetwork.icon}
            </a>
          </Button>
        </li>
      ))}
    </ul>
  );
}
