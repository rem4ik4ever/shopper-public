import type { NextPage } from 'next';
import Head from 'next/head';
import { useRef } from 'react';
import { AboutProduct } from 'src/public/AboutProduct';
import { Footer } from 'src/public/Footer';
import { Hero } from 'src/public/Hero';
import { InventoryManagement } from 'src/public/InventoryManagement';

const Home: NextPage = function () {
  const scrollOptions: ScrollIntoViewOptions = {
    behavior: 'smooth',
    block: 'end',
    inline: 'nearest',
  };

  const aboutPlatformRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const managementRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const onNav = (section: string) => (ev: MouseEvent) => {
    ev.preventDefault();
    switch (section) {
      case 'platform':
        console.log({ aboutPlatformRef });
        if (aboutPlatformRef.current) {
          const elm = aboutPlatformRef.current as HTMLDivElement;
          elm.scrollIntoView(scrollOptions);
        }
        break;
      case 'management':
        if (managementRef.current) {
          const elm = managementRef.current as HTMLDivElement;
          elm.scrollIntoView(scrollOptions);
        }
        break;
      default:
        break;
    }
  };
  return (
    <div>
      <Head>
        <title>Shopper | Создай онлайн магазин</title>
        <meta
          name="description"
          content="Открой бесплатный онлайн магазин за 5 минут"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <main>
        <Hero onNav={onNav} />
        <div ref={aboutPlatformRef}>
          <AboutProduct />
        </div>
        <div ref={managementRef}>
          <InventoryManagement />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
