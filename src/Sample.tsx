interface SampleProps {
  word: [string, number]
}

export default function Sample({
  word
}: SampleProps) {
  return (
    <div>{word[0]}</div>
  )
}
