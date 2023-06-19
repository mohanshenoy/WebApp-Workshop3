import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent } from 'src/app/base/base.component';
import { DataLayerService } from 'src/app/services/data-layer.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent extends BaseComponent{
  @Input() id: number;
  @Input() name: string;
  @Input() emailId: string;
  @Input() city: string;

  @Output() deleteUser = new EventEmitter<Number>();


  constructor(private _router: Router,
              public userService: UserService, 
              public dataLayerService : DataLayerService) {
    super(dataLayerService);
}

  ngOnChanges() {
    // console.log('on changes called');
  }

  ngOnInit() {
    // console.log('on init called');
  }

  ngOnDestroy() {
    console.log('on destroy called');
  }

  setUserId(id: number) {
    this.userService.userId = id;
    setTimeout( ()=> {
      this._router.navigateByUrl('/user-detail');
    }, 100);
    
  }

  deleteUserById(id) {
    this.deleteUser.emit(id);
  }
}
