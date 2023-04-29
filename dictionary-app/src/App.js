import React, { useState } from 'react';

function App() {
  const [word, setWord] = useState('');
  const [definition, setDefinition] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then(response => response.json())
      .then(data => {
        const definition = data[0].meanings[0].definitions[0].definition;
        setDefinition(definition);
      })
      .catch(error => console.error(error));
  }

  return (
    <div>
      <h1>Dictionary</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Word:
          <input type="text" value={word} onChange={event => setWord(event.target.value)} />
        </label>
        <button type="submit">Submit</button>
      </form>
      {definition && <p>{definition}</p>}
    </div>
  );
}

export default App;
