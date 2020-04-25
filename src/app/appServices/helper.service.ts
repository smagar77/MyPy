import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() { }

  add_tag(tag, tags){
    tags.push({id:100, name:tag.value})
    return tags;
  }
  remove_tag(tag, tags){
    tags.splice(tag, 1);
    return tags;
  }

  get_datetime(){
    return new Date()
  }

}
