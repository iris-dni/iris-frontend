export default {
  lang: 'en',
  charset: 'utf-8',
  title: 'iris-frontend',
  dateRange: '%s to %e',
  dateFormat: 'DD-MM-YYYY',
  authorLabel: 'by %a',
  supportersText: 'Supporters:',
  milestoneText: 'Target:',
  daysRemaining: 'days remaining',
  teaserSupportersText: 'Supporters',
  tesaserMilestoneText: 'Target',
  teaserDaysRemaining: 'days remaining',
  petitionsPageTitle: 'Petitions',
  daysToVote: 30,
  // FIXME: find better way to import colors
  // without duplicating them
  colors: {
    black: '#222',
    white: '#fff',
    primary: '#2fcd0c',
    secondary: '#387fd1',
    tertiary: '#1100c4',
    dimmed: '#999',
    grey: '#ccc',
    greyLite: '#e5e5e5'
  },
  createPetitionPageTitle: 'Create a new Petition',
  requiredText: 'This field is required',
  minLengthText: 'Must be %x characters or more',
  maxLengthText: 'Cannot be more than %x characters',
  petitionForm: {
    saveButton: 'Save Petition'
  },
  petitionFields: {
    title: {
      label: 'Petition Title',
      placeholder: 'Write your title',
      hint: 'Be clear and concise'
    },
    description: {
      label: 'Petition Description',
      placeholder: 'Write your description',
      hint: ''
    },
    suggested_solution: {
      label: 'Suggested Solution',
      placeholder: 'Write your idea here',
      hint: ''
    }
  }
};
