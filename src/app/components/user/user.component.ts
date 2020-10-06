import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MyServiceService } from 'src/app/my-service.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public userform:FormGroup;
  fileToUpload: File = null;

  constructor(private _service:MyServiceService,private toastr: ToastrService, private router:Router) {
    this.userform = new FormGroup({
      name : new FormControl('', Validators.required),
      email : new FormControl('', Validators.required),
      upload_img : new FormControl('', Validators.required),
      Phone_No : new FormControl('', Validators.required),
      location : new FormControl('', Validators.required),
      address : new FormControl('', Validators.required),

    })
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

  onSubmit(params){
    console.log('submit btn clicked');
    console.log(params)

    var _user_id=params.user_id;
    var _name=params.name;
    console.log(_name)
    var _email=params.email;
    var _upload_img=params.upload_image;
    var _phone_no=params.phone;
    var _location=params.location;
    var _address=params.address;

    this._service.userdata_submited(_user_id,_name,_email,_upload_img,_phone_no,_location,_address).subscribe(data=>{
      console.log('inside userdata service')
      console.log(data)

    })
    this.toastr.success('submitted successfully');
  }

  existing_users(){
    console.log('existing_user btn clkd')
    this.router.navigate(['userlist'])
  }

  ngOnInit(): void {
  }

}
