/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

const ProgressBar = ({
  backgroundColor = "#e4c062",
  visualParts = [
    {
      percentage: "10%",
      color: "white",
    },
  ],
}) => {
  // Starting values needed for the animation
  // Mapped by "visualParts" so it can work with multiple values dynamically
  // It's an array of percentage widths
  const [widths, setWidths] = useState(
    visualParts.map(() => {
      return 0;
    })
  );

  useEffect(() => {
    // You need to wrap it to trigger the animation
    requestAnimationFrame(() => {
      // Set a new array of percentage widths based on the props
      setWidths(
        visualParts.map((item) => {
          return item.percentage;
        })
      );
    });
  }, [visualParts]);

  return (
    <>
      <div
        className="flex h-8 mt-3 rounded-lg bg-[#e5e6e8] cursor-pointer"
        // to change the background color dynamically
      >
        {visualParts.map((item, index) => {
          // map each part into separate div and each will be animated
          // because of the "transition: width 2s;" css in class "progressVisualPart"
          // and because of the new width ("widths[index]", previous one was 0)
          return (
            <div
              // There won't be additional changes in the array so the index can be used
              /* eslint-disable-next-line react/no-array-index-key */
              key={index}
              style={{
                width: widths[index],
                transition: "width 2s",
                backgroundColor,
              }}
              className="rounded-lg"
            />
          );
        })}
      </div>
    </>
  );
};

export default ProgressBar;
