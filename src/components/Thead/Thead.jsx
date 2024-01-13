import { Th } from "@components/Th";

export const Thead = ({ preset, headers }) => {
  const mappingTable = (thName) => {
    const { name, th, icon } = headers[thName];

    if (th === "simple") {
      return <Th text={name} type={th} key={name} />;
    }
    if (th === "icon") {
      return <Th text={name} type={th} icon={icon} key={name} />;
    }
  };

  return (
    <thead>
      <tr className="h-14">{preset.map(mappingTable)}</tr>
    </thead>
  );
};
