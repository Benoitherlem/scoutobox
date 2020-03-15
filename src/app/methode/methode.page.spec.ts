import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MethodePage } from './methode.page';

describe('MethodePage', () => {
  let component: MethodePage;
  let fixture: ComponentFixture<MethodePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MethodePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MethodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
