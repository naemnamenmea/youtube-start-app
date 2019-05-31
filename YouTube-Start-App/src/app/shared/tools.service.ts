import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToolsService {

  constructor() {
   }

  getParamsURL(url: string) {
    return url.split("?")[1];
  }

  getValueByKeyFromURL(query: string, key: string) {
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split("=");
      if (pair[0] == key) {
        return pair[1];
      }
    }
    return "";    
  }
}
