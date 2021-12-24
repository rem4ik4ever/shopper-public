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
          Забудте о программистах, серверах и других проблемах запуска онлайн
          магазина. Сфокусируйтесь на важном: продвижении своего бизнеса и
          продаже высококачественного продукта.
        </p>
        <p className="sm:text-xl mt-3">
          <span className="font-semibold text-typography">
            Мы предоставляем:
          </span>
          <ul>
            <li>- Систему менеджмента инвентаря</li>
            <li>
              - Открываем ваш онлайн магазин и даем вам персональный адрес
              <span className="text-accent1 ml-2">
                ваще-название.shopper.kg
              </span>
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
