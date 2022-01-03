import { TestBed } from '@angular/core/testing';

import { NgxTreeviewService } from './ngx-treeview.service';

describe('NgxTreeviewService', () => {
  let service: NgxTreeviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxTreeviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
