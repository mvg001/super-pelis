import { Component } from '@angular/core';
import { FormularioComponent } from "../formulario/formulario.component";
import { ContenedorComponent } from "../contenedor/contenedor.component";

@Component({
    selector: 'app-principal',
    standalone: true,
    templateUrl: './principal.component.html',
    styleUrl: './principal.component.scss',
    imports: [FormularioComponent, ContenedorComponent]
})
export class PrincipalComponent {

}
