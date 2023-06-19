import { Component } from '@angular/core';
import { BaseComponent } from 'src/app/base/base.component';
import { DataLayerService } from 'src/app/services/data-layer.service';

@Component({
  selector: 'app-contact',
  template: '<div>Contact US Page</div>',
})
export class ContactComponent  extends BaseComponent{
  
  constructor(public dataLayerService : DataLayerService) {
    super(dataLayerService);
}

}
