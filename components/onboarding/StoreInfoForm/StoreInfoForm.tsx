import { OnboardingFormProps } from '@components/onboarding/types';
import { Button, Input } from '@components/ui';
import { useFormik } from 'formik';

export const StoreInfoForm = ({ onBack, onNext }: OnboardingFormProps) => {
  const formik = useFormik({
    initialValues: {
      name: '',
      subdomain: '',
    },
    onSubmit: (values) => {
      if (onNext) onNext();
    },
  });
  const { values, handleChange } = formik;
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
            onChange={handleChange}
            value={values.name}
          />
        </div>
        <div className="col-span-12">
          <label>Название домена</label>
          <Input
            className="flex-grow"
            id="subdomain"
            name="subdomain"
            type="text"
            onChange={handleChange}
            value={values.subdomain}
          />
          <span>{values.subdomain || 'ваше-название'}.shopper.kg</span>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between text-center col-span-12 gap-2">
          {!onBack && <span></span>}
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
