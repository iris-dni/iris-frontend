import { assert } from 'chai';
import mockPetition from '../mocks/petition';
import getPetition from 'selectors/petition';

describe('getPetition', () => {
  context('with a petition I have not supported yet', () => {
    const petition = {
      ...mockPetition.data,
      extensions: { supporting: false }
    };
    const actual = getPetition(petition).supportedByMe;
    const expected = false;

    it('returns false', () => assert.equal(actual, expected));
  });

  context('with a petition I have already supported', () => {
    const petition = {
      ...mockPetition.data,
      extensions: { supporting: true }
    };
    const actual = getPetition(petition).supportedByMe;
    const expected = true;

    it('returns true', () => assert.equal(actual, expected));
  });
});
