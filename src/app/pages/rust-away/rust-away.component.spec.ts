import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RustAwayComponent } from './rust-away.component';

describe('RustAwayComponent', () => {
  let component: RustAwayComponent;
  let fixture: ComponentFixture<RustAwayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RustAwayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RustAwayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
