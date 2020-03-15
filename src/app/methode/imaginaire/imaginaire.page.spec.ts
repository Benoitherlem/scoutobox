import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ImaginairePage } from './imaginaire.page';

describe('ImaginairePage', () => {
  let component: ImaginairePage;
  let fixture: ComponentFixture<ImaginairePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImaginairePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ImaginairePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
