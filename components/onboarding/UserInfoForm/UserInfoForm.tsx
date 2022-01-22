import { OnboardingFormProps } from '@components/onboarding/types'
import { Button, Input } from '@components/ui'
import { Field, useFormik } from 'formik'

export const UserInfoForm = ({ onBack, onNext }: OnboardingFormProps) => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    onSubmit: (values) => {
      console.log({ values })
      if (onNext) onNext()
    },
  })
  const { values, handleChange } = formik
  return (
    <div className="max-w-[450px] mx-auto">
      <form
        className="grid grid-cols-12 grid-flow-row gap-3 p-8"
        onSubmit={formik.handleSubmit}
      >
        <div className="col-span-12 text-center">
          <h1 className="md:text-3xl text-xl">Информация пользователя</h1>
        </div>
        <div className="col-span-6">
          <label>Имя</label>
          <Input
            id="firstName"
            name="firstName"
            type="text"
            onChange={handleChange}
            value={values.firstName}
          />
        </div>
        <div className="col-span-6">
          <label>Фамилия</label>
          <Input
            id="lastName"
            name="lastName"
            type="text"
            onChange={handleChange}
            value={values.lastName}
          />
        </div>
        <div className="col-span-6">
          <label>Номер телефона</label>
          <Input
            id="phone"
            name="phone"
            type="text"
            onChange={handleChange}
            value={values.phone}
          />
        </div>
        <div className="col-span-6">
          <label>Электронная почта</label>
          <Input
            id="email"
            name="email"
            type="text"
            onChange={handleChange}
            value={values.email}
          />
        </div>
        <div className="col-span-12">
          <label>Пароль</label>
          <Input
            id="password"
            name="password"
            type="text"
            onChange={handleChange}
            value={values.password}
          />
        </div>
        <div className="col-span-12">
          <label>Подтвердите пароль</label>
          <Input
            id="confirmPassword"
            name="confirmPassword"
            type="text"
            onChange={handleChange}
            value={values.confirmPassword}
          />
        </div>
        <div className="flex flex-col md:flex-row md:justify-between text-center col-span-12">
          {!onBack && <div />}
          {onBack && (
            <Button variant="ghost" onClick={onBack} tabIndex={-1}>
              Назад
            </Button>
          )}
          <Button type="submit">Далее</Button>
        </div>
      </form>
    </div>
  )
}
