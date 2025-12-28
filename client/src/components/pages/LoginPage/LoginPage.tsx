import React, { useCallback, useState } from "react";
import { useAppDispatch } from "../../../hooks";
import { loginUserAsync } from "../../../thunks";

export const LoginPage = () => {
  const [loginValue, setLoginValue] = useState<string>("");
  const [passwordValue, setPasswordValue] = useState<string>("");
  const dispatch = useAppDispatch();

  const submitHandler = useCallback(() => {
    console.log({ loginValue, passwordValue });
    if (loginValue && passwordValue) {
      dispatch(loginUserAsync({ login: loginValue, password: passwordValue }));
      setLoginValue("");
      setPasswordValue("");
    }
  }, [loginValue, passwordValue]);

  return (
    <div>
      <span>login</span>
      <input
        placeholder="email/login"
        value={loginValue}
        onChange={(e) => setLoginValue(e.target.value)}
      />
      <input
        placeholder="password"
        value={passwordValue}
        onChange={(e) => setPasswordValue(e.target.value)}
      />
      <button onClick={submitHandler}>submit</button>
    </div>
  );
};
