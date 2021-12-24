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
        <link rel="icon" href="/favicon.ico" />
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
