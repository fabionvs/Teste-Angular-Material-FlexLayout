import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteComponent} from '../app/teste/teste.component';
import {GithubService} from '../app/shared/services/github.service';
import {HttpClientModule} from '@angular/common/http';

describe('TesteComponent', () => {
  let component: TesteComponent;
  let fixture: ComponentFixture<TesteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
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

  it('form is valid', () => {
    const input = component.emailFormControl;
    expect(input.valid).toBeTruthy();
  });

  it('input value is fabionvs', () => {
    const input = component.emailFormControl;
    expect(input.value).toEqual('fabionvs');
  });
});
