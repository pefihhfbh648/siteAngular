import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TooblarComponent } from './tooblar.component';

describe('TooblarComponent', () => {
  let component: TooblarComponent;
  let fixture: ComponentFixture<TooblarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TooblarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TooblarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
