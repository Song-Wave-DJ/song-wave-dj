/* eslint-disable react/prop-types */
import { useEffect } from "react";
import "./style.scss";
const Button = ({
  label,
  onClick,
  isLoading = false,
  styles = "w-full",
  disabled = false,
  bg = "",
}) => {
  useEffect(() => {
    let animateButton = function (e) {
      e.preventDefault();
      //reset animation
      e.target.classList.remove("animate");

      e.target.classList.add("animate");
      setTimeout(function () {
        e.target.classList.remove("animate");
      }, 700);
    };

    let bubblyButtons = document.getElementsByClassName("bubbly-button");
    for (let i = 0; i < bubblyButtons.length; i++) {
      bubblyButtons[i].addEventListener("click", animateButton, false);
    }
  }, []);
  return (
    <div onClick={onClick} className={styles}>
      <button
        disabled={disabled}
        className={`bubbly-button text-xs w-full ${bg}`}
      >
        {!isLoading ? label : "Loading.."}
      </button>
    </div>
  );
};

export default Button;
