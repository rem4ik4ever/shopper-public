import Image from 'next/image';
import dashboardImg from '../../public/assets/dashboard.png';
import Link from '../Link';
import { Logo2 } from './Logo';
import { HeroCTA, HeroCTARegister } from './HeroCTA';
import { featureFlag } from '@utils/env';

interface HeroProps {
  onNav: (name: string) => (ev: any) => void;
}

export const Hero = ({ onNav }: HeroProps) => {
  return (
    <section className="text-typography p-3 h-[100vh] overflow-hidden text-white relative bg-accent1">
      <header className="sticky top-0 p-3 container mx-auto flex justify-between items-center text-lg">
        <Link href="/" passHref>
          <div className="flex text-white items-center">
            {/*<Logo size="30" />*/}
            <Logo2 size="30" />
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
            вашего онлайн магазина
          </h1>
          {featureFlag(String(process.env.NEXT_PUBLIC_ENABLE_REGISTRATION)) ? (
            <HeroCTARegister />
          ) : (
            <HeroCTA />
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
