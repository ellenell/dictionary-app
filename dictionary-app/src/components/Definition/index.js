import {useState, React} from 'react'


function Definition() {
  const [word, setWord] = useState("")
  return (
    <div className="App">
        Definition 
        <form>
  <label>
    Word: 
    <input type="text" name="name" value={word} />
  </label>
  <input type="submit" value="Submit" />
</form>
    </div>
  );
}

export default Definition;
