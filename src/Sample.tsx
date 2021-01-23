import words from './THUOCL_IT.json';

export default function Sample() {
  const word = randomWord()
  return (
    <div>{word[0]}</div>
  )
}

function randomWord() {
  const index = Math.floor(Math.random() * words.length)
  return words[index]
}