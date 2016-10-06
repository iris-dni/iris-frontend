export default function (URL) {
  const PROTOCOL_REGEX = new RegExp(/^(https?:\/\/)?(www\.)?/i);
  return URL.replace(PROTOCOL_REGEX, '');
}
