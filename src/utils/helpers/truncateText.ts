const truncateText = (text: string, length: number): string =>
  text.length > length ? text.substring(0, length) + '...' : text;

export default truncateText;
