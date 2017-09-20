import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RssProvider {

  constructor(public http: Http) {
  }

  getRss(){
    const RSS_URL: any = "http://www.gocareer.in/feeds/posts/default?alt=rss";
    const API_KEY: any = 'axjnvs6muv6wgxfnzzjrgil7x57wljdveglhayit';
    const COUNT: any = 20;
    const API_URL: any = 'https://api.rss2json.com/v1/api.json';
    const response = this.http.post(API_URL, {'rss_url': RSS_URL, 'api_key': API_KEY, 'count': COUNT})
      .map(res => res.json());
    return response;
  }

}
