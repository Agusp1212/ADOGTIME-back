// ------------- REPRODUCCION VIDEO -------------
const contenedores = document.querySelectorAll('.adogtame-s2-div');

contenedores.forEach((contenedor) => {
    const video = contenedor.querySelector('video');

    contenedor.addEventListener('mouseenter', () => {
        video.play();
    });

    contenedor.addEventListener('mouseleave', () => {
        video.pause();
    });
});

// ------------- CONSUMO API: NOMBRE Y EMAIL -------------
// URL de la API de prueba (JSONPlaceholder)
const url = 'https://jsonplaceholder.typicode.com/users';

// Realizar la solicitud HTTP utilizando fetch
fetch(url)
  .then(response => response.json())
  .then(data => {
    data.forEach((cliente, index) => {
      // Obtén el id correspondiente al índice
      const id = `ul${index + 1}`;

      // Obtén la referencia a la lista ul con el id correspondiente
      const lista = document.getElementById(id);

      if (lista) {
        // Crear un elemento li para "Contacta a:" y los datos de la API
        const listItem = document.createElement("li");
        listItem.textContent = `Contacta a: ${cliente.name} - ${cliente.email}`;
        lista.appendChild(listItem);
      }
    });
  })
  .catch(error => console.error('Error al obtener datos de la API:', error));


