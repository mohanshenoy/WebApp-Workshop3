import { Component, OnInit , HostListener} from '@angular/core';
import { DataLayerService } from '../services/data-layer.service';
import { NavigationEnd } from '@angular/router'; 

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent {

  constructor(public _dataLayerService : DataLayerService) { }

  @HostListener('click' , ["$event"] )
  onClick(event) {
    console.log(event);
    console.log(event.target.id);
    //console.log(event.frames);
    event.stopPropagation();
    this._dataLayerService.collectData(event.target.id);
  }
  
}



