import React from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Intl, { defaultLocale } from '../i18n';

class MyApp extends React.Component<AppProps> {
  constructor(props: AppProps) {
    super(props);
    Intl.setLocale(props.router.locale || defaultLocale);
  }

  setLocale = (locale: string) => {
    Intl.setLocale(locale);
    this.forceUpdate();
  };

  render() {
    const { Component, pageProps } = this.props;
    return <Component setLocale={this.setLocale} {...pageProps} />;
  }
}

export default MyApp;
