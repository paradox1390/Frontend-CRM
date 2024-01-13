import { Logo } from "@components/Logo";
import { LandingNav } from "@components/LandingNav";

export const Header = () => {
  return (
    <div className="bg-black-opacity">
      <header className="flex justify-between max-w-screen-2xl m-auto px-2.5 py-7">
        <Logo />
        <LandingNav />
      </header>
    </div>
  );
};
