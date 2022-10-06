import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'spotify-rec';
  anime = "";
  animes = false;
  response: any;
  id = 0;
  danceability = encodeURIComponent('0.9');
  constructor(private http: HttpClient){}
  search (){
    this.http.get('https://kitsu.io/api/edge/anime?filter[text]=' + this.anime)
    .subscribe((response)=>{
      this.animes = true;
      this.response = response;
      console.log(response)
      
    })
    
  }
  nextid(){
    this.id++
  }
  previousid(){
    this.id--
  }
}
