import { Button } from '@components/ui';

export const DemoCTA = () => {
  return (
    <div className="">
      <div className="bg-accent1 text-white p-8 flex flex-col space-between items-center justify-between relative overflow-hidden">
        <div className="flex flex-col lg:ml-14 xl:ml-28 max-w-sm lg:max-w-xl z-10">
          <h4 className="text-4xl text-center md:text-left font-bold text-white md:pb-2">
            Как же выглядит Ваш онлайн магазин?
          </h4>
          <p className="text-center md:text-left text-white opacity-70 md:pb-6">
            Вы можете посмотреть на демо версию магазина, где пользователь может
            найти товары индивидуально или по категориям; поместить выбранное в
            корзину и оформить заказ.
          </p>
          <p className="text-xs text-red-200 hidden md:block">
            <a href="https://demo.shopper.kg">demo.shopper.kg</a>
          </p>
        </div>

        <div className="pt-8 md:pt-0 z-10 text-center">
          <a href="https://demo.shopper.kg" target="_blank" rel="noreferrer">
            <Button>Демо</Button>
          </a>
        </div>

        <p className="pt-8 text-xs block md:hidden z-10 text-white">
          <a href="https://demo.shopper.kg">demo.shopper.kg</a>
        </p>

        <div className="absolute bg-accent1 opacity-60 w-96 h-96 -top-10 -right-16 md:w-[800px] md:h-[800px] md:left-[45%] md:top-[-150%] rounded-full shadow-2xl z-0"></div>
      </div>
    </div>
  );
};
