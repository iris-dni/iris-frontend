import chai from 'chai';
import getPetitionMetrics from 'selectors/petitionMetrics';
import { data as petition } from '../mocks/currentPetition';

const { assert } = chai;

describe('get petiton metrics', () => {
  const metrics = getPetitionMetrics(petition);

  describe('time metric', () => {
    it('returns a time metric object', () => {
      assert.isObject(metrics.timeMetric, 'time metric is an object');
    });

    it('returns the remaining time', () => {
      const actual = metrics.timeMetric.figure;
      assert.isNumber(actual);
    });

    it('returns the time percentage', () => {
      const actual = metrics.timeMetric.percentage;
      assert.isNumber(actual);
    });

    it('returns the total days', () => {
      const actual = metrics.timeMetric.total;
      assert.isNumber(actual);
    });
  });

  describe('supporters metric', () => {
    it('returns a supporters metric object', () => {
      assert.isObject(metrics.supportersMetric, 'supporters metric is an object');
    });

    it('returns the number of supporters', () => {
      const actual = metrics.supportersMetric.figure;
      assert.isNumber(actual);
    });

    it('returns the supporters percentage', () => {
      const actual = metrics.supportersMetric.percentage;
      assert.isNumber(actual);
    });

    it('returns the required number of votes', () => {
      const actual = metrics.supportersMetric.total;
      assert.isNumber(actual);
    });

    it('voting is enabled if required supporters above 0', () => {
      const actual = metrics.supportersMetric.votingActive;
      assert.isTrue(actual);
    });

    it('voting is disabled if required supporters below 0', () => {
      const testPetiton = Object.assign({}, petition);
      let metrics;

      testPetiton.supporters.required = -1;
      metrics = getPetitionMetrics(testPetiton);

      const actual = metrics.supportersMetric.votingActive;
      assert.isFalse(actual);
    });
  });
});
