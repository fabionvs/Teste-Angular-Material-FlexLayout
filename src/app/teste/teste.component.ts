import {Component, OnInit} from '@angular/core';
import {GithubService} from '../shared/services/github.service';
import {Github} from '../shared/model/github';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.css']
})
export class TesteComponent implements OnInit {
  gitHubRepositories: any;
  emailFormControl = new FormControl('', [
    Validators.required,
  ]);
  value = 'fabionvs';

  constructor(private testeService: GithubService) {
  }

  ngOnInit(): void {
    this.emailFormControl.setValue('fabionvs');
    this.getRepos(this.emailFormControl.value);
  }

  getRepos(username) {
    if (username === '') {
      alert('foi');
      return false;
    }
    this.testeService.getRepositories(username).subscribe((response: Github[]) => {
      this.gitHubRepositories = response;
    });
  }

}
