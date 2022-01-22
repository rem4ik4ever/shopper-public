import * as Yup from 'yup';

export const userInfoValidationSchema = Yup.object({
  firstName: Yup.string().required('Введите имя'),
  lastName: Yup.string().required('Введите имя'),
  phone: Yup.string().required('Введите номер телефона'),
  email: Yup.string()
    .email('Неправильный адрес')
    .required('Введите электронный адрес'),
  password: Yup.string().required('Введите пароль'),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Пароли должны совпадать'
  ),
});
