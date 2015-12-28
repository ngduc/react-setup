import React from 'react';
import { injectIntl, defineMessages, FormattedMessage } from 'react-intl';

// i18n strings for this component - https://goo.gl/abldHf
const messages = defineMessages({
  title: {
    id: 'home.title',
    defaultMessage: 'Home Page'
  },
  today: {
    id: 'home.today',
    defaultMessage: 'Locale demo: Today is:'
  }
});

export const Msg = (props) => <FormattedMessage { ...messages[ props.s ] }/>;
export const __injectIntl = (el) => injectIntl(el);
