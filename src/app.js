import React from 'react';
import Direct from './components/direct';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AddingUrl from './components/input';
import Footer from './components/footer';

//import DirectMiquel from './components/direct_miquel_coder';

function App() {
	return (
		<Router>
			<div className="wrapper">
				<Route path="/" exact>
					<AddingUrl />
				</Route>
				<Route path="/:shortLink" component={Direct} />
				<Footer />
			</div>
		</Router>
	);
}

export default App;
