import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPasswordByIdComponent } from './reset-password-by-id.component';

describe('ResetPasswordByIdComponent', () => {
  let component: ResetPasswordByIdComponent;
  let fixture: ComponentFixture<ResetPasswordByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetPasswordByIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetPasswordByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
