/* eslint-disable react/prop-types */
import { EmptyIcon } from "../../../../assets";
import { CallingIcon } from "../../../../assets/images";

export const LiveBilling = ({ data = [], onClickBottomDrawer }) => {
  return (
    <>
      {data?.length > 0 ? (
        data.map((item) => (
          <div
            key={item.id}
            className="w-60 h-48 py-4 px-2 flex flex-col justify-start  rounded-lg border  cursor-pointer hover:shadow-lg"
            onClick={() => onClickBottomDrawer(item)}
          >
            <div className="flex justify-between">
              <p className="text-xs">Bill No: 12345</p>
              <p className="border rounded-full text-xs px-2">12:30</p>
            </div>
            <div className="flex items-center gap-2 py-2">
              <img className="w-4 h-4" src={CallingIcon} />
              <h2 className="text-xs">+91 123456789</h2>
            </div>
            <h1 className="text-2xl text-center pt-4 font-semibold">
              {item.table}
            </h1>
            {item.isActive && (
              <div className="flex justify-center flex-col items-center">
                <p className=" w-2 h-2 rounded-full  my-2 bg-primary"></p>
                <p className="text-x text-primary">Active</p>
              </div>
            )}
          </div>
        ))
      ) : (
        <div className="flex flex-col items-center">
          <img className="w-40 object-contain" src={EmptyIcon} />
          <p className="text-lg">No data available!</p>
        </div>
      )}
    </>
  );
};
