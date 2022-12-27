import BoardView from '../view/board-view';
import SortView from '../view/sort-view.js';
import NewWaypointView from '../view/waypoint';
import { render } from '../render.js';


export default class BoardPresenter {
  boardComponent = new BoardView();

  constructor({ boardContainer }) {
    this.boardContainer = boardContainer;
    }

  init() {
    render(this.boardComponent, this.boardContainer);
    render(new SortView(), this.boardComponent.getElement());
    render(new NewWaypointView(), this.boardComponent.getElement());
    // render(this.taskListComponentt, this.boardComponent.getElement());
    // render(new NewFilterView(), this.taskListComponentt.getElement());

    // for (let i = 0; i < 3; i++) {
    //     render(new NewWaypointView(),boardComponent.getElement());
    // }


    }
}
