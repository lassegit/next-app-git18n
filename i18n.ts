import { createIntl, createIntlCache } from '@formatjs/intl';

const cache = createIntlCache();
export const defaultLocale = 'en';

export const locales = ['en', 'dk', 'de'];

class Intl {
  locale: string | undefined = undefined;

  setLocale(locale: string) {
    if (!locales.includes(locale)) {
      throw new Error(`${locale} does not exists in ${locales}`);
    }

    this.locale = locale;
  }

  get t() {
    const locale = this.locale || defaultLocale;
    let messages = {};
    try {
      messages = require(`./.locales/${locale}.json`);
    } catch {}

    return createIntl({ locale, messages, defaultLocale }, cache);
  }
}

export default new Intl();
