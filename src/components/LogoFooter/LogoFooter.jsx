import { Link } from "react-router-dom";

export const LogoFooter = () => {
  return (
    <Link to="/">
      <div className="flex items-center">
        <span className="text-2xl font-bold text-white ">Insta</span>
        <span className="inline-block ml-2 px-4 py-2 bg-white rounded-md text-lg text-main-blue font-bold">
          CRM
        </span>
      </div>
    </Link>
  );
};
