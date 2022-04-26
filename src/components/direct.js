import React, { useState, useEffect } from 'react';
import db from '../firebase';
import { CircularProgress } from '@material-ui/core';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import AddingUrl from '../components/input';

function Direct() {
	const { shortLink } = useParams();
	const [error, setError] = useState(false);

	useEffect(() => {
		getMultiple(db);
	}, [shortLink]);

	async function getMultiple(db) {
		const citiesRef = db.collection('messages');
		const snapshot = await citiesRef.where('link', '==', `${shortLink}`).get();
		if (snapshot.empty) {
			//console.log('No matching documents.');
			setError(true);
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

	return (
		<div className="direct">
			<Helmet>
				<meta charSet="utf-8" />
				<title>Loading...</title>
				<link rel="icon" href="http://mysite.com/example" />
			</Helmet>
			{error ? (
				<div className="direct__row">
					<Helmet>
						<meta charSet="utf-8" />
						<title>Qate😮</title>
						<link
							rel="icon"
							href="https://img.icons8.com/fluent/48/000000/add-link.png"
						/>
					</Helmet>

					<h1>404 TABYLMAD😔</h1>
					<AddingUrl />
				</div>
			) : (
				<CircularProgress />
			)}
		</div>
	);
}

export default Direct;
