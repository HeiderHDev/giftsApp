import { Injectable } from '@angular/core';

// const GIPHY_API_KEY = 'we0ni6ajvFKgDY093ow77cDeBWJ3v5GS';

@Injectable({providedIn: 'root'})
export class GifsService{

  private _tagsHistory: string[] = [];
  private apiKey: string = 'we0ni6ajvFKgDY093ow77cDeBWJ3v5GS'

  constructor() { }

  get tagsHistory(){
    return [...this._tagsHistory];
  }

  private organizeHistory(tag: string){
    tag = tag.toLowerCase();

    if(this._tagsHistory.includes(tag)){
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag);
    }

    this._tagsHistory.unshift(tag);
    this._tagsHistory = this._tagsHistory.splice(0,10);
  }

  searchTag(tag: string):void{
    if(tag.length === 0) return;
    this.organizeHistory(tag);
  }

}
