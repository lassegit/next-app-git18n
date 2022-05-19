import type { NextPage } from 'next';
import { useIntl } from 'react-intl';

const Test: NextPage = () => {
  const { formatMessage } = useIntl();
  return <div>{formatMessage({ defaultMessage: 'Extraction from alias function.' })}</div>;
};

export default Test;
