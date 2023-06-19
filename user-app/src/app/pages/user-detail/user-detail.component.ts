import { Component, Input } from '@angular/core';
import { BaseComponent } from 'src/app/base/base.component';
import { UserDetail } from 'src/app/model/common.dto';
import { DataLayerService } from 'src/app/services/data-layer.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent  extends BaseComponent {

  userDetail: UserDetail = {
    id: this.userService.userId,
    name: '',
    city: '',
    companyName: '',
    emailId: '',
    phoneNumber: '',
    street: '',
    zipCode: '',
  };

  hasError: boolean = false;

  constructor(public userService: UserService, 
    public dataLayerService : DataLayerService) {
      super(dataLayerService);
  }

  ngOnInit() {
    this.hasError = false;
    this.userService.getUserDetail(this.userService.userId).subscribe({
      next: (response: any) => {
        console.log('user detail response', response);
        this.userDetail.name = response.name;
        this.userDetail.emailId = response.email;
        this.userDetail.city = response.address.city;
        this.userDetail.companyName = response.company.name;
        this.userDetail.phoneNumber = response.phone;
        this.userDetail.zipCode = response.address.zipcode;
        this.userDetail.street = response.address.street;
      },
      error: (error) => {
        this.hasError = true;
        console.log('user detail error', error);
      },
    });
  }
}
