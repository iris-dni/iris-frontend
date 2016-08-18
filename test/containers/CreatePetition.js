import chai from 'chai';
import { mapStateToProps } from 'containers/CreatePetition';
import mockPetition from '../mocks/petition';

const { assert } = chai;

describe('CreatePetitionContainer', () => {
  describe('mapStateToProps', () => {
    it('returns the createPetition ID', () => {
      const result = mapStateToProps(mockPetition.data);
      const actual = result.id;
      const expected = 2;

      assert.equal(actual, expected);
    });
  });
});
