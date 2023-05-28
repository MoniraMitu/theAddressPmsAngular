import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByAreaComponent } from './search-by-area.component';

describe('SearchByAreaComponent', () => {
  let component: SearchByAreaComponent;
  let fixture: ComponentFixture<SearchByAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchByAreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchByAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
