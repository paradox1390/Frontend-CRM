import { Logo } from "@components/Logo";

export const Header = () => {
  return (
    <header className="bg-white">
      <div className=" flex justify-between max-w-screen-2xl m-auto px-2.5 py-7">
        <Logo />
      </div>
    </header>
  );
};
