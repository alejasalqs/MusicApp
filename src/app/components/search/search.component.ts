import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent  {

  constructor(private spotifyService: SpotifyService) { }

  artistas: any[] = [];

  buscar(termino: string) {
    this.spotifyService.getArtista(termino)
      .subscribe( (data: any[]) => {
        this.artistas = data;
      });
  }
}
