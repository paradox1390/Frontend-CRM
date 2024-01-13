import { TableRow } from "../TableRow";

export const Tbody = ({ preset, headers, orders }) => {
  const mappingTbody = (order) => {
    return (
      <TableRow key={order.id} preset={preset} headers={headers} data={order} />
    );
  };

  return <tbody>{orders.map(mappingTbody)}</tbody>;
};
