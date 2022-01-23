import { useState } from 'react';
import { Button } from '@components/ui';
import Link from '../Link';
import { IoCheckmarkCircle } from 'react-icons/io5';

export const HeroCTA = () => {
  const [email, setEmail] = useState('');
  const [showConfirmation, setConfirmation] = useState(false);
  const [isSubmitting, setSubmitting] = useState(false);
  const onSubmit = () => {
    setSubmitting(true);
    fetch('/api/collect', {
      method: 'POST',
      body: JSON.stringify({ email }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        setSubmitting(false);
        setConfirmation(true);
        setTimeout(() => {
          setConfirmation(false);
        }, 4000);
        setEmail('');
      })
      .catch((err) => {
        setSubmitting(false);
        setEmail('');
      });
  };
  return (
    <>
      {showConfirmation ? (
        <div className="p-3 my-6">
          <div className="flex flex-row justify-center items-center gap-2">
            <h2 className="text-2xl text-gray-200 max-w-[450px] my-2">
              Спасибо
            </h2>
            <IoCheckmarkCircle size="40" />
          </div>
          <p className="text-gray-200 max-w-[450px] mx-auto my-2">
            Мы оповестим вас о запуске платформы.
          </p>
        </div>
      ) : (
        <form
          className="mt-8"
          onSubmit={(ev) => {
            ev.preventDefault();
            onSubmit();
          }}
        >
          <div className="text-2xl text-gray-200 max-w-[450px] mx-auto my-2">
            Заинтересованы?
          </div>
          <div className="text-gray-200 max-w-[450px] mx-auto my-2">
            Оставьте имя и номер телефона. Мы свяжемся с Вами при запуске и
            предоставим месяц бесплатного пользования!
          </div>
          <div className="flex flex-col sm:flex-row gap-2 justify-center">
            <input
              className="border p-3 rounded-md min-w-[300px] focus:outline outline-accent1 text-typography bg-white"
              type="text"
              placeholder="Номер телефона - Ваше имя"
              value={email}
              onChange={(ev) => setEmail(ev.target.value)}
            />
            <Button
              //className="bg-accent2 text-white px-4 py-3 rounded-md"
              type="submit"
              disabled={isSubmitting}
            >
              Отправить
            </Button>
          </div>
        </form>
      )}
    </>
  );
};

export const HeroCTARegister = () => (
  <div className="mt-8">
    <div className="text-2xl text-gray-200 max-w-[450px] mx-auto my-2">
      Начни продажи онлайн
    </div>
    <div className="text-gray-200 max-w-[450px] mx-auto my-2">
      Регистрируйся сейчас и мы предоставим месяц бесплатного пользования!
    </div>
    <div className="flex flex-col sm:flex-row gap-2 justify-center">
      <Link href="/register">
        <Button type="button">Регистрация</Button>
      </Link>
    </div>
  </div>
);
