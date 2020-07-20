import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteComponent } from '../../teste/teste.component';
import {GithubService} from '../services/github.service';

describe('TesteComponent', () => {
  let component: TesteComponent;
  let fixture: ComponentFixture<TesteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesteComponent ],
      providers: [GithubService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
