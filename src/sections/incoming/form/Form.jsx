import { useForm, useFieldArray, Controller } from "react-hook-form";
import { IMaskInput } from "react-imask";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";

import { Button } from "@components/Button";

import { useUserSelector } from "@/store/slice/userSlice";
import { addOrder } from "@/store/slice/ordersSlice";

const schema = yup
  .object({
    fullName: yup.string().required("Обов'язкове поле"),
    phone: yup
      .string()
      .length(12, "Невірний формат номера")
      .required("Обов'язкове поле"),
    cargo: yup.string(),
    city: yup.string(),
    postOffice: yup.string(),
    products: yup.array().of(
      yup.object({
        name: yup.string().required("Обов'язкове поле"),
        count: yup
          .number()
          .typeError("Кількість повинна бути числом")
          .min(1, "Менше 1")
          .integer("Повинно бути ціле число")
          .required("Обов'язкове поле"),
        price: yup
          .number()
          .typeError("Ціна повинна бути числом")
          .moreThan(0, "Ціна має бути більшою за 0")
          .integer()
          .required("Обов'язкове поле"),
      }),
    ),
  })
  .required();

export const Form = () => {
  const user = useUserSelector();
  const dispatch = useDispatch();

  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
    setValue,
    reset,
  } = useForm({
    defaultValues: {
      products: [{ name: "", count: 1, price: 0 }],
    },
    resolver: yupResolver(schema),
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "products",
  });

  const onSubmit = (data) => {
    const userId = user.id;
    const { city, cargo, fullName, phone, postOffice } = data;
    const products = [];
    let price = 0;
    data.products.forEach((pr) => {
      products.push(`${pr.name} х ${pr.count} шт`);
      price += pr.price * pr.count;
    });

    const order = {
      userId,
      products,
      price,
      city,
      cargo,
      fullName,
      phone,
      postOffice,
    };

    dispatch(addOrder(order));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex gap-5 mb-3">
        <div className="flex flex-col w-1/2 gap-2">
          <label className="flex flex-col mb-2 relative">
            <span className="text-gray-400 font-bold text-xs leading-7">
              ФІО
            </span>
            <input
              type="text"
              {...register("fullName")}
              className="border rounded p-1 pl-2"
              placeholder="Прізвище, Ім'я, Побатькові"
            />
            {errors.fullName && (
              <span className="errors">{errors.fullName.message}</span>
            )}
          </label>
          <label className="flex flex-col mb-2 relative">
            <span className="text-gray-400 font-bold text-xs leading-7">
              Телефон
            </span>
            <Controller
              control={control}
              name="phone"
              render={({ field }) => {
                return (
                  <IMaskInput
                    mask="+{38} ({\0}00) 000-00-00"
                    unmask={true}
                    lazy={false}
                    ref={(el) => {
                      field.ref(el?.element);
                    }}
                    placeholderChar="_"
                    className="border rounded p-1 pl-2"
                    onAccept={(value) => {
                      setValue("phone", value);
                    }}
                  />
                );
              }}
            />
            {errors.phone && (
              <span className="errors">{errors.phone.message}</span>
            )}
          </label>
        </div>
        <div className="flex flex-col w-1/2 gap-2">
          <label className="flex flex-col mb-2 relative">
            <span className="text-gray-400 font-bold text-xs leading-7">
              Транспортна компанія
            </span>
            <select
              type="text"
              {...register("cargo")}
              className="border rounded p-1 pl-2"
              defaultValue=""
            >
              <option value="Нова Пошта">Нова Пошта</option>
              <option value="УкрПошта">УкрПошта</option>
            </select>
          </label>
          <label className="flex flex-col mb-2 relative">
            <span className="text-gray-400 font-bold text-xs leading-7">
              Місто
            </span>
            <input
              type="text"
              {...register("city")}
              className="border rounded p-1 pl-2"
            />
          </label>
          <label className="flex flex-col mb-2 relative">
            <span className="text-gray-400 font-bold text-xs leading-7">
              Відділення/індекс
            </span>
            <input
              type="text"
              {...register("postOffice")}
              className="border rounded p-1 pl-2"
            />
          </label>
        </div>
      </div>
      <div>
        {fields.map((field, index) => {
          return (
            <section key={field.id} className="flex gap-2 mb-5 relative">
              <label className="flex flex-col w-6/12">
                <span className="text-gray-400 font-bold text-xs leading-7">
                  Товар
                </span>
                <input
                  className="border rounded p-1 pl-2"
                  type="text"
                  {...register(`products.${index}.name`)}
                />
              </label>
              <label className="flex flex-col w-2/12">
                <span className="text-gray-400 font-bold text-xs leading-7">
                  Кількість
                </span>
                <input
                  className="border rounded p-1 pl-2"
                  type="number"
                  {...register(`products.${index}.count`)}
                />
              </label>
              <label className="flex flex-col w-3/12">
                <span className="text-gray-400 font-bold text-xs leading-7">
                  Ціна
                </span>
                <input
                  className="border rounded p-1 pl-2"
                  type="number"
                  {...register(`products.${index}.price`)}
                />
              </label>
              <div className="w-1/12 relative">
                {index > 0 ? (
                  <button
                    onClick={() => {
                      remove(index);
                    }}
                    className="absolute bottom-2 left-1 text-gray-400"
                  >
                    X
                  </button>
                ) : null}
              </div>
              {errors.products?.[index] &&
                ((errors.products?.[index]?.name && (
                  <span className="errors">
                    {errors.products?.[index]?.name.message}
                  </span>
                )) ||
                  (errors.products?.[index]?.count && (
                    <span className="errors">
                      {errors.products?.[index]?.count.message}
                    </span>
                  )) ||
                  (errors.products?.[index]?.price && (
                    <span className="errors">
                      {errors.products?.[index]?.price.message}
                    </span>
                  )))}
            </section>
          );
        })}
        <label className="flex items-center cursor-pointer w-fit">
          <button
            onClick={() => {
              append({ name: "", count: 1, price: 0 });
            }}
          >
            <span className="icon-plus text-lg font-bold text-main-blue"></span>
          </button>
          <span className="text-xs font-bold text-main-blue">
            Добавити товар
          </span>
        </label>
      </div>
      <Button text="Створити замовлення" type="submit" />
    </form>
  );
};
