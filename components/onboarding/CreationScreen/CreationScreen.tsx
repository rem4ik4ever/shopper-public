import { Button, LoadingDots } from '@components/ui'
import { useState } from 'react'

export const CreationScreen = () => {
  const [status, setStatus] = useState('')
  if (status === 'success') {
    return (
      <div className="flex flex-col items-center p-8">
        <h1 className="text-4xl my-6">Магазин готов!</h1>
        <a href="http://localhost:3000/admin">
          <button className="border rounded-md px-6 py-3">
            Портал продавца
          </button>
        </a>
      </div>
    )
  }
  if (status === 'error') {
    return (
      <div className="flex flex-col items-center p-8">
        <h1 className="text-4xl my-6">Что-то пошло не так.</h1>
        <p>
          Пожалуйста попробуйте еще раз или обратитесь к администрации сайта за
          помощью
        </p>
      </div>
    )
  }
  return (
    <div className="flex flex-col items-center p-8">
      <h1 className="text-4xl mt-6">Создаем ваш магазин!</h1>
      <div>
        <LoadingDots />
      </div>
    </div>
  )
}
