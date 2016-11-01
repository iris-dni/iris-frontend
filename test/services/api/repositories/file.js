import { assert } from 'chai';
import sinon from 'sinon';
import FormData from 'form-data';
import ApiClient from 'services/api/client';
import fs from 'fs';
import fileRepository from 'services/api/repositories/file';

describe('file repository', () => {
  let exampleId = 'a298d1bce504420ca558e3c7bac637f1';

  beforeEach(() => {
    sinon.stub(ApiClient, 'request');
  });

  afterEach(() => {
    ApiClient.request.restore();
  });

  describe('find', () => {
    let expectedPathArgument = `/files/${exampleId}`;

    it('calls the API and returns the requested file', () => {
      fileRepository.find(exampleId);

      assert(ApiClient.request.calledWith(
        expectedPathArgument
      ));
    });
  });

  describe('create', () => {
    let exampleFile = fs.createReadStream('test/mocks/image.png');
    let expectedPathArgument = '/files';
    let expectedDataArgument = new FormData();
    let expectedMethodArgument = 'POST';

    // Remove _streams and _boundary from expectedDataArgument
    // for comparability.
    expectedDataArgument.append('data', exampleFile);
    delete expectedDataArgument._streams;
    delete expectedDataArgument._boundary;

    it('calls the API client with proper arguments', () => {
      fileRepository.create(exampleFile);

      assert(ApiClient.request.calledWithMatch(
        expectedPathArgument,
        expectedDataArgument,
        expectedMethodArgument
      ));
    });
  });
});
