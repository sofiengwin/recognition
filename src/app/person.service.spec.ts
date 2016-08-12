/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { PersonService } from './person.service';

describe('Service: Person', () => {
  beforeEach(() => {
    addProviders([PersonService]);
  });

  it('should ...',
    inject([PersonService],
      (service: PersonService) => {
        expect(service).toBeTruthy();
      }));
});
