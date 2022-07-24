import { createIntl, createIntlCache } from '@formatjs/intl';

const cache = createIntlCache();

export const defaultLocale = 'en';
export const locales = ['en', 'de'];

const combinedMessages = locales.reduce((acc, curr) => {
  try {
    acc[curr] = require(`./.locales/${curr}.json`);
  } catch {}
  return acc;
}, {} as Record<string, {}>);

class Intl {
  locale: string | undefined = undefined;

  setLocale(locale: string) {
    this.locale = locale;
  }

  get t() {
    const locale = this.locale || defaultLocale;
    const messages = combinedMessages[locale];
    return createIntl({ locale, messages, defaultLocale }, cache);
  }
}

export default new Intl();
