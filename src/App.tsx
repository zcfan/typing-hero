import Sample from './Sample'
import Input from './Input'
import wordEmiter from './wordEmiter'
import { ChangeEvent } from 'react';


function App() {
  const word = wordEmiter()
  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    const isEq = e.target.value === word[0]
    if (isEq) {
      alert('!!!!')
    }
  }

  return (
    <div>
      <Sample word={word} />
      <Input onChange={handleInputChange} />
    </div>
  );
}

export default App;
