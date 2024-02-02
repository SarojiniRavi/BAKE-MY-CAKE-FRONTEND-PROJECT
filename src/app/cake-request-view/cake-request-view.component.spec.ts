import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CakeRequestViewComponent } from './cake-request-view.component';

describe('CakeRequestViewComponent', () => {
  let component: CakeRequestViewComponent;
  let fixture: ComponentFixture<CakeRequestViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CakeRequestViewComponent]
    });
    fixture = TestBed.createComponent(CakeRequestViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
