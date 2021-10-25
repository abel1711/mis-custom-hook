# useFetch

```
const state = useFetch( url );
```

Dentro del state podemos desestructurar {data, loading, error}

```
const {data, loading, error} = useFetch( url );

```

data: retorna la informacion de la peticion a la url enviada.-

loading: inicialnte en false hasta que se carga la data y se 
establece en true.-

error: contiene 'No se pudo realizar la petición' cuando el fetch fallo.-