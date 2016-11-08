import { translation } from 'translations';
import citySuggestionFormatter from 'helpers/citySuggestionFormatter';

export default [
  {
    element: 'input',
    name: 'id',
    hidden: true,
    html: {
      type: 'hidden'
    }
  },
  {
    element: 'Autocomplete',
    name: 'city',
    label: translation('petitionFields.city.label'),
    hint: translation('petitionFields.city.hint'),
    endpoint: 'cities',
    suggestionFormatter: citySuggestionFormatter,
    getFormValue: (suggestion) => ({
      data: suggestion,
      id: suggestion.id,
      class: 'City'
    }),
    nullValue: { id: null },
    suggestionsLimit: 4,
    html: {
      placeholder: translation('petitionFields.city.placeholder')
    }
  },
  {
    element: 'textarea',
    name: 'description',
    label: translation('petitionFields.description.label'),
    hint: translation('petitionFields.description.hint'),
    html: {
      placeholder: translation('petitionFields.description.placeholder'),
      required: true,
      minLength: 50,
      maxLength: 500
    }
  },
  {
    element: 'textarea',
    name: 'suggested_solution',
    label: translation('petitionFields.suggested_solution.label'),
    hint: translation('petitionFields.suggested_solution.hint'),
    html: {
      placeholder: translation('petitionFields.suggested_solution.placeholder'),
      minLength: 50,
      maxLength: 500
    }
  },
  {
    element: 'ImageField',
    name: 'images',
    label: translation('petitionFields.image.label'),
    hint: translation('petitionFields.image.hint'),
    maxItems: 1,
    hideValidationIcon: true,
    acceptedTypes: [
      'image/png',
      'image/jpeg',
      'image/gif'
    ],
    maxSize: 2 * 1024 * 1024,
    html: {
      type: 'file',
      placeholder: translation('petitionFields.image.placeholder')
    }
  },
  {
    element: 'PetitionLinksField',
    name: 'links',
    label: translation('petitionFields.links.label'),
    hint: translation('petitionFields.links.hint'),
    maxItems: 3,
    hideValidationIcon: true,
    html: {
      type: 'text',
      placeholder: translation('petitionFields.links.placeholder')
    }
  },
  {
    element: 'input',
    name: 'title',
    label: translation('petitionFields.title.label'),
    hint: translation('petitionFields.title.hint'),
    html: {
      type: 'text',
      placeholder: translation('petitionFields.title.placeholder'),
      required: true,
      minLength: 15,
      maxLength: 80
    }
  }
];
