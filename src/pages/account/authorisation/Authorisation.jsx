import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";

import { useUserListSelector } from "@/store/slice/userListSlice";
import { login } from "@/store/slice/userSlice";

import { Button } from "@/components/Button";

const schema = yup
  .object({
    password: yup.string().required("Пароль є обов'язковим полем"),
    email: yup
      .string()
      .email("Неправильний формат email")
      .required("Email є обов'язковим полем"),
  })
  .required();

export const Authorisation = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const dispatch = useDispatch();
  const userList = useUserListSelector();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    const [userData] = userList.filter(
      (user) => user.password == data.password && user.email === data.email,
    );
    if (!userData) {
      setError("root.invalidUser", { type: "Неправильний пароль або email" });
      return;
    } else {
      dispatch(login(userData));
      navigate("/app/incoming");
    }
  };

  return (
    <div className="flex flex-col justify-start h-full">
      <h2 className="text-indigo-950 font-bold text-4xl mb-7">Авторизація</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col relative"
      >
        <label
          htmlFor="email"
          className="text-indigo-950 font-bold text-xs leading-7"
        >
          Email
        </label>
        <div className="input__wrap email">
          <input
            id="email"
            type="text"
            {...register("email")}
            className="input"
          />
          {errors.email && (
            <span className="errors">{errors.email.message}</span>
          )}
        </div>
        <label
          htmlFor="password"
          className="text-indigo-950 font-bold text-xs leading-7"
        >
          Пароль
        </label>
        <div className="input__wrap pass">
          <input
            id="password"
            type="text"
            {...register("password")}
            className="input"
          />
          {errors.password && (
            <span className="errors">{errors.password.message}</span>
          )}
        </div>
        {errors?.root?.invalidUser ? (
          <span className="errors__form">{errors.root.invalidUser.type}</span>
        ) : null}
        <Button type="submit" text="Авторизуватися" />
      </form>
    </div>
  );
};
