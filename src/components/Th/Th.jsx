
export const Th = ({ text, type, icon }) => {
  return (
    <th className="bg-main-blue px-2 text-white font-bold text-xs w-1/12 text-left first:rounded-l-md first:pl-2 last:rounded-r-md">
      {text}
      {type === "icon" && <span className={`${icon} inline-block ml-2`}></span>}
    </th>
  );
};
