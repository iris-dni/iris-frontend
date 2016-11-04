/**
 * returns the outer height of an DOM element
 * see: http://youmightnotneedjquery.com/#outer_height_with_margin
 */

export default (element) => {
  let height = element.offsetHeight;
  const style = window.getComputedStyle(element);

  height += parseInt(style.marginTop) + parseInt(style.marginBottom);
  return height;
};
