import { ButtonLink } from "@components/ButtonLink";

import NoLostOrder from "@assets/no_lost_order.svg?url";
import Img from "@assets/direct.jpg";

export const MainScreen = () => {
  return (
    <div className="flex justify-center items-center px-2.5">
      <div className="w-3/12">
        <p className="font-bold text-5xl leading-tight">
          CRM №1 для бізнесу в
          <span className="font-ralsteda text-red-500 ml-6">Instagram</span>
        </p>
        <div className="flex items-center gap-3 mb-8">
          <img src={NoLostOrder} />
          <span className="font-medium text-xl">
            Тепер ти не загубиш замовлення в Direct
          </span>
        </div>
        <ButtonLink
          link="/account/registration"
          text="Спробувати безкоштовно"
        />
      </div>
      <div className="w-7/12">
        <img src={Img} className="w-full h-auto" />
      </div>
    </div>
  );
};
