import { URL } from './constants';

export const fetchData = async () => {
	const response = await fetch(URL);
	const data = await response.json();
	return data;
};
