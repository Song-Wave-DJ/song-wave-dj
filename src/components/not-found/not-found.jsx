import { NotFoundIcon } from "@/assets";
import Button from "../button";
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen flex justify-center flex-col items-center">
      <img className="w-20 object-contain" src={NotFoundIcon} alt="Not Found" />
      <h2 className="text-lg mt-4 font-bold">OPPS! Not Found </h2>
      <p>Somethings went wrong!</p>
      <Button
        label="Go Back"
        styles="w-40 my-4"
        onClick={() => navigate("/")}
      />
    </div>
  );
};
