import data from "./data.js";

const clickedCount = document.createElement("div");
clickedCount.textContent = data.clicked;

const onClickedChange = (value) => {
  clickedCount.textContent = value;
};

data.addOnClickedChangeHandler(onClickedChange);

export default clickedCount;
