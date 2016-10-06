import settings from 'settings';

export default [
  {
    element: 'input',
    name: 'firstname',
    label: settings.trustFields.firstname.label,
    hint: settings.trustFields.firstname.hint,
    html: {
      placeholder: settings.trustFields.firstname.placeholder,
      required: true
    }
  },
  {
    element: 'input',
    name: 'lastname',
    label: settings.trustFields.lastname.label,
    hint: settings.trustFields.lastname.hint,
    html: {
      placeholder: settings.trustFields.lastname.placeholder,
      required: true
    }
  },
  {
    element: 'input',
    name: 'street',
    label: settings.trustFields.street.label,
    hint: settings.trustFields.street.hint,
    html: {
      placeholder: settings.trustFields.street.placeholder,
      required: true
    }
  },
  {
    element: 'input',
    name: 'housenumber',
    label: settings.trustFields.housenumber.label,
    hint: settings.trustFields.housenumber.hint,
    html: {
      placeholder: settings.trustFields.housenumber.placeholder,
      required: true
    }
  },
  {
    element: 'input',
    name: 'zip',
    label: settings.trustFields.zip.label,
    hint: settings.trustFields.zip.hint,
    html: {
      placeholder: settings.trustFields.zip.placeholder,
      required: true
    }
  },
  {
    element: 'input',
    name: 'city',
    label: settings.trustFields.city.label,
    hint: settings.trustFields.city.hint,
    html: {
      placeholder: settings.trustFields.city.placeholder,
      required: true
    }
  },
  {
    element: 'input',
    name: 'email',
    label: settings.trustFields.email.label,
    hint: settings.trustFields.email.hint,
    html: {
      type: 'email',
      placeholder: settings.trustFields.email.placeholder,
      required: true
    }
  },
  {
    element: 'input',
    name: 'phone',
    label: settings.trustFields.phone.label,
    hint: settings.trustFields.phone.hint,
    html: {
      type: 'tel',
      placeholder: settings.trustFields.phone.placeholder,
      required: true
    }
  }
];
