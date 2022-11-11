import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import Swal from 'sweetalert2';
import { DataStorageService } from '../data-storage.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  //you should give selected user to this component for editing
  @Input() selectedUser: any;


  //output to tell parent component that form is submited
  @Output() onUserSubmit: EventEmitter<void> = new EventEmitter<void>();

  constructor(private activatedRoute: ActivatedRoute, private datastorageService: DataStorageService) { }
  
  ngOnInit(): void {
    // this.activatedRoute.paramMap.subscribe((params: ParamMap) =>{
    //   this.datastorageService.getUser(+params.get('id')!).subscribe(
    //     (Response: any) => {
    //       console.log(Response)
    //     }
    //   )
    // })
  }
  //saving edited data 
  onStatusChange(ev: any) 
  { this.selectedUser.status = ev.target.checked ? 'active' : 'inactive'; 
}
  onSubmit(){
    //emit the value
    this.onUserSubmit.emit();
    Swal.fire(
      'Success!',
      'user updated',
      'success'
    )
  }
}
