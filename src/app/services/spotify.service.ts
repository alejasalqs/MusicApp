import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    
   }



  getQuery(query: string) {
    const url = 'https://api.spotify.com/v1/' + query;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBI5DECRk4EZNURWUW8YYWQvlwViR867mGJohkDipV2MigU1-FmSvjTcb2qMeaCx-gfAK86cbd96JWn3RQ'
    });

    return this.http.get(url, { headers });
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases')
    .pipe( map( (data: any) => {
      return data.albums.items;
    }));
  }

  getArtista(termino: string) {

    return this.getQuery('search?q=' + termino + '&type=artist&limit=15')
    .pipe( map( (data: any) => {
      return data.artists.items;
    }));
  }
}
