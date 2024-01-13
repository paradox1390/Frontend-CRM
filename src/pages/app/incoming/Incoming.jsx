import { Form } from "@sections/incoming/form";

export const Incoming = () => {
  return (
    <main className="grow bg-aliceBlue flex justify-center">
      <div className="grow max-w-screen-2xl px-2.5 flex gap-3 justify-between">
        <div className="bg-white mt-3 flex gap-3 w-7/12">
          <section className="w-5/12 bg-slate-500">
            List direct's users messages in development
          </section>
          <section className="7/12">Chat in development</section>
        </div>
        <div className=" mt-3 w-5/12">
          <section>
            <div className="bg-white rounded px-5 py-7">
              <h3 className="text-indigo-950 uppercase text-base font-bold mb-4">
                Оформити замовлення
              </h3>
              <Form />
            </div>
            <div>
              <div>Comments client in development</div>
              <div>Profile client in development</div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};
