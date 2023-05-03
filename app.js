const respuestas = [
    "Mañana",
    "Dentro de una semana",
    "En un mes",
    "En tres meses",
    "El próximo año",
    "Nunca",
    "Vuelve a preguntar"
  ];
  
  const form = document.querySelector('form');
  const preguntaInput = document.querySelector('#pregunta');
  const respuestaContainer = document.querySelector('#respuesta');
  
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    const randomIndex = Math.floor(Math.random() * respuestas.length);
    const respuesta = respuestas[randomIndex];
    respuestaContainer.textContent = respuesta;
  });
  
  