import { OnboardingFormProps } from '@components/onboarding/types';
import { Button, Input } from '@components/ui';
import { Field, useFormik } from 'formik';
import { useOnboarding } from '../context';
import { userInfoValidationSchema } from './validationSchema';
import s from '../Onboarding.module.css';
import { useEffect } from 'react';

export const UserInfoForm = ({ onBack, onNext }: OnboardingFormProps) => {
  const { userInfo, setUserInfo, setCompleteUserInfo } = useOnboarding();
  const formik = useFormik({
    validationSchema: userInfoValidationSchema,
    initialValues: {
      ...userInfo,
    },
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: (values) => {
      setUserInfo(values);
      setCompleteUserInfo(true);
      if (onNext) onNext();
    },
  });
  const { values, setFieldValue, errors } = formik;
  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      setCompleteUserInfo(false);
    }
  }, [errors, setCompleteUserInfo]);
  const handleChange = (field: string) => (val: any) => {
    setFieldValue(field, val);
  };
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
            onChange={handleChange('firstName')}
            value={values.firstName}
          />
          <span className={s.validationError}>{errors.firstName}</span>
        </div>
        <div className="col-span-6">
          <label>Фамилия</label>
          <Input
            id="lastName"
            name="lastName"
            type="text"
            onChange={handleChange('lastName')}
            value={values.lastName}
          />
          <span className={s.validationError}>{errors.lastName}</span>
        </div>
        <div className="col-span-6">
          <label>Номер телефона</label>
          <Input
            id="phone"
            name="phone"
            type="text"
            onChange={handleChange('phone')}
            value={values.phone}
          />
          <span className={s.validationError}>{errors.phone}</span>
        </div>
        <div className="col-span-6">
          <label>Электронная почта</label>
          <Input
            id="email"
            name="email"
            type="text"
            onChange={handleChange('email')}
            value={values.email}
          />
          <span className={s.validationError}>{errors.email}</span>
        </div>
        <div className="col-span-12">
          <label>Пароль</label>
          <Input
            id="password"
            name="password"
            type="password"
            onChange={handleChange('password')}
            value={values.password}
          />
          <span className={s.validationError}>{errors.password}</span>
        </div>
        <div className="col-span-12">
          <label>Подтвердите пароль</label>
          <Input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            onChange={handleChange('confirmPassword')}
            value={values.confirmPassword}
          />
          <span className={s.validationError}>{errors.confirmPassword}</span>
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
  );
};
