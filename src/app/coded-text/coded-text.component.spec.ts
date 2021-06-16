import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodedTextComponent } from './coded-text.component';

describe('CodedTextComponent', () => {
  let component: CodedTextComponent;
  let fixture: ComponentFixture<CodedTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodedTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodedTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
