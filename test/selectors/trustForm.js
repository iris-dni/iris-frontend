import { assert } from 'chai';
import mockPetition from '../mocks/petition';
import mockUser from '../mocks/user';
import getTrustForm from 'selectors/trustForm';

describe('trustForm selector', () => {
  it('returns `petitionId` correctly', () => {
    const result = getTrustForm(mockPetition.data);
    const actual = result.petitionId;
    const expected = '7UV7m';

    assert.equal(actual, expected);
  });

  it('returns `submitting` key from trust param', () => {
    const result = getTrustForm(
      mockPetition.data,
      mockUser,
      {
        isSubmitting: true
      }
    );
    const actual = result.submitting;
    assert.isTrue(actual);
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

  it('assigns `petitionId` to `initialValues` key', () => {
    const result = getTrustForm(
      mockPetition.data,
      mockUser,
      {}
    );
    const actual = result.initialValues.petitionId;
    const expected = mockPetition.data.id;

    assert.equal(actual, expected);
  });

  it('assigns `user` to `initialValues` key', () => {
    const result = getTrustForm(
      mockPetition.data,
      mockUser,
      {}
    );
    const actual = result.initialValues.user;
    const expected = mockUser;

    assert.equal(actual, expected);
  });
});
