import { TestBed } from '@angular/core/testing';

import { SharepointDataService } from './services/sharepoint-data.service';

describe('SharepointDataService', () => {
  let service: SharepointDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharepointDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
