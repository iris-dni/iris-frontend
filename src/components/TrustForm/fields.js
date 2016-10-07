import settings from 'settings';

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
    element: 'input',
    name: 'user.firstname',
    label: settings.trustFields.firstname.label,
    hint: settings.trustFields.firstname.hint,
    html: {
      placeholder: settings.trustFields.firstname.placeholder,
      required: true
    }
  },
  {
    element: 'input',
    name: 'user.lastname',
    label: settings.trustFields.lastname.label,
    hint: settings.trustFields.lastname.hint,
    html: {
      placeholder: settings.trustFields.lastname.placeholder,
      required: true
    }
  },
  {
    element: 'input',
    name: 'user.street',
    label: settings.trustFields.street.label,
    hint: settings.trustFields.street.hint,
    html: {
      placeholder: settings.trustFields.street.placeholder,
      required: true
    }
  },
  {
    element: 'input',
    name: 'user.zip',
    label: settings.trustFields.zip.label,
    hint: settings.trustFields.zip.hint,
    html: {
      placeholder: settings.trustFields.zip.placeholder,
      required: true
    }
  },
  {
    element: 'input',
    name: 'user.city',
    label: settings.trustFields.city.label,
    hint: settings.trustFields.city.hint,
    html: {
      placeholder: settings.trustFields.city.placeholder,
      required: true
    }
  },
  {
    element: 'input',
    name: 'user.email',
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
    name: 'user.phone',
    label: settings.trustFields.phone.label,
    hint: settings.trustFields.phone.hint,
    html: {
      type: 'tel',
      placeholder: settings.trustFields.phone.placeholder,
      required: true
    }
  }
];
