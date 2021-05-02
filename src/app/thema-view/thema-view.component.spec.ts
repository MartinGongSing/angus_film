import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemaViewComponent } from './thema-view.component';

describe('ThemaViewComponent', () => {
  let component: ThemaViewComponent;
  let fixture: ComponentFixture<ThemaViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemaViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemaViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
