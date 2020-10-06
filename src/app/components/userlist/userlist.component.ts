import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyServiceService } from 'src/app/my-service.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  public usr_list:any;
  // public userdata=[{name:'mahesh', id:1, phone:132323534, address:'bangalore',},
  //               {name:'ajay', id:2, phone:34345446445,address:'pune'},
  //               {name:'basu', id:3, phone:433544555,address:'mumbai'},
  //               {name:'jeevan', id:4, phone:67676686786,address:'kolkata'}
              // ]
  displayedColumns=['name', 'email', 'phone', 'address','details']

  public dataSource=this.usr_list;

  constructor(private _service:MyServiceService, private route:ActivatedRoute, private router:Router) {

    this._service.userlist().subscribe(data=>{
      console.log(data);
      this.usr_list=data.obj;
      console.log(this.usr_list)
    })
  }

  details(id){
    console.log('inside details')
    this.router.navigate(['userdetails',id])

  }



  ngOnInit(): void {
  }

}
