import { Component } from '@angular/core';
import { BaseComponent } from 'src/app/base/base.component';
import { DataLayerService } from 'src/app/services/data-layer.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent extends BaseComponent{

  constructor(public dataLayerService : DataLayerService) {
    super(dataLayerService);
}

}
