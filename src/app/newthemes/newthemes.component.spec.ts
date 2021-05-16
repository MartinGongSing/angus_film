import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewthemesComponent } from './newthemes.component';

describe('NewthemesComponent', () => {
  let component: NewthemesComponent;
  let fixture: ComponentFixture<NewthemesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewthemesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewthemesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
