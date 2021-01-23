import Sample from './Sample'
import Input from './Input'
import wordEmiter from './wordEmiter'


function App() {
  return (
    <div>
      <Sample word={wordEmiter()} />
      <Input />
    </div>
  );
}

export default App;
