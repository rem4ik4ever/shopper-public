import { Logo, Logo2 } from 'src/public/Logo';

export const Footer = () => (
  <footer className="bg-accent1">
    <div className="container mx-auto p-8 flex flex-col items-center">
      <div className="flex sm:flex-row flex-col mb-8">
        <div className="flex flex-col justify-center items-center">
          <div className="flex justify-center border-b border-white py-1 px-3 w-full">
            <Logo2 size="30" />
            <span className="text-xl ml-1 text-white">Shopper</span>
          </div>
          <span className="text-white">Открой онлайн магазин</span>
        </div>
      </div>
      <div className="text-center text-white">
        © 2021 - Shopper - Сделано c{' '}
        <span className="text-red-400 mx-1">❤</span> для Кыргызстана
      </div>
    </div>
  </footer>
);
