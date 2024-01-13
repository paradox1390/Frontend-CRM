import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <Link to="/">
      <div className="flex items-center">
        <span className="text-2xl font-bold text-main-blue ">Insta</span>
        <span className="inline-block ml-2 px-4 py-2 bg-gradient-to-br from-main-blue to-main-turquoise rounded-md text-lg text-white font-bold">
          CRM
        </span>
      </div>
    </Link>
  );
};
