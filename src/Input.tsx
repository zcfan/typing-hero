import { ChangeEvent } from "react";

interface InputProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export default function Input({
  onChange
}: InputProps) {
  return (
    <input onChange={onChange} placeholder="请输入上面的文本" />
  )
}