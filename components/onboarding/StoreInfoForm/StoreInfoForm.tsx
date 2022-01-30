import { OnboardingFormProps } from '@components/onboarding/types';
import { Button, Input } from '@components/ui';
import { useFormik } from 'formik';
import { useOnboarding } from '../context';
import { storeInfoValidationSchema } from './validationSchema';
import s from '../Onboarding.module.css';
import { useEffect } from 'react';

export const StoreInfoForm = ({ onBack, onNext }: OnboardingFormProps) => {
  const { storeInfo, setStoreInfo, setCompleteStoreInfo } = useOnboarding();
  const formik = useFormik({
    initialValues: {
      ...storeInfo,
    },
    validationSchema: storeInfoValidationSchema,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: (values) => {
      setStoreInfo(values);
      setCompleteStoreInfo(true);
      if (onNext) onNext();
    },
  });
  const { values, setFieldValue, errors } = formik;
  const handleChange = (field: string) => (val: any) => {
    setFieldValue(field, val);
  };
  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      setCompleteStoreInfo(false);
    }
  }, [errors, setCompleteStoreInfo]);
  return (
    <div className="max-w-[450px] mx-auto">
      <form
        className="grid grid-cols-12 grid-flow-row gap-3 p-8"
        onSubmit={formik.handleSubmit}
      >
        <div className="col-span-12 text-center">
          <h1 className="md:text-3xl text-xl">О магазине</h1>
        </div>
        <div className="col-span-12">
          <label>Название магазина</label>
          <Input
            id="name"
            name="name"
            type="text"
            onChange={handleChange('name')}
            value={values.name}
          />
          <span className={s.validationError}>{errors.name}</span>
        </div>
        <div className="col-span-12">
          <label>Название домена</label>
          <Input
            className="flex-grow"
            id="domain"
            name="domain"
            type="text"
            onChange={handleChange('domain')}
            value={values.domain}
          />
          <div>{values.domain || 'ваше-название'}.shopper.kg</div>
          <span className={s.validationError}>{errors.domain}</span>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between text-center col-span-12 gap-2">
          {!onBack && <span></span>}
          {onBack && (
            <Button
              variant="ghost"
              onClick={onBack}
              tabIndex={-1}
              type="button"
            >
              Назад
            </Button>
          )}
          <Button type="submit">Далее</Button>
        </div>
      </form>
    </div>
  );
};
