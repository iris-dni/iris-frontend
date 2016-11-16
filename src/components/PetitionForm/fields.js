import settings from 'settings';
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
    label: settings.petitionFields.city.label,
    hint: settings.petitionFields.city.hint,
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
      placeholder: settings.petitionFields.city.placeholder
    }
  },
  {
    element: 'textarea',
    name: 'description',
    label: settings.petitionFields.description.label,
    hint: settings.petitionFields.description.hint,
    html: {
      placeholder: settings.petitionFields.description.placeholder,
      required: true,
      minLength: 50,
      maxLength: 500
    }
  },
  {
    element: 'textarea',
    name: 'suggested_solution',
    label: settings.petitionFields.suggested_solution.label,
    hint: settings.petitionFields.suggested_solution.hint,
    html: {
      placeholder: settings.petitionFields.suggested_solution.placeholder,
      minLength: 50,
      maxLength: 500
    }
  },
  {
    element: 'ImageField',
    name: 'images',
    label: settings.petitionFields.image.label,
    hint: settings.petitionFields.image.hint,
    maxItems: 1,
    nestedValidation: true,
    acceptedTypes: [
      'image/png',
      'image/jpeg',
      'image/gif'
    ],
    maxSize: 10 * 1024 * 1024,
    html: {
      type: 'file',
      placeholder: settings.petitionFields.image.placeholder
    }
  },
  {
    element: 'PetitionLinksField',
    name: 'links',
    label: settings.petitionFields.links.label,
    hint: settings.petitionFields.links.hint,
    maxItems: 3,
    nestedValidation: true,
    html: {
      autoComplete: false,
      type: 'text',
      placeholder: settings.petitionFields.links.placeholder
    }
  },
  {
    element: 'input',
    name: 'title',
    label: settings.petitionFields.title.label,
    hint: settings.petitionFields.title.hint,
    html: {
      type: 'text',
      placeholder: settings.petitionFields.title.placeholder,
      required: true,
      minLength: 15,
      maxLength: 80
    }
  }
];
