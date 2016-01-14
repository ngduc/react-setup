import React from 'react';
import { defineMessages, FormattedMessage } from 'react-intl';

const messages = defineMessages({  // i18n strings for this component - https://goo.gl/abldHf
  welcome: {
    id: 'home.welcome',
    defaultMessage: 'Welcome to {page}'
  },
  today: {
    id: 'home.today',
    defaultMessage: '"Locale demo" - Today\'s'
  }
});

export const Msg = (props) => <FormattedMessage { ...messages[ props.s ] } values={ props.values }/>;
