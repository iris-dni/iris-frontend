import settings from 'settings';

export default [
  {
    element: 'input',
    name: 'owner.firstname',
    label: settings.trustFields.firstname.label,
    hint: settings.trustFields.firstname.hint,
    html: {
      placeholder: settings.trustFields.firstname.placeholder,
      required: true
    }
  },
  {
    element: 'input',
    name: 'owner.lastname',
    label: settings.trustFields.lastname.label,
    hint: settings.trustFields.lastname.hint,
    html: {
      placeholder: settings.trustFields.lastname.placeholder,
      required: true
    }
  },
  {
    element: 'input',
    name: 'owner.street',
    label: settings.trustFields.street.label,
    hint: settings.trustFields.street.hint,
    html: {
      placeholder: settings.trustFields.street.placeholder,
      required: true
    }
  },
  {
    element: 'input',
    name: 'owner.zip',
    label: settings.trustFields.zip.label,
    hint: settings.trustFields.zip.hint,
    html: {
      placeholder: settings.trustFields.zip.placeholder,
      required: true
    }
  },
  {
    element: 'input',
    name: 'owner.town',
    label: settings.trustFields.town.label,
    hint: settings.trustFields.town.hint,
    html: {
      placeholder: settings.trustFields.town.placeholder,
      required: true
    }
  },
  {
    element: 'input',
    name: 'owner.email',
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
    name: 'owner.mobile',
    label: settings.trustFields.mobile.label,
    hint: settings.trustFields.mobile.hint,
    html: {
      type: 'tel',
      minLength: 14,
      maxLength: 15,
      placeholder: settings.trustFields.mobile.placeholder,
      required: true
    }
  }
];
