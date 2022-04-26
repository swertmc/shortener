import React, { useState, useEffect } from 'react'
import { Button, Input } from '@material-ui/core'
import { validUrl, getDomain, combinations } from '../functions'
import db from '../firebase'
import firebase from 'firebase/app'
import 'firebase/database'

function AddingUrl() {
	const [input, setInput] = useState('')
	const [link, setLink] = useState('')
	const [output, setOutput] = useState('')

	useEffect(() => {
		db.collection('messages')
			.orderBy('timestamp', 'desc')
			.onSnapshot((snapshot) => {
				setOutput(snapshot.docs.map((doc) => doc.data()))
			})
	}, [])

	const add = (event) => {
		event.preventDefault()
		var url = output.map((item) => {
			return item['url']
		})
		var index = url.indexOf(input)
		if (index !== -1) {
			let result = output.filter((obj) => {
				return obj.url === input
			})
			setLink(
				result.map((item) => {
					return item.link
				})
			)
		} else {
			if (!validUrl(input)) alert('Durys emes URL nemese URL qabyldanbaid😉')
			else {
				let domain = getDomain(input)
				if (domain === 'miras.ga' || domain === 'qiwi.io' || domain === 'goo.gl' || domain === 'bit.ly')
					alert('😝😝🤣🤣')
				else {
					let allLinks = output.map((item) => {
						return item['link']
					})
					//?соңғы линкті анықтап жатырмыз
					let lastElement = allLinks[allLinks.length - 1]
					let indexOfLast = allLinks.lastIndexOf(lastElement)

					//? енді жаңа шорт линк істейміз
					let newIndex = indexOfLast + 1
					var newShortLink = combinations()[newIndex]
					db.collection('messages').add({
						link: newShortLink,
						url: input,
						timestamp: firebase.firestore.FieldValue.serverTimestamp(),
					})
					setLink(newShortLink)
					setInput('')
				}
			}
		}
	}
	return (
		<div className="input">
			<div className="input__row">
				<form className="input__form">
					<Input onChange={(event) => setInput(event.target.value)} value={input} placeholder="http://" />
					<Button onClick={add} disabled={!input} type="submit" color="primary" variant="contained">
						Qysqartu🧷
					</Button>
					<div className="input__text">
						<p>Qysqa link:</p>
						<p className="link">localhost:3000/{link}</p>
					</div>
				</form>
			</div>
		</div>
	)
}

export default AddingUrl
