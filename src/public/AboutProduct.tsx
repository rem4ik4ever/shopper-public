import Image from 'next/image';
import mobileCheckout from 'public/assets/mobile-checkout.png';
import mobileProductPage from 'public/assets/mobile-product-page.png';
import { AngleTransition } from 'src/public/AngleTransition';
export const AboutProduct = () => (
  <section className="bg-gray-100 h-screen flex items-center overflow-hidden">
    <div className="container mx-auto pt-8 p-3 sm:text-left text-center flex gap-8 h-full sm:justify-center sm:flex-row flex-col">
      <div className="flex flex-col justify-center w-full sm:w-2/5">
        <h2 className="text-2xl sm:text-4xl font-semibold text-typography py-3">
          O платформе
        </h2>
        <p className="sm:text-xl">
          Забудьте о программистах, серверах и других проблемах связанных с
          запуском собственного онлайн магазина. Сфокусируйтесь на важном:
          <strong className="ml-1">продажи</strong>.
        </p>
        <p className="sm:text-xl mt-3">
          <span className="font-semibold text-typography">
            Мы предоставляем:
          </span>
          <ul>
            <li>- Систему менеджмента инвентаря</li>
            <li>
              - Готовую платформу для создания собственного онлайн магазина за
              10 минут
            </li>
            <li>
              - Персональный домен
              <span className="text-accent1 ml-2">
                ваше-название.shopper.kg
              </span>
            </li>
            <li>
              - Систему менеджмента склада - Оформление и отслеживание онлайн
              заказов
            </li>
          </ul>
        </p>
      </div>
      <div className="hidden sm:flex items-center">
        <div className="border rounded-md shadow-xl overflow-hidden">
          <Image
            src={mobileProductPage}
            alt="mobile product view"
            layout="fixed"
            width={326}
            height={668}
          />
        </div>
        <div className="border rounded-md shadow-xl overflow-hidden -translate-x-10">
          <Image
            src={mobileCheckout}
            alt="mobile checkout"
            layout="fixed"
            width={294}
            height={602}
          />
        </div>
      </div>
      <div className="flex sm:hidden items-center h-full">
        <div className="border rounded-md shadow-xl overflow-hidden translate-x-5">
          <Image
            src={mobileProductPage}
            alt="mobile product view"
            layout="fixed"
            width={196}
            height={423}
          />
        </div>
        <div className="border rounded-md shadow-xl overflow-hidden -translate-x-5">
          <Image
            src={mobileCheckout}
            alt="mobile checkout"
            layout="fixed"
            width={150}
            height={324}
          />
        </div>
      </div>
    </div>
  </section>
);
