import chai from 'chai';
import filterButtonsForTouch from 'helpers/sharing/filterButtonsForTouch';

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

describe('filterButtonsForTouch', () => {
  it('returns all when touch arg passed as true', () => {
    const result = filterButtonsForTouch(buttons, true);
    const actual = result.length;
    const expected = 3;

    assert.equal(actual, expected);
  });

  it('removes whatsapp when touch arg passed as false', () => {
    const result = filterButtonsForTouch(buttons, false);
    const actual = result.filter(button => button.brand === 'whatsapp').length;
    const expected = 0;

    assert.equal(actual, expected);
  });
});
