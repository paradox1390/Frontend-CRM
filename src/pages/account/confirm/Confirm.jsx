import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";

import { Button } from "@components/Button";

import { confirmUser } from "@/store/slice/userSlice";
import { getConfirmCode } from "@/api";

import css from "./confirm.module.css";

export const Confirm = () => {
  const [isSendCode, setIsSendCode] = useState(false);
  const navigate = useNavigate();

  const schema = yup
    .object({
      сonfirmCode: yup
        .string()
        .length(6, "Довжина коду 6 символів")
        .required("Поле є обов'язковим полем"),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    const code = JSON.stringify({ code: data.сonfirmCode });
    const user = await dispatch(confirmUser(code));
    if (user?.error) {
      setError(
        setError("root.errorSendCode", {
          type: `${user?.error.message}`,
        }),
      );
    } else {
      navigate("/app/incoming");
    }
  };

  const onSendCode = async () => {
    try {
      await getConfirmCode();
      setIsSendCode(true);
    } catch (error) {
      setError("root.errorSendCode", {
        type: `${error.message}`,
      });
    }
  };

  return (
    <div className="flex flex-col justify-start h-full relative">
      <h2 className="text-indigo-950 font-bold text-4xl mb-7">Регістрація</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="relative">
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
        {errors?.root?.errorSendCode ? (
          <span className="errors__form">{errors.root.errorSendCode.type}</span>
        ) : null}
        <div className="flex gap-5">
          <Button type="submit" text="Підтвердити" />
          <Button
            type="button"
            view="gradient"
            text="Отримати код"
            onclick={onSendCode}
          />
        </div>
        {isSendCode && (
          <span className="absolute bottom-[-65px] left-0 text-indigo-950 text-base">
            *код підтвердження відправленний на email вказаний при регістрації
          </span>
        )}
      </form>
    </div>
  );
};
