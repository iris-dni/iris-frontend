import chai from 'chai';
import petitionValidator from 'form/petitionValidator';
import { getFieldByNameKey } from '../components/PetitionForm';

const { assert } = chai;

const titleField = getFieldByNameKey('title');
const descriptionField = getFieldByNameKey('description');

describe('petitionValidator', () => {
  it('ensures `title` and `description` are required', () => {
    const result = petitionValidator({
      title: '',
      description: ''
    });
    const actual = Object.keys(result).length;
    const expected = 2;

    assert.equal(actual, expected);
  });

  it('ensures `title` and `description` validate minLength', () => {
    const result = petitionValidator({
      title: Array((titleField.html.minLength - 1)).join('x'),
      description: Array((descriptionField.html.minLength - 1)).join('x')
    });
    const actual = Object.keys(result).length;
    const expected = 2;

    assert.equal(actual, expected);
  });

  it('ensures `title` and `description` validate maxLength', () => {
    const result = petitionValidator({
      title: Array((titleField.html.maxLength + 2)).join('x'),
      description: Array((descriptionField.html.maxLength + 2)).join('x')
    });
    const actual = Object.keys(result).length;
    const expected = 2;

    assert.equal(actual, expected);
  });
});
