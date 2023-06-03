import data from "./data.js";

const clickedCount = document.createElement("div");

const onClickedChange = (value) => {
  clickedCount.textContent = value;
};

data.addOnClickedChangeHandler(onClickedChange);

export default clickedCount;
