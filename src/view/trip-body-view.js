import { createElement } from '../render.js';

function createBodyTravelTemplate() {
  return '<ul class="trip-events__list"></ul>';
}

export default class TripEventBodyView {
  getTemplate() {
    return createBodyTravelTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
