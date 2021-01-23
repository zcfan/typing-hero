import Sample from './Sample'
import Input from './Input'
import wordEmiter from './wordEmiter'
import { ChangeEvent, useState } from 'react';

function App() {
  const [word, setWord] = useState(wordEmiter())
  const [input, setInput] = useState('')
  
  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    const newValue = e.target.value
    setInput(newValue)
    const isEq = newValue === word[0]
    if (isEq) {
      setWord(wordEmiter())
      setInput('')
    }
  }

  return (
    <div>
      <Sample word={word} />
      <Input value={input} onChange={handleInputChange} />
    </div>
  );
}

export default App;
