import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { Wps2020Component } from './wps2020.component';

describe('Wps2020Component', () => {
  let component: Wps2020Component;
  let fixture: ComponentFixture<Wps2020Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Wps2020Component ],
      imports: [MatDialogModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Wps2020Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
