import { Component } from '@angular/core';
import { BaseComponent } from 'src/app/base/base.component';
import { DataLayerService } from 'src/app/services/data-layer.service';

@Component({
  selector: 'app-about-us',
  template: '<div>About US Page</div>',
})
export class AboutUsComponent  extends BaseComponent{

  constructor(public dataLayerService : DataLayerService) {
      super(dataLayerService);
  }
}
