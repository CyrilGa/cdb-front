import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Computer } from '../computer/model/computer.model';
import { Company } from '../computer/model/company.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  COMPUTER_API_URL: 'http://localhost:8080/cdb/api/v1/computer';
  COMPANY_API_URL: 'http://localhost:8080/cdb/api/v1/company';

  getComputers(): Observable<Computer[]> {
    return this.http.get<Computer[]>(this.COMPUTER_API_URL);
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
}
