import { createElement } from '../render.js';

function createListTrips() {
    return (`
    <div class="event"></div>;
              `);
}

export default class ListTripsView {
    getTemplate() {
        return createListTrips();
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