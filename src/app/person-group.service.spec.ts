/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { PersonGroupService } from './person-group.service';

describe('Service: PersonGroup', () => {
  beforeEach(() => {
    addProviders([PersonGroupService]);
  });

  it('should ...',
    inject([PersonGroupService],
      (service: PersonGroupService) => {
        expect(service).toBeTruthy();
      }));
});
