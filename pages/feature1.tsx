import type { NextPage } from 'next';
import { FormattedMessage } from 'react-intl';

const Feature1: NextPage = () => {
  return (
    <div>
      <h1>
        <FormattedMessage defaultMessage="A new feature page being added." />
      </h1>
      <h2>
        <FormattedMessage defaultMessage="This is a simple sub heading!" />
      </h2>
      <p>
        <FormattedMessage defaultMessage="And this is some body text." />
      </p>
    </div>
  );
};

export default Feature1;
