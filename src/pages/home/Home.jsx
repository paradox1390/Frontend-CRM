// import { Background } from "@landing/Background";
import { Header } from "@landing/Header";
import { MainScreen } from "@landing/MainScreen";
export const Home = () => {
  return (
    <>
      <div className="relative z-20">
        <Header />
      </div>
      <main className="max-w-screen-2xl mx-auto mt-16">
        <MainScreen />
      </main>
    </>
  );
};
