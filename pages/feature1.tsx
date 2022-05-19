import type { NextPage } from 'next';
import { FormattedMessage } from 'react-intl';
import { LanguageSwitch } from '../components/LanguageSwitch';

type Props = {
  locale: string;
  locales: string[];
  setLocale: (locale: string) => void;
};

const Feature1: NextPage<Props> = ({ locale, locales, setLocale }) => {
  return (
    <div>
      <LanguageSwitch locale={locale} locales={locales} setLocale={setLocale} />
      <h1>
        <FormattedMessage defaultMessage="A new feature page being added." />
      </h1>
      <h2>
        <FormattedMessage defaultMessage="This is a simple sub heading!" />
      </h2>
      <p>
        <FormattedMessage defaultMessage="And this is some body text." />
      </p>
      <p>
        <FormattedMessage defaultMessage="And this is some body text." id="my-custom-id" />
      </p>
      <p>
        <FormattedMessage defaultMessage="Another custom id text..." />
      </p>
    </div>
  );
};

export default Feature1;
