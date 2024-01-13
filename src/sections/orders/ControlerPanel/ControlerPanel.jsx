import { Button } from "@/components/Button";

export const ControlerPanel = () => {
  const onClick = () => {
    alert("in development");
  };

  return (
    <div className="flex justify-between items-center my-4">
      <div className="flex items-center gap-4">
        <span className="inline-block mr-5 font-bold text-xl">
          ВСІ ЗАМОВЛЕННЯ
        </span>
        <Button text="Нове замовлення" type="button" onclick={onClick} />
        <Button
          text="Генерувати ТТН"
          type="button"
          view="gradient"
          onclick={onClick}
        />
        <Button
          text="Обновити статуси ТТН"
          type="button"
          view="gradient"
          onclick={onClick}
        />
      </div>
      <div className="flex gap-5">
        <div className="p-2 bg-white rounded-md">
          <Button text="+" type="button" view="white" onclick={onClick} />
        </div>
        <div className="p-2 bg-white rounded-md">
          <Button text="Мінімум" type="button" view="white" onclick={onClick} />
          <Button
            text="Всі колонки"
            type="button"
            view="gradient"
            onclick={onClick}
          />
        </div>
      </div>
    </div>
  );
};
