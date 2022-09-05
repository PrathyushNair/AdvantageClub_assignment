import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { loginaction, noerroraction } from "../Redux/loginaction";
import { Spinner } from "@chakra-ui/react";
import { Input, InputGroup, InputRightElement, Button } from "@chakra-ui/react";
import { Alert, AlertIcon } from "@chakra-ui/react";
import style from "./Login.module.css";
export const Login = () => {
  const dispatch = useDispatch();
  const { isAuth, isError, isLoading } = useSelector((state) => state.login);
  let [data, setData] = React.useState({ email: "", password: "" });
  let [emptyField, setemptyField] = React.useState(false);
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  let handleChange = (e) => {
    dispatch(noerroraction());
    setemptyField(false);
    setData({ ...data, [e.target.name]: e.target.value });
  };
  let handleSubmit = () => {
    if (data.email === "" || data.password === "") {
      setemptyField(true);
    } else {
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
        <Input
          name="email"
          value={data.email}
          onChange={handleChange}
          placeholder="Enter Email"
          size="md"
        />
      </div>
      <div>
        <InputGroup size="md">
          <Input
            name="password"
            value={data.password}
            onChange={handleChange}
            pr="4.5rem"
            type={show ? "text" : "password"}
            placeholder="Enter password"
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </div>

      <Button onClick={handleSubmit}>Submit</Button>
    </div>
  );
};
