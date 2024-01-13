import { Header } from "@sections/account/Header";
import { Footer } from "@sections/account/Footer";
import { Main } from "@sections/account/Main";
export const Account = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};
