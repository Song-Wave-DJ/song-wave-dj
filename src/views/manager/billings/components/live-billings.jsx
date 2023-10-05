/* eslint-disable react/prop-types */
import { EmptyIcon } from "@/assets";

export const LiveBilling = ({ data = [], onClickBottomDrawer }) => {
  return (
    <>
      {data?.length > 0 ? (
        data.map((item) => (
          <div
            key={item.id}
            className="w-32 p-2 h-32 pt-6 flex flex-col justify-start  items-center rounded-lg shadow-md  cursor-pointer hover:shadow-lg"
            onClick={() => onClickBottomDrawer(item)}
          >
            <h1 className="text-2xl font-semibold">{item.table}</h1>
            {item.isActive && (
              <>
                <p className=" rounded-full w-2 h-2 my-2 bg-primary"></p>
                <p className="text-x text-primary">Active</p>
              </>
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
