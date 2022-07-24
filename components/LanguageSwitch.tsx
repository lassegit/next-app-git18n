import React from 'react';
import styles from '../styles/Home.module.css';
import Intl, { locales } from '../i18n';

type Props = {
  setLocale: (locale: string) => void;
};

export function LanguageSwitch({ setLocale }: Props) {
  return (
    <div className={styles.languageSelector}>
      <select value={Intl.locale} onChange={(e) => setLocale(e.target.value)}>
        {locales.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}
