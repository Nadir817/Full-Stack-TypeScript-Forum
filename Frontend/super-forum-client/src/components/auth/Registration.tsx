import React, { FC, useReducer, useState } from "react";

const userReducer = (state: any, action: any) => {
  switch (action.type) {
    case "userName":
      return { ...state, userName: action.payload };
    case "password":
      return { ...state, password: action.payload };
    case "passwordConfirm":
      return { ...state, passwordConfirm: action.payload };
    case "email":
      return { ...state, email: action.payload };
    case "resultMsg":
      return { ...state, resultMsg: action.payload };
    default:
      return { ...state, resultMsg: "An error has occured!" };
  }
};

export interface RegistrationProps {
  isOpen: boolean;
  onClickToggle: (
    e: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>
  ) => void;
}

const Registration: FC<RegistrationProps> = ({ isOpen, onClickToggle }) => {
  const [isRegisterDisable, setRegisterDisable] = useState(true);

  const [{ userName, password, passwordConfirm, email, resultMsg }, dispatch] =
    useReducer(userReducer, {
      userName: "nadir",
      password: "",
      passwordConfirm: "",
      email: "nadir@gmail.com",
      resultMsg: "",
    });

  const allowRegister = (msg: string, setDisable: boolean) => {
    setRegisterDisable(setDisable);
    dispatch({ payload: msg, type: "resultMsg" });
  };

  return <div>hello</div>;
};

export default Registration;
