# Figura
Sitio Web y Galería para grupo estudiantil de Figura

Sitio potencial: figuracsf.media

---
### [Liga para el sitio](http://ctrl-alt-tec.github.io/Figura)

------

# Exposiciones
Para la parte de exposiciones, se utilizará la [Ctrl Alt Tec API](https://github.com/ctrl-alt-tec/api) conectada con Google Spreadsheets y Google Forms. La estructura de datos será la siguiente:
|    Propiedad   |   Tipo de dato   |   Descripción   |
| ---------------| ---------------- | ---------------- |
| artist              |  String[]            | Nombre de artista(s) |
| artMedium    | String[]             |  Material utilizado (óleo, acuarela, acrílico) |
| artForm         | Enum               | Tipo de obra de arte. Los tipos deberán definirse por FIgura |
| dimensions  | [ float, float ]    | Array con el tamaño en `cm`  |
| abstract         |  Text                 | Descripción del trabajo |
| dateCreated | Date                 | Fecha de creación |
| dateModified | Date              | (Opcional) Fecha de modificación |
| datePublished | Date            | Fecha en que se subió a la plataforma |
| resource | String (url)         | Dirección URL que contiene el recurso |
| feedback | Feedback[]       | Array con de Objetos `Feedback` con calificación según criterios, comentarios, juez, etc. Podemos inspirarnos en el sistema de @Quanta con PaperPen |
| tags        |  String[]            | Array con las etiquetas

```js
galeria = [
    {
         artist: 'Charles O'Rear', 
         artistMedium: undefined,
         artForm: 'photography',
         dimensions: [1920, 1080], 
         abstract: 'Green hill and blue sky with clouds', 
         dateCreated: "1996-01-01T00:00:00.000Z",
         datePublished: "2020-08-24T03:24:09.224Z",
         resource: "https://upload.wikimedia.org/wikipedia/en/2/27/Bliss_%28Windows_XP%29.png",
         feedback: [],
         tags: ['nature', 'hills', 'green', 'wallpaper']
    }
]
```
