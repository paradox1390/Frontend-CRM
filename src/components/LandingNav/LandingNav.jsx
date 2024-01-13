import { Link } from "react-router-dom";

export const LandingNav = () => {
  return (
    <nav className="flex items-center gap-16">
      <ul className="flex items-center gap-16">
        <li>
          <a href="" className="text-white text-base font-bold">
            Відгуки
          </a>
        </li>
        <li>
          <a href="" className="text-white text-base font-bold">
            Тарифи
          </a>
        </li>
      </ul>
      <ul className="flex items-center gap-3">
        <li>
          <Link
            to="/account/registration"
            className="inline-block px-8 py-4 bg-white text-main-blue hover:bg-transparent hover:text-white border border-transparent hover:border-white text-base font-bold rounded-md"
          >
            Регістрація
          </Link>
        </li>
        <li>
          <Link
            to="/account/authorisation"
            className="inline-block px-8 py-4 border border-white hover:border-transparent hover:bg-white rounded-md text-white hover:text-main-blue text-base font-bold"
          >
            Вхід
          </Link>
        </li>
      </ul>
    </nav>
  );
};
