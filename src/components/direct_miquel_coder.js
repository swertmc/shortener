import { useRouteMatch } from 'react-router-dom';
import db from '../firebase';

function DirectMiquel() {
	const {
		params: { shortLink },
	} = useRouteMatch();
	return getMultiple(shortLink);
}
async function getMultiple(shortLink) {
	const citiesRef = db.collection('messages');
	const snapshot = await citiesRef.where('link', '==', `${shortLink}`).get();
	if (snapshot.empty) {
		//console.log('No matching documents.');
		//setError(true);
		return;
	}

	snapshot.forEach((doc) => {
		//console.log(doc.data().url);
		let url = doc.data().url;
		let prefix = 'http://';
		let prefix_ssl = 'https://';
		if (url.substr(0, prefix.length) !== prefix) {
			//егер http:// протоколы болмаса
			if (url.substr(0, prefix_ssl.length) !== prefix_ssl)
				//егер https:// протоколы  болмаса
				window.location.replace(prefix + url);
			//протокол қосып рэплейсе жасаймыз
			else window.location.replace(url); //url has https:// protocol
		} else window.location.replace(url); //url has http:// protocol
	});
}

export default DirectMiquel;
