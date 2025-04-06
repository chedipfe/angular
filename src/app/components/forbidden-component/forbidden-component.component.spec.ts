import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForbiddenComponentComponent } from './forbidden-component.component';

describe('ForbiddenComponentComponent', () => {
  let component: ForbiddenComponentComponent;
  let fixture: ComponentFixture<ForbiddenComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForbiddenComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForbiddenComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
