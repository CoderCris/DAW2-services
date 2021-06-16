import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncTextComponent } from './enc-text.component';

describe('EncTextComponent', () => {
  let component: EncTextComponent;
  let fixture: ComponentFixture<EncTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EncTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
