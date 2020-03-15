import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PrepacampPage } from './prepacamp.page';

describe('PrepacampPage', () => {
  let component: PrepacampPage;
  let fixture: ComponentFixture<PrepacampPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrepacampPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PrepacampPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
