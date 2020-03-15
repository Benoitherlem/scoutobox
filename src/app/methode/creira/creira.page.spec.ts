import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreiraPage } from './creira.page';

describe('CreiraPage', () => {
  let component: CreiraPage;
  let fixture: ComponentFixture<CreiraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreiraPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreiraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
