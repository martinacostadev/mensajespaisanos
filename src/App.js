import React, { useState, useEffect } from 'react';

import MarkDown from 'markdown-to-jsx';

import './styles/styles.css';

function App() {
	const file_name = 'messages.md';
	const [messages, setMessages] = useState('');

	useEffect(() => {
		import(`./markdown/${file_name}`)
			.then(res => {
				fetch(res.default)
					.then(res => res.text())
					.then(res => setMessages(res));
			})
			.catch(err => console.log(err));
	});

	return (
		<div className='container'>
			<MarkDown className='messages'>
				{messages}
			</MarkDown>
		</div>
	);
}

export default App;