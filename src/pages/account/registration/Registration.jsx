import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { IMaskInput } from "react-imask";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";

import { useUserListSelector, addUser } from "@/store/slice/userListSlice";
import { login } from "@/store/slice/userSlice";

import { Button } from "@components/Button";

import css from "./registration.module.css";

const schema = yup
  .object({
    fullName: yup.string().required("ФІО є обов'язковим полем"),
    phone: yup
      .string()
      .length(12, "Невірний формат номера")
      .required("Телефон є обов'язковим полем"),
    email: yup.string().required("Email є обов'язковим полем"),
  })
  .required();

export const Registration = () => {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    setError,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userList = useUserListSelector();

  console.log(userList);

  const onSubmit = (data) => {
    const [userData] = userList.filter(
      (user) => user.phone === data.phone || user.email === data.email,
    );

    if (!userData) {
      dispatch(addUser(data));
      dispatch(login(data));
      navigate("/account/confirm");
      return;
    }
    setError("root.userExist", {
      type: "Користувач з таким email або номером телефону вже існує",
    });
  };

  return (
    <div className="flex flex-col justify-center h-full">
      <h2 className="text-indigo-950 font-bold text-4xl mb-7">Регістрація</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col relative"
      >
        <label
          htmlFor="fullName"
          className="text-indigo-950 font-bold text-xs leading-7"
        >
          ФІО
        </label>
        <div className={css.fullname}>
          <input
            id="fullName"
            type="text"
            {...register("fullName")}
            className={css.input}
            placeholder="Прізвище, Ім'я"
          />
          {errors.fullName && (
            <span className={css.errors}>{errors.fullName.message}</span>
          )}
        </div>
        <label
          htmlFor="phone"
          className="text-indigo-950 font-bold text-xs leading-7"
        >
          Телефон
        </label>
        <div className={css.phone}>
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
                  className={css.input}
                  onAccept={(value) => {
                    setValue("phone", value);
                  }}
                />
              );
            }}
          />
          {errors.phone && (
            <span className={css.errors}>{errors.phone.message}</span>
          )}
        </div>
        <label
          htmlFor="email"
          className="text-indigo-950 font-bold text-xs leading-7"
        >
          Email
        </label>
        <div className={css.email}>
          <input
            id="email"
            type="text"
            {...register("email")}
            className={css.input}
          />
          {errors.email && (
            <span className={css.errors}>{errors.email.message}</span>
          )}
        </div>
        {errors?.root?.userExist ? (
          <span className="errors__form">{errors.root.userExist.type}</span>
        ) : null}
        <Button type="submit" text="Зареєструватися" />
      </form>
    </div>
  );
};
