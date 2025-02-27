import React, { useState } from 'react';
import './App.css';

function App() {
    const [topText, setTopText] = useState('');
    const [bottomText, setBottomText] = useState('');
    const [memeUrl, setMemeUrl] = useState('');

    const memeTemplates = [
        '181913649',
        '112126428',
        '123999232',
        '61579',  
    ];

    const fetchMeme = async () => {
        const randomTemplateId = memeTemplates[Math.floor(Math.random() * memeTemplates.length)];

        const username = 'Seikira';
        const password = 'ZKeN@75t!UwtQh2';

        const url = `https://api.imgflip.com/caption_image?template_id=${randomTemplateId}&username=${username}&password=${password}&text0=${topText}&text1=${bottomText}`;

        try {
            const response = await fetch(url);
            const data = await response.json();

            setMemeUrl(data.data.url);
        } catch (error) {
            console.error('Error fetching meme:', error);
        }
    };

    return (
        <div className="App">
            <h1>Meme Generator</h1>

            <input
                type="text"
                placeholder="Top Text"
                value={topText}
                onChange={(e) => setTopText(e.target.value)}
            />
            <input
                type="text"
                placeholder="Bottom Text"
                value={bottomText}
                onChange={(e) => setBottomText(e.target.value)}
            />

            <button onClick={fetchMeme}>Generate Meme</button>

            {memeUrl && <img src={memeUrl} alt="Meme" />}
        </div>
    );
}

export default App;
