import chai from 'chai';
import filterShareButtonsForTouch from 'helpers/sharing/filterShareButtonsForTouch';

const { assert } = chai;

const buttons = [
  {
    brand: 'facebook'
  },
  {
    brand: 'whatsapp'
  },
  {
    brand: 'twitter'
  }
];

describe('filterShareButtonsForTouch', () => {
  it('returns all when touch arg passed as true', () => {
    const result = filterShareButtonsForTouch(buttons, true);
    const actual = result.length;
    const expected = 3;

    assert.equal(actual, expected);
  });

  it('removes whatsapp when touch arg passed as false', () => {
    const result = filterShareButtonsForTouch(buttons, false);
    const actual = result.filter(button => button.brand === 'whatsapp').length;
    const expected = 0;

    assert.equal(actual, expected);
  });
});
