import BtnSocialNetwork from "@/components/commons/navigation-bar/btn-social-network";

export default function Navigation() {
  return (
    <div className="grid grid-cols-2 items-center bg-primary p-3">
      <div className="flex justify-start">
        <BtnSocialNetwork />
      </div>
    </div>
  );
}
