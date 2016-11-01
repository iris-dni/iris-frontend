import { assert } from 'chai';
import getPetitionEmbedCode from 'selectors/petitionEmbedCode';
import mockPetition from '../mocks/petition';

describe('petitionEmbedCode selector', () => {
  it('returns html code correctly', () => {
    const actual = getPetitionEmbedCode(mockPetition.data);
    const expected = '<div class="iris-petition-widget" data-petition-id="7UV7m"></div>\n<script async src="http://localhost:8000/dist/embed.js"></script>';

    assert.equal(actual, expected);
  });
});
