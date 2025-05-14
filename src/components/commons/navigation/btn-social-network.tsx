import InstagramIcon from "@/components/icons/instagram-icon";
import TiktokClipsIcon from "@/components/icons/tiktok-clips-icon";
import TiktokIcon from "@/components/icons/tiktok-icon";
import TwitchIcon from "@/components/icons/twitch-icon";
import XIcon from "@/components/icons/x-icon";
import YoutubeIcon from "@/components/icons/youtube-icon";
import YoutubeVodIcon from "@/components/icons/youtube-vod-icon";
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
    href: "https://www.tiktok.com/@choke7_",
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
  {
    name: "TikTok Clips",
    href: "https://www.tiktok.com/@choke7.clipes",
    icon: <TiktokClipsIcon />,
  },
  {
    name: "Youtube Vods",
    href: "https://www.youtube.com/@choke7vods",
    icon: <YoutubeVodIcon />,
  },
];

export default function BtnSocialNetwork({
  handleClick,
}: {
  handleClick?: () => void;
}) {
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
            aria-label="Home"
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
              aria-label={socialNetwork.name}
              variant="link"
              size="icon"
              className="transition-transform duration-300 hover:scale-110"
              asChild
            >
              <Link href={socialNetwork.href} target="_blank">
                <span className="fill-primary-foreground text-primary-foreground">
                  {socialNetwork.icon}
                </span>
              </Link>
            </Button>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <ul className="mx-3 mb-14 grid grid-cols-2 gap-2">
      <li>
        <Button
          aria-label="Home"
          variant="outline"
          className="h-[50px] w-full border-2 border-primary"
          onClick={handleClick}
          asChild
        >
          <Link href="/">
            <div className="grid w-full grid-cols-3 items-center fill-primary">
              <div className="flex justify-start">
                <HomeIcon className="text-primary" />
              </div>
              <span className="col-span-2 flex justify-center text-base font-medium">
                Home
              </span>
            </div>
          </Link>
        </Button>
      </li>
      {socialNetworks.map((socialNetwork) => (
        <li key={socialNetwork.name}>
          <Button
            aria-label={socialNetwork.name}
            variant="outline"
            className="h-[50px] w-full border-2 border-primary"
            asChild
          >
            <Link href={socialNetwork.href} target="_blank">
              <div className="grid w-full grid-cols-3 items-center fill-primary">
                <div className="flex justify-start">{socialNetwork.icon}</div>
                <span className="col-span-2 flex justify-center text-base font-medium">
                  {socialNetwork.name}
                </span>
              </div>
            </Link>
          </Button>
        </li>
      ))}
    </ul>
  );
}
