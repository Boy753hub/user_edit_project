import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { DataStorageService } from '../data-storage.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class MainPageComponent implements OnInit {
  constructor(private DataStorageService: DataStorageService) {}

  lol: string = '';
  onuserdata: any;
  name: any;
  showModal: boolean = false;
  @Input() oncheckChange:boolean = false
  //you should get the chossen user's info and save it into var

  //you should get the chossen user's info and save it into var
  selectedUser: any;


  ngOnInit() {
    //getting data from api
    this.DataStorageService.getPosts().subscribe((response) => {
      this.onuserdata = response;
      console.log(this.onuserdata)
    });
  }

  
  onUserSelect(user: any): void {
    this.selectedUser = user;
  }

  toggleModal(): void {
    // turning showmodal true to false and vise versa with click of a button
    console.log(this.showModal);
    this.showModal = !this.showModal;
  }
  

  //getIconType(item: PageObject): string {
   // return item['andriod'] ? 'andriod' : 'ios';
  //}
  onStatusChange(ev: any) 
  { this.selectedUser.status = ev.target.checked ? 'active' : 'inactive'; 
}
}
