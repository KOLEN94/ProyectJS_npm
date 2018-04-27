#Platzom

Platzom es un idioma inventado para 
el [Curso de Fundamentos de JavaScript]
(https://platzi.com/clases/fundamentos-javascript/) de
[Platzi](https://platzi.com), el mejor lugar
de educacion online.
## Descripcion del idioma

- Si la palabra termina en "ar", se le quitan esos 2 caracteres
- Si la palabra inicia con Z, se le añade "pe" al final
- Si la palabra traducida tiene 10 o mas caracteres, se debe partir a la mitad con un guion del medio
- Por ultimo si la palabr original es un palíndromo, ninguna regla anterio cuenta y se devuelve la misma palabra intercalando mayúsculas y minúculas

## Instalacion

```
npm install ProyectJS_npm
```

## USO
```
import ProyectJS_npm from 'ProyectJS_npm'
ProyectJS_npm("Programas") // Program

console.log(platzom ("Programar"))
console.log(platzom ("Zorro"))
console.log(platzom ("Zarpar"))
console.log(platzom ("abecedario"))
console.log(platzom ("sometemos"))
```

## Creditos
- [Teofilo Rosales Gama]

## Licencia
[MIT](https://opensource.org/licenses/MIT)