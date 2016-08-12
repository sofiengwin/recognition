/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { FaceService } from './face.service';

describe('Service: Face', () => {
  beforeEach(() => {
    addProviders([FaceService]);
  });

  it('should ...',
    inject([FaceService],
      (service: FaceService) => {
        expect(service).toBeTruthy();
      }));
});
