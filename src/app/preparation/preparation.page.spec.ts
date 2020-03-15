import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PreparationPage } from './preparation.page';

describe('PreparationPage', () => {
  let component: PreparationPage;
  let fixture: ComponentFixture<PreparationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreparationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PreparationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
