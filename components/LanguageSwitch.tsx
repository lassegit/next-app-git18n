import React from 'react';
import styles from '../styles/Home.module.css';

type Props = {
  locale: string;
  locales: string[];
  setLocale: (locale: string) => void;
};

export function LanguageSwitch({ locale, locales, setLocale }: Props) {
  return (
    <div className={styles.languageSelector}>
      <select value={locale} onChange={(e) => setLocale(e.target.value)}>
        {locales.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}
