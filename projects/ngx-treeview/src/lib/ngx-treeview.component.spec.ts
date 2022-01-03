import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxTreeviewComponent } from './ngx-treeview.component';

describe('NgxTreeviewComponent', () => {
  let component: NgxTreeviewComponent;
  let fixture: ComponentFixture<NgxTreeviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxTreeviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxTreeviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
