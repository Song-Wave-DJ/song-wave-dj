import { Button, TextInput, TextPassword, Title } from "@/components";
import { Form } from "antd";
import { fieldSet } from "./fieldsData";
import { Link, useNavigate } from "react-router-dom";

export const Login = () => {
  const navigation = useNavigate();
  const onFinish = () => {
    navigation("/dashboard");
  };

  return (
    <main className="h-screen flex px-10">
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
            <Button label="Sign In to your account" />
          </Form.Item>
        </Form>
      </div>
    </main>
  );
};
