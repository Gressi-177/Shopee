import { InputHTMLAttributes } from 'react'
import { UseFormRegister, type RegisterOptions } from 'react-hook-form'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string
  classNameInput?: string
  classNameError?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register?: UseFormRegister<any>
  rules?: RegisterOptions
}

export default function Input({
  type,
  errorMessage,
  placeholder,
  className,
  autoComplete,
  name,
  register,
  rules,
  classNameInput = 'w-full p-3 outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm',
  classNameError = 'mt-1 text-red-600 text-sm min-h-[1.25rem]'
}: Props) {
  const registerResult = register && name ? register(name, rules) : {}
  return (
    <div className={className}>
      <input
        type={type}
        className={classNameInput}
        placeholder={placeholder}
        {...registerResult}
        autoComplete={autoComplete}
      />
      <div className={classNameError}>{errorMessage}</div>
    </div>
  )
}
