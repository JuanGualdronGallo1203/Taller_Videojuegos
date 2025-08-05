//✅ Parte 3: Consultas sencillas (sin operadores)

//1. Muestra **todos** los videojuegos.
db.videojuegos.find()

//Muestra los videojuegos cuyo desarrollador sea "Nintendo".
db.videojuegos.find({"plataforma": "Nintendo Switch"})

//Muestra los videojuegos que se jueguen en la consola "PS5".
db.videojuegos.find({"plataforma": "PlayStation 5"})