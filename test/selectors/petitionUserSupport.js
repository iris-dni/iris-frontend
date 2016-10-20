import { assert } from 'chai';
import mockPetition from '../mocks/petition';
import getPetitionUserSupport from 'selectors/petitionUserSupport';

describe('petitionUserSupport selector', () => {
  context('with a petition I have not supported yet', () => {
    const petition = {
      ...mockPetition.data,
      extensions: { supporting: false }
    };
    const actual = getPetitionUserSupport(petition);

    it('returns false', () => assert.isFalse(actual));
  });

  context('with a petition I have already supported', () => {
    const petition = {
      ...mockPetition.data,
      extensions: { supporting: true }
    };
    const actual = getPetitionUserSupport(petition);

    it('returns true', () => assert.isTrue(actual));
  });
});
