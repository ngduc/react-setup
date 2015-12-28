import React from 'react';
import { injectIntl, defineMessages, FormattedMessage } from 'react-intl';

// i18n strings for this component - https://goo.gl/abldHf
const messages = defineMessages({
  title: {
    id: 'about.title',
    defaultMessage: 'About Page'
  }
});

export const Msg = (props) => <FormattedMessage { ...messages[ props.s ] }/>;
export const __injectIntl = (el) => injectIntl(el);
