export const IDLE = "idle";
export const LOADING = "loading";
export const LOADED = "loaded";
export const SUCCESS = "success";
export const FAILED = "failed";

/** @type {{LOADING: string, SUCCESS: string, FAILED: string, IDLE: string, LOADED: string}} */
// export const states = [IDLE, LOADING, LOADED, SUCCESS, FAILED];
export const states = { IDLE, LOADING, LOADED, SUCCESS, FAILED };

export default class State {
  #state = IDLE;

  constructor(state) {
    this.#state = state;
  }

  get getState() {
    return this.#state;
  }

  set setState(value) {
    if (!states.includes(value)) {
      throw new Error("state value not registered");
    }

    this.#state = value;
  }

  static get IDLE() {
    return IDLE;
  }

  static get LOADING() {
    return LOADING;
  }

  static get LOADED() {
    return LOADED;
  }

  static get SUCCESS() {
    return SUCCESS;
  }

  static get FAILED() {
    return FAILED;
  }

  /**
   * @param {string} state
   * @returns {boolean}
   */
  isState(state) {
    return this.#state === state;
  }

  /** @returns {boolean} */
  isStateLoading() {
    return this.#state === State.LOADING;
  }

  /** @returns {boolean} */
  isStateFailed() {
    return this.#state === State.FAILED;
  }
}
