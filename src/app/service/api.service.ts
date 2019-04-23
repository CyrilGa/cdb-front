import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Computer} from '../computer/model/computer.model';
import {Company} from '../computer/model/company.model';
import {Credentials} from '../authentication/model/credentials.model';
import {JwtToken} from '../authentication/model/jwt-token.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  API_BASE_URL = 'http://localhost:8080/cdb/api/v1';
  COMPANY_API_URL = this.API_BASE_URL + '/companies';
  COMPUTER_API_URL = this.API_BASE_URL + '/computers';
  SIGNIN_URL = this.API_BASE_URL + '/users/signin';
  REGISTER_URL = this.API_BASE_URL + '/users/register';

  getComputers(params): Observable<HttpResponse<Computer[]>> {
    let finalUrl = this.COMPUTER_API_URL + '?';
    if (params.numberOfElements) {
      finalUrl += 'nbElements=' + params.numberOfElements + '&';
    }
    if (params.desiredPage) {
      finalUrl += 'numPage=' + params.desiredPage + '&';
    }
    if (params.sortName) {
      finalUrl += 'orderAttribute=' + params.sortName + '&';
    }
    if (params.sortType) {
      finalUrl += 'orderType=' + params.sortType + '&';
    }
    if (params.searchName) {
      finalUrl += 'computerName=' + params.searchName + '&';
    }
    finalUrl = finalUrl.substring(0, finalUrl.length - 1);
    console.log(finalUrl);
    return this.http.get<Computer[]>(finalUrl, {observe: 'response'});
  }

  getComputer(id: number): Observable<Computer> {
    return this.http.get<Computer>(this.COMPUTER_API_URL + '/' + id);
  }

  postComputer(computer: Computer): Observable<Computer> {
    return this.http.post<Computer>(this.COMPUTER_API_URL, computer);
  }

  deleteComputer(id: number): Observable<void> {
    return this.http.delete<void>(this.COMPUTER_API_URL + '/' + id);
  }

  editComputer(computer: Computer): Observable<Computer> {
    return this.http.put<Computer>(this.COMPUTER_API_URL, computer);
  }

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(this.COMPANY_API_URL);
  }

  login(username: string, password: string): Observable<JwtToken> {
    const credentials = new Credentials();
    credentials.username = username;
    credentials.password = password;
    return this.http.post<JwtToken>(this.SIGNIN_URL, credentials);
  }
}
