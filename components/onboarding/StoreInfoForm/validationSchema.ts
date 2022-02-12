import * as Yup from 'yup';

export const storeInfoValidationSchema = Yup.object({
  domain: Yup.string()
    .min(3, 'Минимум 3 символа')
    .max(120, 'Максимум 120 символов')
    .matches(
      /^[a-z][a-z0-9]*(?:-[a-z0-9]+)*$/gm,
      'Только маленькие буквы латинского алфавита формат moi-magazin'
    )
    .required('Введите название домена'),
  name: Yup.string().min(3).max(120).required('Введите название магазина'),
});
