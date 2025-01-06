import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokeService } from 'src/app/services/poke.service';


@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {
  pokemon: any;
  showDetails = false; // Controla si mostramos todas las propiedades
  showOfflineError = false; // Controla si mostramos un mensaje si hay error en modo offline

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pokeService: PokeService,
  ){}

  ngOnInit(): void {
    const name = this.route.snapshot.paramMap.get('name')!;
    this.pokeService.getPokemonDetails(name).subscribe({
      next: (data) => {
        this.pokemon = data;
        this.showOfflineError = false; 
      },
      error: () => {
        this.showOfflineError = true; // Muestra el error si ocurre uno
      }
    });
  }

  toggleDetails() {
    this.showDetails = !this.showDetails;
  }

  goBack() {
    this.router.navigate(['/']);
  }
  
}
