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
  loading: boolean;
  buscar(termino: string) {
    this.loading = true;
    this.spotifyService.getArtistas(termino)
      .subscribe( (data: any[]) => {
        this.artistas = data;
        this.loading = false;
      });
  }
}
