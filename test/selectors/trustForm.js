import { assert } from 'chai';
import mockPetition from '../mocks/petition';
import mockPetitionOwned from '../mocks/petitionOwned';
import mockUser from '../mocks/trustedUser';
import getTrustForm from 'selectors/trustForm';

describe('trustForm selector', () => {
  it('returns `petition` correctly', () => {
    const result = getTrustForm(mockPetition.data);
    const actual = result.petition;
    const expected = mockPetition.data;

    assert.deepEqual(actual, expected);
  });

  it('assigns me param to `me` key', () => {
    const result = getTrustForm(
      mockPetition.data,
      mockUser,
      {}
    );
    const actual = result.me;
    const expected = mockUser;

    assert.deepEqual(actual, expected);
  });

  context('with petition', () => {
    it('assigns me param as `user` to `initialValues` key', () => {
      const result = getTrustForm(
        mockPetition.data,
        mockUser,
        {}
      );
      const actual = result.initialValues.user;
      const expected = mockUser;

      assert.deepEqual(actual, expected);
    });

    it('assigns me param as `owner` to `initialValues` key', () => {
      const result = getTrustForm(
        mockPetition.data,
        mockUser,
        {}
      );
      const actual = result.initialValues.owner;
      const expected = mockUser;

      assert.deepEqual(actual, expected);
    });
  });

  context('with owned petition', () => {
    it('assigns me param as `user` to `initialValues` key', () => {
      const result = getTrustForm(
        mockPetitionOwned.data,
        mockUser,
        {}
      );
      const actual = result.initialValues.user;
      const expected = mockUser;

      assert.deepEqual(actual, expected);
    });

    it('assigns petition owner as `owner` to `initialValues` key', () => {
      const result = getTrustForm(
        mockPetitionOwned.data,
        mockUser,
        {}
      );
      const actual = result.initialValues.owner;
      const expected = mockPetitionOwned.data.owner;

      assert.deepEqual(actual, expected);
    });
  });
});
