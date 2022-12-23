import NewFilterView from './view/new-filter-view.js';
import { render } from './render.js';
import BoardPresenter from './presenter/board-presenter.js';


const siteMainElement = document.querySelector('.page-body');
const siteHeaderElement = siteMainElement.querySelector('.trip-controls__filters');
const boardPresenter = new BoardPresenter({ boardContainer: siteMainElement });


render(new NewFilterView(), siteHeaderElement);



boardPresenter.init();
