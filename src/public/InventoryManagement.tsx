import { useEffect, useState } from 'react';
import Image from 'next/image';
import productsPageSrc from 'public/assets/products.png';
import productPageSrc from 'public/assets/product.png';
import ordersPageSrc from 'public/assets/orders.png';

export const InventoryManagement = () => {
  const [imgIdx, setImg] = useState(0);
  const imgs = [productsPageSrc, productPageSrc, ordersPageSrc];
  useEffect(() => {
    const interval = setInterval(() => {
      const next = imgIdx + 1 === 3 ? 0 : imgIdx + 1;
      setImg(next);
    }, 3000);

    return () => clearInterval(interval);
  }, [imgIdx]);
  return (
    <section className="bg-gray-100 sm:h-screen h-[80vh] flex items-center overflow-hidden">
      <div className="container mx-auto pt-8 p-3 sm:text-left text-center flex gap-8 h-full sm:justify-center sm:flex-row sm:items-center flex-col">
        <div className="w-full order-2 sm:order-1">
          <Image
            src={imgs[imgIdx]}
            alt="dashboard product"
            layout="responsive"
            width={16}
            height={9}
          />
        </div>
        <div className="flex flex-col justify-center w-full sm:w-2/5 sm:text-right sm:min-w-[500px] order-1 sm:order-2">
          <h2 className="text-2xl sm:text-4xl font-semibold text-typography py-3">
            Менеджмент
          </h2>
          <p className="sm:text-xl">
            <span className="text-accent1">Shopper</span> предоставит вам
            абсолютный контроль и мониторинг вашего инвентаря. Отслеживание
            заказов и статусов оплаты. Вы больше никогда не потеряете из виду
            заказы.
          </p>
          <div className="sm:text-xl mt-3">
            <span className="font-semibold text-typography">Управляйте</span>
            <ul>
              <li>Списком товаров и вариантами (цвета, размеры ..)</li>
              <li>Заказами и списком клиентов</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
