import { Td } from "@components/Td";

export const TableRow = ({ data, preset, headers }) => {
  const mappingTr = (nameCol) => {
    return (
      <Td
        key={`${data.id}-${nameCol}`}
        col={nameCol}
        type={headers[nameCol].td}
        data={data}
      />
    );
  };

  return <tr className="bg-white h-16">{preset.map(mappingTr)}</tr>;
};
