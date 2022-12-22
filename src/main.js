import NewFilterView from './view/new-filter-view.js';
import { render } from './render.js';
// import SortView from './view/sort-view.js';
import BoardPresenter from './presenter';

const siteMainElement = document.querySelector('.page-body');
const siteHeaderElement = siteMainElement.querySelector('.trip-main');
const siteSortingElement = siteMainElement.querySelector('.trip-events');

render(new NewFilterView(), siteHeaderElement);
// render(new SortView(), siteSortingElement);

BoardPresenter.init();
