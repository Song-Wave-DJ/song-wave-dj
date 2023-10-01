import { Link } from "react-router-dom";
import { RightOutlined } from "@ant-design/icons";

export const CategoryCard = ({ title, filterItem, id }) => {
  return (
    <Link
      to={`/menu/${id}?${filterItem}`}
      className="p-2 px-4 mb-4 flex justify-between sm:w-[600px] w-full border rounded-md"
    >
      <h3 className="text-[14px] font-sans">{title}</h3>
      <RightOutlined />
    </Link>
  );
};
