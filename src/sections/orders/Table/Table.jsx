import { useOrdersSelector } from "@/store/slice/ordersSlice";
import { useUserSelector } from "@/store/slice/userSlice";
import { Thead } from "@/components/Thead";
import { Tbody } from "@components/Tbody";

import { ORDERS_TABLE } from "@/utils/initial";
import { DEFAULT_PRESET_TABLE } from "@/utils/initial";

export const Table = () => {
  const user = useUserSelector();
  const orders = useOrdersSelector().filter(
    (order) => order.userId === user.id,
  );

  return (
    <table className="w-full table-auto border-separate border-spacing-y-2">
      <Thead preset={DEFAULT_PRESET_TABLE} headers={ORDERS_TABLE} />
      {orders.length === 0 ? (
        <div className="grow flex justify-center items-center">
          <span>No Orders</span>
        </div>
      ) : (
        <Tbody
          preset={DEFAULT_PRESET_TABLE}
          headers={ORDERS_TABLE}
          orders={orders}
        />
        // orders.map((order) => {
        //   return <TableRow data={order} key={order.id} flags="td" />;
        // })
      )}
    </table>
  );
};
