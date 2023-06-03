class Data {
  constructor() {
    const data = localStorage.getItem("data");

    if (data) {
      const objData = JSON.parse(data);
      console.log(objData);
      if (objData?.clicked) {
        this.#clicked = parseInt(objData?.clicked);
      }

      if (objData?.timePlayed) {
        this.#timePlayed = parseInt(objData?.timePlayed);
      }
    }

    window.addEventListener("unload", () => this.#save());
  }

  #timePlayed = 0;
  #gameStartedDate = new Date();

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
    const now = Date.now();
    this.#timePlayed += now - this.#gameStartedDate.getTime();

    const data = JSON.stringify({
      clicked: this.#clicked,
      timePlayed: this.#timePlayed,
    });

    localStorage.setItem("data", data);
    this.#gameStartedDate = new Date();
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
