import { useState } from "react";
import Checkbox from "../../../assets/images/checkBox.png";
import ProgressBars from "./progresh-bar";
import { Progressdata } from "./progress-data";

export const PollsCard = () => {
  const [selectedBars, setSelectedBars] = useState([]);

  const handleProgressBarClick = (arrayIndex, id) => {
    const updatedSelectedBars = [...selectedBars];
    updatedSelectedBars[arrayIndex] = id;
    setSelectedBars(updatedSelectedBars);
  };

  return (
    <div className="flex justify-center flex-col">
      {Progressdata?.map((nestedArray, arrayIndex) => (
        <div
          className="flex justify-center mb-2  border-b-2  bg-white p-2  flex-wrap flex-col"
          key={nestedArray.id}
        >
          <h1 className="text-lg font-semibold pl-1">
            {nestedArray.questionTitle}
          </h1>
          <p className="text-xs pt-2 pl-1">{nestedArray.question}</p>
          <div className="border-2 flex justify-center flex-col p-4 rounded-lg w-full mt-4 bg-white">
            {nestedArray.data.map((item) => (
              <div
                className="relative"
                key={item.id}
                onClick={() => handleProgressBarClick(arrayIndex, item.id)}
              >
                <span className="absolute left-4 top-4 text-xs">
                  {item.title}
                </span>
                <ProgressBars
                  visualParts={[
                    {
                      percentage: selectedBars[arrayIndex]
                        ? item.progressValue
                        : "0%",
                      color: "white",
                    },
                  ]}
                />
                <span className="absolute right-16 top-4 text-xs w-6 h-6">
                  {selectedBars[arrayIndex] && item.progressValue}
                </span>
                {selectedBars[arrayIndex] === item.id && (
                  <img
                    className="absolute right-6 top-4 text-xs w-6 h-6"
                    src={Checkbox}
                    alt=""
                  />
                )}
              </div>
            ))}
            <div className="border-t mt-6 w-full border-black pt-4 flex justify-between">
              <div className="flex justify-center items-center gap-1">
                <span className="text-x">22.2k</span>
                <span className="text-x">comments</span>
              </div>
              <div className="flex justify-center items-center gap-1">
                <span className="text-x">1.1k</span>
                <span className="text-x">peek</span>
              </div>
              <div className="flex justify-center items-center gap-1">
                <span className="text-x">22.2k</span>
                <span className="text-x">share</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
