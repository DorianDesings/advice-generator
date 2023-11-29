import { buttonElement, cardTextElement, cardTitleElement } from './dom';
import { fetchData } from './utils';

const printData = async () => {
	const data = await fetchData();
	cardTitleElement.textContent = `Advice #${data.slip.id}`;
	cardTextElement.textContent = data.slip.advice;
};

printData();

buttonElement.addEventListener('click', printData);
