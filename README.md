# API Github
Obtener los datos de un usuario introducido por parametro de la API de Github.

## Instrucciones de uso
Seguir las instrucciones

### Instalacion

```
npm i proyecto-1b-api-github-infrony
```

### Uso
```
const api = require('proyecto-1b-api-github-infrony');

api.obtenerDatosDeUsuario('infrony')
    .then(
        respuesta => console.log(respuesta)
    )
    .catch(error => console.log(error));
```