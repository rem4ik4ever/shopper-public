import { useState } from 'react';
import Image from 'next/image';
import dashboardImg from '../../public/assets/dashboard.png';
import Link from '../Link';
import { Logo } from './Logo';

interface HeroProps {
  onNav: (name: string) => (ev: any) => void;
}
export const Hero = ({ onNav }: HeroProps) => {
  const [email, setEmail] = useState('');
  const [showConfirmation, setConfirmation] = useState(false);
  const [isSubmitting, setSubmitting] = useState(false);
  const onSubmit = () => {
    console.log({ data: email });
    setSubmitting(true);
    fetch('/api/collect', {
      method: 'POST',
      body: JSON.stringify({ email }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        console.log(res);
        setSubmitting(false);
        setConfirmation(true);
        setTimeout(() => {
          setConfirmation(false);
        }, 4000);
        setEmail('');
      })
      .catch((err) => {
        console.log(err);
        setSubmitting(false);
        setEmail('');
      });
  };
  return (
    <section className="text-typography p-3 h-[100vh] overflow-hidden text-white relative bg-accent1">
      <header className="sticky top-0 p-3 container mx-auto flex justify-between items-center text-lg">
        <Link href="/" passHref>
          <div className="flex text-white items-center">
            <Logo size="30" />
            <span className="text-xl ml-1">Shopper</span>
          </div>
        </Link>
        <nav className="text-white gap-4 hidden sm:flex items-center">
          <a href="https://demo.shopper.kg" target="_blank" rel="noreferrer">
            Демо магазин
          </a>
          <Link href="/#" onClick={onNav('platform')}>
            О платформе
          </Link>
          <Link href="/#" onClick={onNav('management')}>
            Менеджмент
          </Link>
          <a
            className="border-white border px-3 py-2 rounded-md "
            href="https://forms.gle/PL1B3cU7R7t8trHN9"
            target="_blank"
            rel="noreferrer"
          >
            Есть вопросы?
          </a>
        </nav>
      </header>
      <div className="container mx-auto flex flex-col justify-center">
        <div className="mt-8 mb-8 text-center">
          <h1 className="text-3xl sm:text-6xl font-semibold">Платформа для</h1>
          <h1 className="text-3xl sm:text-6xl font-semibold">
            твоего онлайн бизнеса
          </h1>
          {showConfirmation ? (
            <div className="p-3 my-6">
              <h2 className="text-2xl text-gray-200 max-w-[450px] mx-auto my-2">
                Спасибо ✅
              </h2>
              <p className="text-gray-200 max-w-[450px] mx-auto my-2">
                Мы оповестим вас о запуске раннего доступа.
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
                Оставьте своё имя и номер телефона и мы свяжемся с вами при
                запуске плюс месяц бесплатного пользования!
              </div>
              <div className="flex flex-col sm:flex-row gap-2 justify-center">
                <input
                  className="border p-3 rounded-md min-w-[300px] focus:outline outline-accent1 text-typography"
                  type="text"
                  placeholder="Номер телефона - Ваше имя"
                  value={email}
                  onChange={(ev) => setEmail(ev.target.value)}
                />
                <button
                  className="bg-accent2 text-white px-4 py-3 rounded-md"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Отправить
                </button>
              </div>
            </form>
          )}
        </div>
        <Image
          className="border rounded-md shadow-xl overflow-hidden"
          src={dashboardImg}
          alt="product dashboard"
        />
      </div>
    </section>
  );
};

Hero.defaultProps = {
  onNav: () => {},
};
