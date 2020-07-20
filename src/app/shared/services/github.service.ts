import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Github} from '../model/github';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http: HttpClient) { }

  getRepositories(user) {
    return this.http.get<Github[]>(`/users/${user}/repos`);
  }


}
