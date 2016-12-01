export default (helmetData = {}) => ({
  title: helmetData.title && helmetData.title.toString(),
  meta: (helmetData.meta && helmetData.meta.toString()),
  link: helmetData.link && helmetData.link.toString(),
  script: helmetData.script && helmetData.script.toString(),
  style: helmetData.style && helmetData.style.toString()
});
