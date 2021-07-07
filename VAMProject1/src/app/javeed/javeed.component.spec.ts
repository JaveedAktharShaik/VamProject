import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JaveedComponent } from './javeed.component';

describe('JaveedComponent', () => {
  let component: JaveedComponent;
  let fixture: ComponentFixture<JaveedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JaveedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JaveedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
