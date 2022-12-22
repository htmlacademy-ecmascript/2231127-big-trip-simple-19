import NewWaypointView from '../view/waypoint';
import { render } from '../render.js';
import BoardView from '../view/board-view';
import ListTripsView from '../view/board-presenter.js';
import SortView from '../view/sort-view.js';

export default class BoardPresenter {
    boardComponent = new BoardView();
    taskListComponent = new ListTripsView();

    constructor({ boardContainer }) {
        this.boardContainer = boardContainer;
    }

    init() {
        render(this.boardComponent, this.boardContainer);
        render(new SortView(), this.boardComponent.getElement());
        render(this.taskListComponent, this.boardComponent.getElement());
        // render(new TaskEditView(), this.taskListComponent.getElement());

        for (let i = 0; i < 3; i++) {
            render(new NewWaypointView(), taskListComponent.getElement());
        }


    }
}