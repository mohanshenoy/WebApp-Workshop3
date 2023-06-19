import { Injectable } from '@angular/core';
import { WindowReferenceService } from './window-reference.service';


@Injectable({
    providedIn: 'root'
})
export class DataLayerService {
   private window; 

    constructor (private _windowRef: WindowReferenceService){
        this.window = _windowRef.nativeWindow;
    }
   
    collectData(eventName:string){
        const obj = {
            event: eventName,
            userid: 'mohans@unicourt.com' /* TODO remove hardcoding rather fetch it from session/JWT*/
        };
        this.pushDataToGTM(obj);
    }

    private pushDataToGTM(obj){
        if(obj) this.window.dataLayer.push(obj);
    }
}