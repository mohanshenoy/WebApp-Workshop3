import { Component } from '@angular/core';
import { User } from 'src/app/model/common.dto';
import { DataLayerService } from 'src/app/services/data-layer.service';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { BaseComponent } from 'src/app/base/base.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent extends BaseComponent{


  constructor(public userService: UserService, 
              public dataLayerService : DataLayerService,
              private _router: Router,) {
      super(dataLayerService);
  }

  ngOnInit() {
    if(!this.userService.userAleadyAdded())
    {

      this.userService.getUsers();
    }
  }

  deleteUser(event) {
    this.userService.deleteUser(event)
  }

  openCreateUserForm() { 
    setTimeout( ()=> {
      this._router.navigateByUrl('/create-user');
    }, 100);
  } 

}
