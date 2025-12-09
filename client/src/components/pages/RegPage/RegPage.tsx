import React, { useCallback, useState } from "react";
import { loginUserAsync } from "../../../thunks";
import { useAppDispatch } from "../../../hooks";

export const RegPage = () => {
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
      <span>registration</span>
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
