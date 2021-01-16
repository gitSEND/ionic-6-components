import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filtro",
})
export class FiltroPipe implements PipeTransform {
  transform(
    arreglo: any[],
    texto: string = "",
    campo: string = "title"
  ): unknown {
    if (texto === "") {
      return arreglo;
    }

    if (!arreglo) {
      return arreglo;
    }

    texto = texto.toLocaleLowerCase();

    return arreglo.filter((item) =>
      item[campo].toLocaleLowerCase().includes(texto)
    );
  }
}
