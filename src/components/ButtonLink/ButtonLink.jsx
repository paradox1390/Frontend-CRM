import { Link } from "react-router-dom";

export const ButtonLink = ({ link, text }) => {
  return (
    <Link
      to={link}
      className="px-8 py-6 rounded-md bg-main-green text-white font-bold text-base shadow-lg shadow-green-opacity"
    >
      {text}
    </Link>
  );
};
