import { buttonElement } from './dom';
import { printData } from './functions';

printData();

buttonElement.addEventListener('click', printData);
