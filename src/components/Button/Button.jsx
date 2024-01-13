export const Button = ({
  text,
  type = "submit",
  view = "green",
  onclick = () => {},
}) => {
  let viewsClass = "";
  let textColor = "";
  let shadow = "";

  switch (view) {
    case "green":
      viewsClass = "bg-main-green";
      textColor = "text-white";
      shadow = "shadow-lg shadow-green-opacity";
      break;
    case "gradient":
      viewsClass = "bg-gradient-to-br from-main-blue to-main-turquoise";
      textColor = "text-white";
      shadow = "shadow-lg shadow-green-opacity";
      break;
    case "white":
      viewsClass = "bg-white";
      textColor = "text-main-blue";
      break;
  }

  return (
    <button
      type={type}
      className={`w-fit px-5 py-3 rounded-md ${viewsClass} ${textColor} font-bold text-base ${shadow}`}
      onClick={onclick}
    >
      {text}
    </button>
  );
};
