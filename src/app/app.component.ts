import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ContenedorComponent } from "./components/contenedor/contenedor.component";
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, FormularioComponent, ContenedorComponent]
})
export class AppComponent {
  title = 'super-pelis';
}
