import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { IntlProvider } from 'react-intl';

const locales = ['de', 'dk']; // The wished translations

// The git18n script will generate a .locales folder with the translations
const messages = locales.reduce((acc, cur) => {
  try {
    acc[cur] = require(`../.locales/${cur}.json`);
  } catch {}
  return acc;
}, {} as Record<string, {}>);

function MyApp({ Component, pageProps }: AppProps) {
  const { locale = 'en' } = useRouter();

  return (
    <IntlProvider locale={locale} defaultLocale="en" messages={messages[locale]}>
      <Component {...pageProps} />
    </IntlProvider>
  );
}
export default MyApp;
