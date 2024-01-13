import { LogoFooter } from "@components/LogoFooter";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-main-blue to-main-turquoise">
      <div className="flex gap-4 justify-between max-w-screen-2xl m-auto px-2.5 py-10">
        <LogoFooter />
        <div className="flex flex-col gap-2">
          <span className="text-sm font-medium text-white">Відгуки</span>
          <span className="text-sm font-medium text-white">Тарифи</span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-sm font-medium text-white">
            Політика конфіденційності
          </span>
          <span className="text-sm font-medium text-white">
            Публічна оферта
          </span>
        </div>
        <div className="flex gap-4">
          <div className="flex gap-2 items-center">
            <span className="icon-whatsapp text-white text-3xl"></span>
            <span className="icon-telegram text-white text-3xl"></span>
            <span className="icon-messenger text-white text-3xl"></span>
          </div>
          <div className="flex flex-col">
            <a
              href="tel:+380971234567"
              className="text-base font-bold text-white"
            >
              +38 (097) 123-45-67
            </a>
            <a
              href="mailto:instacrm@mail.com"
              className="text-base font-bold text-white"
            >
              instacrm@mail.com
            </a>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <span className="icon-instagram text-white text-3xl"></span>
          <span className="icon-youtube text-white text-3xl"></span>
          <span className="icon-facebook text-white text-3xl"></span>
        </div>
      </div>
    </footer>
  );
};
