import { assert } from 'chai';
import sinon from 'sinon';
import ApiClient from 'services/api/client';
import mockPetition from '../../../mocks/petition';
import mockUser from '../../../mocks/user';
import petitionRepository from 'services/api/repositories/petition';

describe('petition repository', () => {
  let exampleId = '7UV7m';
  let exampleResponseToken = '1C9LQ';
  let exampleTitle = 'Example Petition';

  let allResolves = 'city,owner,images,links,mentions';
  let postResolves = 'city,owner,images,links';

  beforeEach(() => {
    sinon.stub(ApiClient, 'request');
  });

  afterEach(() => {
    ApiClient.request.restore();
  });

  describe('all', () => {
    let expectedPathArgument = '/petitions';

    context('without any argument', () => {
      it('calls the API client with default offset and limit', () => {
        let expectedDataArgument = {
          offset: 0,
          limit: 12
        };
        petitionRepository.all();

        assert(ApiClient.request.calledWithMatch(
          expectedPathArgument,
          expectedDataArgument
        ));
      });
    });

    context('with custom pagination argument', () => {
      it('calls the API client with proper offset and limit', () => {
        let expectedDataArgument = {
          offset: 10,
          limit: 10
        };
        petitionRepository.all({ page: 2, limit: 10 });

        assert(ApiClient.request.calledWithMatch(
          expectedPathArgument,
          expectedDataArgument
        ));
      });
    });
  });

  describe('find', () => {
    let expectedPathArgument = `/petitions/${exampleId}`;

    it('calls the API and returns the requested petition', () => {
      petitionRepository.find(exampleId);

      assert(ApiClient.request.calledWith(
        expectedPathArgument
      ));
    });

    it('resolves city, links, mentions, owner, images ', () => {
      let expectedDataArgument = { resolve: allResolves };

      petitionRepository.find(exampleId);

      assert(ApiClient.request.calledWithMatch(
        expectedPathArgument,
        expectedDataArgument
      ));
    });
  });

  describe('findByResponseToken', () => {
    let expectedPathArgument = `/token/${exampleResponseToken}/petitions`;
    let expectedDataArgument = { resolve: 'city,owner' };

    it('calls the API client with proper arguments', () => {
      petitionRepository.findByResponseToken(exampleResponseToken);

      assert(ApiClient.request.calledWithMatch(
        expectedPathArgument,
        expectedDataArgument
      ));
    });
  });

  describe('create', () => {
    let examplePetition = { id: exampleId, title: exampleTitle };
    let expectedPathArgument = `/petitions?resolve=${postResolves}`;
    let expectedDataArgument = { data: { id: exampleId, title: exampleTitle } };
    let expectedMethodArgument = 'POST';

    it('calls the API client with proper arguments', () => {
      petitionRepository.create(examplePetition);

      assert(ApiClient.request.calledWith(
        expectedPathArgument,
        expectedDataArgument,
        expectedMethodArgument
      ));
    });
  });

  describe('update', () => {
    context('without city', () => {
      let examplePetition = { id: exampleId, title: exampleTitle };
      let expectedPathArgument = `/petitions/${exampleId}?resolve=${postResolves}`;
      let expectedDataArgument = {
        data: {
          title: exampleTitle
        }
      };
      let expectedMethodArgument = 'POST';

      it('calls the API client with proper arguments', () => {
        petitionRepository.update(examplePetition);

        assert(ApiClient.request.calledWith(
          expectedPathArgument,
          expectedDataArgument,
          expectedMethodArgument
        ));
      });
    });

    context('with city and city.id', () => {
      let exampleCity = {
        id: '12'
      };
      let examplePetition = {
        id: exampleId,
        title: exampleTitle,
        city: exampleCity
      };
      let expectedPathArgument = `/petitions/${exampleId}?resolve=${postResolves}`;
      let expectedDataArgument = {
        data: {
          title: exampleTitle,
          city: exampleCity
        }
      };
      let expectedMethodArgument = 'POST';

      it('calls the API client with proper arguments', () => {
        petitionRepository.update(examplePetition);

        assert(ApiClient.request.calledWith(
          expectedPathArgument,
          expectedDataArgument,
          expectedMethodArgument
        ));
      });
    });

    context('with city, without city.id', () => {
      let exampleCity = {
        id: '',
        label: 'Foo'
      };
      let examplePetition = {
        id: exampleId,
        title: exampleTitle,
        city: exampleCity
      };
      let expectedPathArgument = `/petitions/${exampleId}?resolve=${postResolves}`;
      let expectedDataArgument = {
        data: {
          title: exampleTitle,
          city: { id: null }
        }
      };
      let expectedMethodArgument = 'POST';

      it('calls the API client with proper arguments', () => {
        petitionRepository.update(examplePetition);

        assert(ApiClient.request.calledWith(
          expectedPathArgument,
          expectedDataArgument,
          expectedMethodArgument
        ));
      });
    });
  });

  describe('publish', () => {
    context('without mobile_token', () => {
      let examplePetition = {
        petition: mockPetition.data
      };
      let expectedPathArgument = `/petitions/${mockPetition.data.id}/event/publish?resolve=${postResolves}`;
      let expectedDataArgument = { data: {} };
      let expectedMethodArgument = 'POST';
      it('calls the API client with proper arguments', () => {
        petitionRepository.publish(examplePetition);

        assert(ApiClient.request.calledWith(
          expectedPathArgument,
          expectedDataArgument,
          expectedMethodArgument
        ));
      });
    });

    context('with mobile_token', () => {
      let examplePetition = {
        petition: mockPetition.data,
        mobile_token: '12345'
      };
      let expectedPathArgument = `/petitions/${mockPetition.data.id}/event/publish?resolve=${postResolves}`;
      let expectedDataArgument = { data: { mobile_token: '12345' } };
      let expectedMethodArgument = 'POST';
      it('calls the API client with proper arguments', () => {
        petitionRepository.publish(examplePetition);

        assert(ApiClient.request.calledWith(
          expectedPathArgument,
          expectedDataArgument,
          expectedMethodArgument
        ));
      });
    });
  });

  describe('support', () => {
    context('without mobile_token', () => {
      let exampleTrustData = {
        petition: mockPetition.data,
        user: mockUser
      };
      let expectedPathArgument = `/petitions/${mockPetition.data.id}/event/support?resolve=${allResolves}`;
      let expectedDataArgument = {
        data: {
          user: mockUser
        }
      };
      let expectedMethodArgument = 'POST';

      it('calls the API client with proper arguments', () => {
        petitionRepository.support(exampleTrustData);

        assert(ApiClient.request.calledWith(
          expectedPathArgument,
          expectedDataArgument,
          expectedMethodArgument
        ));
      });
    });

    context('with mobile_token', () => {
      let exampleTrustData = {
        petition: mockPetition.data,
        user: mockUser,
        mobile_token: '12345'
      };
      let expectedPathArgument = `/petitions/${mockPetition.data.id}/event/support?resolve=${allResolves}`;
      let expectedDataArgument = {
        data: {
          user: mockUser,
          mobile_token: '12345'
        }
      };
      let expectedMethodArgument = 'POST';

      it('calls the API client with proper arguments', () => {
        petitionRepository.support(exampleTrustData);

        assert(ApiClient.request.calledWith(
          expectedPathArgument,
          expectedDataArgument,
          expectedMethodArgument
        ));
      });
    });
  });

  describe('respond', () => {
    let exampleResponse = {
      answer: {
        text: 'Example Answer',
        name: 'Jane Doe, Mayor'
      },
      petitionId: exampleId,
      token: exampleResponseToken
    };

    let expectedPathArgument = `/petitions/${exampleId}/event/setFeedback?resolve=city`;
    let expectedDataArgument = {
      data: {
        answer: exampleResponse.answer,
        token: exampleResponse.token
      }
    };
    let expectedMethodArgument = 'POST';

    it('calls the API client with proper arguments', () => {
      petitionRepository.respond(exampleResponse);

      assert(ApiClient.request.calledWithMatch(
        expectedPathArgument,
        expectedDataArgument,
        expectedMethodArgument
      ));
    });
  });
});
