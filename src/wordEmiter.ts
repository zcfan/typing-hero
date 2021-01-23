import words from './THUOCL_IT.json';

export default function randomWord() {
  const index = Math.floor(Math.random() * words.length)
  return words[index] as [string, number]
}