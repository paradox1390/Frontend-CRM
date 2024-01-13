import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";

import { Button } from "@components/Button";

import { useUserSelector, login } from "@/store/slice/userSlice";
import { useUserListSelector } from "@/store/slice/userListSlice";

import css from "./confirm.module.css";

export const Confirm = () => {
  const userList = useUserListSelector();
  const user = useUserSelector();
  const [userData] = userList.filter((us) => us.email === user.email);

  console.log("пароль===>", userData.password);
  console.log("Code===>", userData.confirmCode);
  const navigate = useNavigate();
  const schema = yup
    .object({
      сonfirmCode: yup
        .string()
        .test("valid", "Не вірний код підтвердження", (value) => {
          return value !== userData.confirmCode;
        })
        .required("ФІО є обов'язковим полем"),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch(login(userData));
    navigate("/app/incoming");
  };

  return (
    <div className="flex flex-col justify-start h-full">
      <h2 className="text-indigo-950 font-bold text-4xl mb-7">Регістрація</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label
          htmlFor="сonfirmCode"
          className="text-indigo-950 font-bold text-xs leading-7"
        >
          Введіть код:
        </label>
        <div className={css.confirm}>
          <input
            id="сonfirmCode"
            type="text"
            {...register("сonfirmCode")}
            className={css.input}
            placeholder="Введіть код"
          />
          {errors.сonfirmCode && (
            <span className={css.errors}>{errors.сonfirmCode.message}</span>
          )}
        </div>

        <Button type="submit" text="Відправити" />
      </form>
    </div>
  );
};
