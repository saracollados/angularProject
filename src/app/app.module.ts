import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AppMaterialModule } from './app-material.module';

import { AppComponent } from './app.component';
import { FooterComponent } from './elements/footer/footer.component';
import { MenuComponent } from './elements/menu/menu.component';
import { CurriculumVitaeComponent } from './elements/curriculum-vitae/curriculum-vitae.component';
import { HomeComponent } from './elements/home/home.component';
import { PokemonApiComponent } from './elements/pokemon-api/pokemon-api.component';
import { PokemonCardComponent } from './elements/pokemon-api/pokemon-card/pokemon-card.component';
import { UsersComponent } from './elements/users/users.component';
import { DirectivaPropiaDirective } from './directives/directivaPropia/directiva-propia.directive';
import { ConexionAPIService } from './services/conexion-api.service';
import { FilterPokemonPipe } from './pipes/filter-pokemon.pipe';
import { StatNamesPipe } from './pipes/stat-names.pipe';
import { UsersPipe } from './pipes/users.pipe';
import { SpecsPipe } from './pipes/specs.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MenuComponent,
    CurriculumVitaeComponent,
    HomeComponent,
    PokemonApiComponent,
    PokemonCardComponent,
    UsersComponent,
    DirectivaPropiaDirective,
    FilterPokemonPipe,
    StatNamesPipe,
    UsersPipe,
    SpecsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppMaterialModule
  ],
  providers: [ConexionAPIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
