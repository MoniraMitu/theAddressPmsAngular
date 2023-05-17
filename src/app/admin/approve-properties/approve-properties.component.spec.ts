import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovePropertiesComponent } from './approve-properties.component';

describe('ApprovePropertiesComponent', () => {
  let component: ApprovePropertiesComponent;
  let fixture: ComponentFixture<ApprovePropertiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprovePropertiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApprovePropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
