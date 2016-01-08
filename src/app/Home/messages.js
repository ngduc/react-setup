import React from 'react';
import { defineMessages, FormattedMessage } from 'react-intl';

const messages = defineMessages({  // i18n strings for this component - https://goo.gl/abldHf
  title: {
    id: 'home.title',
    defaultMessage: 'Home Page'
  },
  today: {
    id: 'home.today',
    defaultMessage: '"Locale demo" - Today\'s'
  }
});

export const Msg = (props) => <FormattedMessage { ...messages[ props.s ] }/>;
