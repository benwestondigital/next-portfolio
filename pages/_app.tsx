import { Layout } from '@/components/Layout';
import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Layout>
        <Component {...pageProps} />
    </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
