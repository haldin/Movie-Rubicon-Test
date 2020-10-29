/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RestApiService } from './RestApi.service';

describe('Service: RestApi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RestApiService]
    });
  });

  it('should ...', inject([RestApiService], (service: RestApiService) => {
    expect(service).toBeTruthy();
  }));
});
