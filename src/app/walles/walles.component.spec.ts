import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WallesComponent } from './walles.component';

describe('WallesComponent', () => {
  let component: WallesComponent;
  let fixture: ComponentFixture<WallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WallesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
