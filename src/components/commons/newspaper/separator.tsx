import Image from "next/image";

export default function Separator() {
  return (
    <Image
      src="/newspapers/separator.png"
      alt="Separador do Jornal"
      width={1600}
      height={0}
      quality={100}
      className="w-full pb-10"
      priority
    />
  );
}
