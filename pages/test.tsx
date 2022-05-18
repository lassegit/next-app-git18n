import type { NextPage } from 'next';
import { useIntl } from 'react-intl';

type Props = {
  locale: string;
  locales: string[];
  setLocale: (locale: string) => void;
};

const Home: NextPage<Props> = ({ locale, locales, setLocale }) => {
  const { formatMessage } = useIntl();
  return <div>{formatMessage({ defaultMessage: 'Extraction from alias function.' })}</div>;
};

export default Home;
