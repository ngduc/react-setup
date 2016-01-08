const ESCAPED_CHARS = {
  '\\': '\\\\',
  '\\#': '\\#',
  '{': '\\{',
  '}': '\\}'
};

const ESAPE_CHARS_REGEXP = /\\#|[{}\\]/g;

export default function printICUMessage(ast) {
  return ast.elements.reduce((message, el) => {
    const {
      format, id, type, value
    } = el;

    if (type === 'messageTextElement') {
      return message + value.replace(ESAPE_CHARS_REGEXP, (char) => {
        return ESCAPED_CHARS[char];
      });
    }

    if (!format) {
      return message + `{${id}}`;
    }

    const formatType = format.type.replace(/Format$/, '');

    switch (formatType) {
      case 'number':
      case 'date':
      case 'time':
        const style = format.style ? `, ${format.style}` : '';
        return message + `{${id}, ${formatType}${style}}`;

      case 'plural':
      case 'selectOrdinal':
      case 'select':
        const offset = format.offset ? `, offset:${format.offset}` : '';
        const options = format.options.reduce((str, option) => {
          const optionValue = printICUMessage(option.value);
          return str + ` ${option.selector} {${optionValue}}`;
        }, '');
        return message + `{${id}, ${formatType}${offset},${options}}`;
    }
  }, '');
}
