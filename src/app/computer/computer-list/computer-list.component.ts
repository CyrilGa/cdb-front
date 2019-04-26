import {Component, OnInit} from '@angular/core';
import {Computer} from '../model/computer.model';
import {ApiService} from '../../service/api.service';
import { TranslateService } from '@ngx-translate/core';
import {SessionService} from '../../authentication/session.service';
import {MatSnackBar} from '@angular/material';
import {SnackbarComponent} from '../../custom-material/snackbar/snackbar.component';
import { Company } from '../model/company.model';


@Component({
  selector: 'app-computer-list',
  templateUrl: './computer-list.component.html',
  styleUrls: ['./computer-list.component.scss']
})

export class ComputerListComponent implements OnInit {

  computers: Computer[] = [];

  maxPage: number;
  currentPage: number;
  elements: number;

  searchName: string;
  sort: any;

  isAddToggled = false;

  companies: Company[];

  duration = 3000;

  idOnEdit = -1;

  constructor(private api: ApiService, private sessionService: SessionService, private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.currentPage = 0;
    this.searchName = null;
    this.sort = null;
    this.getComputers();
  }

  getComputers() {
    const params = {
      numberOfElements: this.elements,
      desiredPage: this.currentPage,
      sort: this.sort,
      searchName: this.searchName
    };
    this.api.getComputers(params).subscribe(
      result => {
        this.computers = result.body;
        this.maxPage = +result.headers.get('MaxPageId');
      }
    );
  }

  changePage($event) {
    console.log('change page: ' + $event);
    this.currentPage = $event;
    this.getComputers();
  }

  changeElements($event) {
    console.log('change elements: ' + $event);
    this.elements = $event;
    this.currentPage = 0;
    this.getComputers();
  }

  changeSort($event) {
    console.log('change sort: ' + $event);
    this.sort = $event;
    this.currentPage = 0;
    this.getComputers();
  }

  changeSearch($event) {
    console.log('change search: ' + $event);
    this.searchName = $event;
    this.currentPage = 0;
    this.getComputers();
  }

  deleteComputer($event) {
    this.computers = this.computers.filter(computer => computer.id !== $event)

    this.api.deleteComputer($event).subscribe(
      response => {
        this.snackBar.openFromComponent(SnackbarComponent, {
          duration: this.duration,
          panelClass: ['snackbar', 'snackbar-success'],
          data: 'Computer successfully deleted '
        });
        this.getComputers();
      },
      error => {
        this.snackBar.openFromComponent(SnackbarComponent, {
          duration: this.duration,
          panelClass: ['snackbar', 'snackbar-error'],
          data: "Computer not deleted"
        });
        this.getComputers();
      }
    );
  }

  getUserRole(): string {
    return this.sessionService.getUserRole();
  }

  saveComputer($event) {
    this.api.editComputer($event).subscribe(
      () => {
        this.snackBar.openFromComponent(SnackbarComponent, {
          duration: this.duration,
          panelClass: ['snackbar', 'snackbar-success'],
          data: 'Computer successfully updated'
        });
        this.getComputers();
      },
      error => {
        this.snackBar.openFromComponent(SnackbarComponent, {
          duration: this.duration,
          panelClass: ['snackbar', 'snackbar-error'],
          data: 'Computer not updated'
        });
        this.getComputers();
      }
    );
  }

  toggleAdd(){
    this.loadCompanies();
    this.isAddToggled = !this.isAddToggled;
  }

  loadCompanies(): void {
    this.api.getCompanies().subscribe(
      (companies) => this.companies = companies,
      error => console.log(error)
    );
  }

  addComputer($event){
    this.api.postComputer($event).subscribe(
      () => {
        this.snackBar.openFromComponent(SnackbarComponent, {
          duration: this.duration,
          panelClass: ['snackbar', 'snackbar-success'],
          data: 'Computer successfully created'
        });
        this.getComputers()
      },
      error => {
        this.snackBar.openFromComponent(SnackbarComponent, {
          duration: this.duration,
          panelClass: ['snackbar', 'snackbar-error'],
          data: 'Computer not created'
        });
        this.getComputers();
      }
    );
  }

  editComputer($event){
    this.idOnEdit = $event;
  }

}
