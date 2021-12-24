import type { NextPage } from 'next';
import Head from 'next/head';
import { AboutProduct } from 'src/public/AboutProduct';
import { Footer } from 'src/public/Footer';
import { Hero } from 'src/public/Hero';
import { InventoryManagement } from 'src/public/InventoryManagement';

const Home: NextPage = function () {
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
        <Hero />
        <AboutProduct />
        <InventoryManagement />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
