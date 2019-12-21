import behindthename from '../apis/behindTheName';
import axios from 'axios';

export const fetchNames = formValues => {
	return async dispatch => {
		const name = formValues.username;
		const response = await axios.get(`https://www.behindthename.com/api/lookup.json?name=${name}&key=mo245439977`);
		console.log(response.data);
		if (response.data.error_code) {
			return;
		}
		dispatch({ type: 'NAME_TRANSLATED', payload: response.data });
	};
};

export const fetchSimilarNames = (formValues, usageKey) => {
	return async dispatch => {
		const name = formValues.username;
		const usagekey = usageKey;
		const response = await axios.get(
			`https://www.behindthename.com/api/related.json?name=${name}&usage=${usagekey}&key=mo245439977`
		);
		console.log(response.data);
		if (response.data.error_code) {
			return;
		}
		dispatch({ type: 'SIMILAR_NAMES', payload: response.data });
	};
};

// export const nameSubmitted = formValues => {
// 	return async dispatch => {
// 		const passedInName = formValues.username;

// 		const response = await namesdb.post('/names', { ...formValues, passedInName });
// 		dispatch({ type: 'NAME_SUBMITTED', payload: response.data });
// 	};
// };

//make an api request to behindthenames api and do something with the data
//to do: sign up to the api / set up axios configuration / make api request
//api is broken find a new one
