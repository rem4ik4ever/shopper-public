import * as Yup from 'yup';

export const storeInfoValidationSchema = Yup.object({
  domain: Yup.string().min(3).max(120).required('Введите название домена'),
  name: Yup.string().min(3).max(120).required('Введите название магазина'),
});
