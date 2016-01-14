import React from 'react';
import { defineMessages, FormattedMessage } from 'react-intl';

const messages = defineMessages({ // i18n strings for this component - https://goo.gl/abldHf
  title: {
    id: 'about.title',
    defaultMessage: 'About Page'
  }
});

export const Msg = (props) => <FormattedMessage { ...messages[ props.s ] } values={ props.values }/>;
