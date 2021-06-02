import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaogaoComponent } from './baogao.component';

describe('BaogaoComponent', () => {
  let component: BaogaoComponent;
  let fixture: ComponentFixture<BaogaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaogaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaogaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
