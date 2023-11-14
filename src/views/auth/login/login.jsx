import { Button, TextInput, TextPassword, Title } from "../../../components";
import { Form, message } from "antd";
import { fieldSet } from "./fieldsData";
import { Link, useNavigate } from "react-router-dom";
import { postMethod } from "../../../services";
import { useState } from "react";

export const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigate();

  const userLogin = async (paylaod) => {
    const resp = await postMethod("check_username", paylaod);
    if (resp.message === "ok") {
      const { data } = resp;
      if (data) {
        localStorage.setItem("token", data.access_token);
        switch (data?.role) {
          case "manager":
            navigation("/dashboard");
            break;
          case "admin":
            navigation("/admin-dashboard");
            break;
        }
      }
      message.success("Logged In");
    }
    setIsLoading(false);
  };

  const onFinish = (paylaod) => {
    setIsLoading(true);
    userLogin(paylaod);
  };

  return (
    <main className="mt-20 flex px-10">
      <div className=" shadow-lg m-auto sm:w-[500px] w-full p-4">
        <p className="font-bold text-lg">Hey there,</p>
        <Title label="Sign In">
          <p className="text-[#717171] mb-4 text-xs">
            If you would like to sign in, please enter your email and password
            in the fields below.
          </p>
        </Title>
        <Form
          name="login"
          requiredMark={false}
          layout="vertical"
          onFinish={onFinish}
        >
          <TextInput name="email" {...fieldSet.email} />
          <TextPassword {...fieldSet.password} />
          <Form.Item className="flex justify-end my-2">
            <Link className="text-[#3CB5E5] font-sans" to="/sign-up">
              Already have an account?
            </Link>
          </Form.Item>
          <Form.Item className="mt-4">
            <Button label="Sign In to your account" isLoading={isLoading} />
          </Form.Item>
        </Form>
      </div>
    </main>
  );
};
