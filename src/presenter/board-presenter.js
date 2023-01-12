import { render } from '../render.js';
import MainBoardView from '../view/main-view.js';
import SortEventsView  from '../view/sort-events-view.js';
import TripEventBodyView from '../view/trip-body-view.js';
import NewTripView from '../view/new-trip-view.js';
import PageBodyView from '../view/page-body-view.js';
import SectionTripEventsView from '../view/section-trip-events-view.js';


export default class BoardPresenter {
  mainBoardViewComponent = new MainBoardView();
  pageBodyViewComponent = new PageBodyView();
  TripEventBodyViewComponent = new TripEventBodyView();
  TestViewComponent = new SectionTripEventsView(); 

  constructor({ pageMain }) {
    this.pageMain = pageMain;
  }

  init() {
    render(this.mainBoardViewComponent, this.pageMain);
    render(this.pageBodyViewComponent, this.mainBoardViewComponent.getElement());
    render(this.TestViewComponent, this.pageBodyViewComponent.getElement());
    render(new SortEventsView(), this.TestViewComponent.getElement());
    render(this.TripEventBodyViewComponent, this.pageBodyViewComponent.getElement());
    
    for (let i = 0; i < 3; i++) {
      render(new NewTripView(), this.TripEventBodyViewComponent.getElement());
    }
  }
}
