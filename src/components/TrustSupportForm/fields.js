import settings from 'settings';

export default [
  {
    element: 'SelectField',
    name: 'user.salutation',
    label: settings.trustFields.salutation.label,
    hint: settings.trustFields.salutation.hint,
    half: true,
    options: [
      {
        value: 'Miss',
        label: 'Miss'
      },
      {
        value: 'Mrs',
        label: 'Mrs'
      },
      {
        value: 'Mr',
        label: 'Mr'
      },
      {
        value: 'Other',
        label: 'Other'
      }
    ],
    html: {
      placeholder: 'Please select'
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
    name: 'user.zip',
    label: settings.trustFields.zip.label,
    hint: settings.trustFields.zip.hint,
    half: true,
    html: {
      placeholder: settings.trustFields.zip.placeholder
    }
  },
  {
    element: 'input',
    name: 'user.town',
    label: settings.trustFields.town.label,
    hint: settings.trustFields.town.hint,
    half: true,
    html: {
      placeholder: settings.trustFields.town.placeholder
    }
  },
  {
    element: 'input',
    name: 'user.email',
    label: settings.trustFields.email.label,
    hint: settings.trustFields.email.hint,
    html: {
      type: 'email',
      placeholder: settings.trustFields.email.placeholder
    }
  },
  {
    element: 'input',
    name: 'user.mobile',
    label: settings.trustFields.mobile.label,
    hint: settings.trustFields.mobile.hint,
    html: {
      type: 'tel',
      minLength: 6,
      maxLength: 20,
      placeholder: settings.trustFields.mobile.placeholder,
      required: true
    }
  }
];
