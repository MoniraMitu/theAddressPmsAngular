import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAddedPropertyComponent } from './user-added-property.component';

describe('UserAddedPropertyComponent', () => {
  let component: UserAddedPropertyComponent;
  let fixture: ComponentFixture<UserAddedPropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAddedPropertyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserAddedPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
