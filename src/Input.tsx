import { ChangeEvent } from "react";

interface InputProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  value: string
}

export default function Input({
  onChange,
  value
}: InputProps) {
  return (
    <input value={value} onChange={onChange} placeholder="请输入上面的文本" />
  )
}