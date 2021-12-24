import { Logo } from 'src/public/Logo';

export const Footer = () => (
  <footer className="bg-accent1">
    <div className="container mx-auto p-8">
      <div className="flex sm:flex-row flex-col">
        <div className="flex flex-col justify-center items-center">
          <div className="flex justify-center border-b border-white py-1 px-3 w-full">
            <Logo size="30" />
            <span className="text-xl ml-1 text-white">Shopper</span>
          </div>
          <span className="text-white">Открой онлайн магазин</span>
        </div>
      </div>
      <div className="text-center text-white">
        © 2021 - Shopper - Сделано c ❤ для Кыргызстана
      </div>
    </div>
  </footer>
);
