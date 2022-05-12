import React from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { IntlProvider } from 'react-intl';

export const locales = ['de']; // The wished translations

// The git18n script will generate a .locales folder with the translations
const messages = locales.reduce((acc, cur) => {
  try {
    acc[cur] = require(`../.locales/${cur}.json`);
  } catch {}
  return acc;
}, {} as Record<string, {}>);

function MyApp({ Component, pageProps }: AppProps) {
  const [locale, setLocale] = React.useState('en');
  const selectLocales = [...locales, 'en'];

  return (
    <IntlProvider locale={locale} defaultLocale="en" messages={messages[locale]}>
      <Component locale={locale} locales={selectLocales} setLocale={setLocale} {...pageProps} />
    </IntlProvider>
  );
}
export default MyApp;
