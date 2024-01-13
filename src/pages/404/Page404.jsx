import { Link } from "react-router-dom";

export const Page404 = () => {
  return (
    <div className="flex flex-col gap-10 items-center">
      <span className="text-4xl font-bold mt-28">Not Found</span>
      <Link to="/" className="text-2xl font-bold text-main-blue underline">
        To main page
      </Link>
    </div>
  );
};
