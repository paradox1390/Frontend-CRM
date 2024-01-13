import { ControlerPanel } from "@sections/orders/ControlerPanel";
import { Table } from "@/sections/orders/Table";

export const Orders = () => {
  return (
    <main className="grow bg-aliceBlue flex justify-center">
      <div className="grow max-w-screen-2xl px-2.5 flex flex-col overflow-x-auto">
        <ControlerPanel />
        <Table />
      </div>
    </main>
  );
};
