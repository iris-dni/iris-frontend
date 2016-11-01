import baseUrl from 'helpers/baseUrl';

export default (petition = {}) => {
  return `<div class="iris-petition-widget" data-petition-id="${petition.id}"></div>
<script async src="${baseUrl()}/dist/embed.js"></script>`;
};
