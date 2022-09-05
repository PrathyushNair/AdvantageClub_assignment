import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { loginaction, noerroraction } from "../Redux/loginaction";
import { Spinner } from "@chakra-ui/react";
import {
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import style from "./Login.module.css";
export const Login = () => {
  const dispatch = useDispatch();
  const { isAuth, isError, isLoading } = useSelector((state) => state.login);
  let [data, setData] = React.useState({ email: "", password: "" });
  let [emptyField,setemptyField]=React.useState(false)
  let handleChange = (e) => {
    dispatch(noerroraction())
    setemptyField(false)
    setData({ ...data, [e.target.name]: e.target.value });
  };
  let handleSubmit = () => {
    if(data.email==""||data.password=="")
    {
      setemptyField(true)
    }
    else{

      dispatch(loginaction(data));
    }
  };

  return isAuth ? (
    <Navigate to="/"></Navigate>
  ) : (
    <div className={style.loginContainer}>
      {isLoading && <Spinner color="red.500" />}
      {isError && (
        <Alert status="error">
          <AlertIcon />
          Please check login credentials
        </Alert>
      )}
       {emptyField && (
        <Alert status="error">
          <AlertIcon />
        Please fill all fields
        </Alert>
      )}
      <div>
        <input
          name="email"
          value={data.email}
          onChange={handleChange}
          placeholder="Enter Email"
        ></input>
      </div>
      <div>
        <input
          name="password"
          type="password"
          value={data.password}
          onChange={handleChange}
          placeholder="Enter password"
        ></input>
      </div>

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};


