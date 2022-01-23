import '@assets/main.css';
import '@assets/chrome-bug.css';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    document.body.classList?.remove('loading');
  }, []);

  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
