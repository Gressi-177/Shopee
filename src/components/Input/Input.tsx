import { UseFormRegister, type RegisterOptions } from 'react-hook-form'

interface Props {
  type: React.HTMLInputTypeAttribute
  errorMessage?: string
  placeholder?: string
  className?: string
  name: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>
  rules?: RegisterOptions
}

export default function Input({ name, register, type, className, placeholder, errorMessage, rules }: Props) {
  return (
    <div className={className}>
      <input
        type={type}
        className='w-full p-3 outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm'
        placeholder={placeholder}
        {...register(name, rules)}
      />
      <div className='mt-1 text-red-600 text-sm min-h-[1.25rem]'>{errorMessage}</div>
    </div>
  )
}
