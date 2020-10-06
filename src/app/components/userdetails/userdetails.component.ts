import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MyServiceService } from 'src/app/my-service.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
  public usr_details:any;

  // public userlist=[{name:'mahesh', id:1, phone:132323534, address:'bangalore',},
  //                   {name:'ajay', id:2, phone:34345446445,address:'pune'},
  //                   {name:'basu', id:3, phone:433544555,address:'mumbai'},
  //                   {name:'jeevan', id:4, phone:67676686786,address:'kolkata'}
  //                 ];
  public list:any=[];

  constructor(private _service:MyServiceService,private router:Router, private route:ActivatedRoute) {
    console.log('inside userdetails')

    this._service.userlist().subscribe(data=>{
      console.log(data);
      this.usr_details=data.obj;
      console.log(this.usr_details);
          // captured user_id from userlist component
    var _user_id=this.route.snapshot.paramMap.get('id');
    console.log(_user_id)

    var data=this.usr_details.filter(x=>x.user_id==parseInt(_user_id));
    this.list= data[0];
    })
    // this.getdetails(user_id);

  }

  getdetails(id){

    console.log('inside getdetails method')
    console.log(id)
    console.log(this.usr_details)
    // var data=this.usr_details.filter(x=>x.user_id==parseInt(id));

    console.log(this.list)
    return this.list;
  }

  ngOnInit(): void {
  }

}
