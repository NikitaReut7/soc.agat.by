import { Injectable } from '@angular/core';
declare var document: any;


interface Scripts {
  name: string;
  src: string;
}  
export const ScriptStore: Scripts[] = [
  {name: 'filepicker', src: 'https://firebasestorage.googleapis.com/v0/b/shishko-e3441.appspot.com/o/form-submission-handler.js?alt=media&token=8db39740-8ed7-447f-b1d6-c0ff567a525e'},

];


@Injectable({
  providedIn: 'root'
})
export class LolService {


  private scripts: any = {};

  constructor() {
      ScriptStore.forEach((script: any) => {
          this.scripts[script.name] = {
              loaded: false,
              src: script.src
          };
      });
  }
  
  load(...scripts: string[]) {
      var promises: any[] = [];
      scripts.forEach((script) => promises.push(this.loadScript(script)));
      return Promise.all(promises);
  }
  
  loadScript(name: string) {
      return new Promise((resolve, reject) => {
          //resolve if already loaded
      
              //load script
              let script = document.createElement('script');
              script.type = 'text/javascript';
              script.src = this.scripts[name].src;
              if (script.readyState) {  //IE
                  script.onreadystatechange = () => {
                      if (script.readyState === "loaded" || script.readyState === "complete") {
                          script.onreadystatechange = null;
                          this.scripts[name].loaded = true;
                          resolve({script: name, loaded: true, status: 'Loaded'});
                      }
                  };
              } else {  //Others
                  script.onload = () => {
                      this.scripts[name].loaded = true;
                      resolve({script: name, loaded: true, status: 'Loaded'});
                  };
              }
              script.onerror = (error: any) => resolve({script: name, loaded: false, status: 'Loaded'});
              document.getElementsByTagName('head')[0].appendChild(script);
         
      });
  }
}
