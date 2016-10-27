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
    name: 'image',
    label: settings.petitionFields.image.label,
    hint: settings.petitionFields.image.hint,
    maxItems: 1,
    hideValidationIcon: true,
    acceptedTypes: [
      'image/png',
      'image/jpeg',
      'image/gif'
    ],
    html: {
      placeholder: settings.petitionFields.image.placeholder
    }
  },
  {
    element: 'PetitionLinksField',
    name: 'links',
    label: settings.petitionFields.links.label,
    hint: settings.petitionFields.links.hint,
    maxItems: 3,
    hideValidationIcon: true,
    html: {
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
