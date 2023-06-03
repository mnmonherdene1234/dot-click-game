class Data {
  constructor() {
    const data = localStorage.getItem("data");

    if (data) {
      const objData = JSON.parse(data);
      if (objData?.clicked && objData?.clicked instanceof Number) {
        this.#clicked = Math.floor(objData?.clicked);
      }
    }
  }

  #clicked = 0;

  /**
   * User dot click count
   */
  get clicked() {
    return this.#clicked;
  }

  /**
   * @param {number} value
   */
  set clicked(value) {
    this.#clicked = value;
    this.#triggerOnClickedChange();

    this.#save();
  }

  #save() {
    const data = JSON.stringify({
      clicked: this.#clicked,
    });

    localStorage.setItem("data", data);
  }

  #onClickedChangeHandlers = [];

  #triggerOnClickedChange() {
    for (const handler of this.#onClickedChangeHandlers) {
      handler(this.#clicked);
    }
  }

  addOnClickedChangeHandler(handler) {
    this.#onClickedChangeHandlers.push(handler);
  }

  removeOnClickedChangeHandler(handler) {
    const index = this.#onClickedChangeHandlers.indexOf(handler);
    if (index !== -1) {
      this.#onClickedChangeHandlers.splice(index, 1);
    }
  }
}

export default new Data();
