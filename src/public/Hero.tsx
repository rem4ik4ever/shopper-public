import Image from 'next/image';
import { AngleTransition } from 'src/public/AngleTransition';
import dashboardImg from '../../public/assets/dashboard.png';
import Link from '../Link';
import { Logo } from './Logo';

interface HeroProps {
  onNav: (name: string) => (ev: any) => void;
}
export const Hero = ({ onNav }: HeroProps) => (
  <section className="text-typography p-3 h-[100vh] overflow-hidden text-white relative bg-accent1">
    <header className="sticky top-0 p-3 container mx-auto flex justify-between items-center text-lg">
      <Link href="/" passHref>
        <div className="flex text-white items-center">
          <Logo size="30" />
          <span className="text-xl ml-1">Shopper</span>
        </div>
      </Link>
      <nav className="text-white gap-4 hidden sm:flex">
        <Link href="/#" onClick={onNav('platform')}>
          О платформе
        </Link>
        <Link href="/#" onClick={onNav('management')}>
          Менеджмент
        </Link>
        <Link href="/contact">Контакты</Link>
      </nav>
    </header>
    <div className="container mx-auto flex flex-col justify-center">
      <div className="mt-8 mb-8 text-center">
        <h1 className="text-3xl sm:text-6xl font-semibold">Платформа для</h1>
        <h1 className="text-3xl sm:text-6xl font-semibold">
          твоего онлайн бизнеса
        </h1>
        <form className="mt-8">
          <div className="flex flex-col sm:flex-row gap-2 justify-center">
            <input
              className="border p-3 rounded-md min-w-[300px] focus:outline outline-accent1 text-typography"
              type="email"
              placeholder="Электронная почта"
            />
            <button
              className="bg-accent2 text-white px-4 py-3 rounded-md"
              type="submit"
            >
              Попробовать
            </button>
          </div>
          <div className="text-sm text-gray-200 max-w-[450px] mx-auto mt-1">
            Попробуйте Shopper бесплатно первые 14 дней, без оплаты.
          </div>
        </form>
      </div>
      <Image
        className="border rounded-md shadow-xl overflow-hidden"
        src={dashboardImg}
        alt="product dashboard"
      />
    </div>
  </section>
);

Hero.defaultProps = {
  onNav: () => {},
};
