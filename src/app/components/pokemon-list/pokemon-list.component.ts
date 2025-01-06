import { Component, OnInit } from '@angular/core';
import { PokeService } from 'src/app/services/poke.service';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
  animations: [
    trigger('listAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-20px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
  ],
})
export class PokemonListComponent {
  pokemons: any[] = [];

  isLoading = true; // Spinner
  viewMode: 'table' | 'cards' = 'cards'; // Modo de vista

  constructor(private pokeService: PokeService){}

  ngOnInit(): void {
    this.pokeService
    .getPokemonList()
    .subscribe((data: any) => {
      this.pokemons = data.results;
      this.isLoading = false;
    });
  }

  toggleViewMode(mode: 'table' | 'cards') {
    this.viewMode = mode;
  }
}
