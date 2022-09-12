import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurriculumVitaeComponent } from './elements/curriculum-vitae/curriculum-vitae.component';
import { HomeComponent } from './elements/home/home.component';
import { PokemonApiComponent } from './elements/pokemon-api/pokemon-api.component';
import { PokemonCardComponent } from './elements/pokemon-api/pokemon-card/pokemon-card.component';
import { UsersComponent } from './elements/users/users.component';

const routes: Routes = [
  // {path: 'formulario', component: FormComponent},
  {path: 'curriculum-vitae', component: CurriculumVitaeComponent},
  // {path: 'login', component: LoginComponent, canActivate: [AccessGuard]},
  {path: 'pokemon', component: PokemonApiComponent},
  {path: 'pokemon/pokemonCard', component: PokemonCardComponent},
  {path: 'users', component: UsersComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
