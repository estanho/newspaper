import BtnSocialNetwork from "@/components/commons/navigation-bar/btn-social-network";
import Image from "next/image";

export default function Navigation() {
  return (
    <div className="grid grid-cols-2 items-center bg-primary p-3">
      <div className="flex justify-start">
        <BtnSocialNetwork />
      </div>
      <div className="flex justify-end">
        <Image
          src={"/gif/choke7anota.gif"}
          className="scale-x-[-1]"
          alt="Choke7"
          width={32}
          height={32}
        />
      </div>
    </div>
  );
}
