import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayStoresComponent } from './display-stores.component';

describe('DisplayStoresComponent', () => {
  let component: DisplayStoresComponent;
  let fixture: ComponentFixture<DisplayStoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayStoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayStoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
