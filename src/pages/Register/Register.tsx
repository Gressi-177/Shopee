import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { rules } from 'src/utils/rules'

interface FormData {
  email: string
  password: string
  confirm_password: string
}

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>()

  const onsubmit = handleSubmit((data) => {
    console.log(data)
  })
  return (
    <div className='bg-orange'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-5 py-12 lg:py-32 lg:pr-10'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form className='p-10 rounded shadow-sm bg-white' onSubmit={onsubmit} noValidate>
              <div className='text-2xl'>Đăng ký</div>
              <div className='mt-8'>
                <input
                  type='email'
                  className='w-full p-3 outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm'
                  placeholder='Email'
                  {...register('email', rules.email)}
                />
                <div className='mt-1 text-red-600 text-sm min-h-[1.25rem]'>{errors.email?.message}</div>
              </div>
              <div className='mt-2'>
                <input
                  type='password'
                  className='w-full p-3 outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm'
                  placeholder='Password'
                  {...register('password', rules.password)}
                />
                <div className='mt-1 text-red-600 text-sm min-h-[1.25rem]'>{errors.password?.message}</div>
              </div>
              <div className='mt-2'>
                <input
                  type='password'
                  className='w-full p-3 outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm'
                  placeholder='Confirm Password'
                  {...register('confirm_password', rules.confirm_password)}
                />
                <div className='mt-1 text-red-600 text-sm min-h-[1.25rem]'>{errors.confirm_password?.message}</div>
              </div>
              <div className='mt-2'>
                <button className='w-full uppercase py-4 px-2 text-center bg-red-500 text-white text-sm hover:bg-red-600'>
                  Đăng ký
                </button>
              </div>
              <div className='flex justify-center mt-8'>
                <span className='text-gray-400'>Bạn đã có tài khoản?</span>
                <Link to={'/login'} className='text-red-400 ml-1'>
                  Đăng nhập
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}