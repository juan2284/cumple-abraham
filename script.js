document.addEventListener('DOMContentLoaded', () => {

  window.addEventListener('load', () => {
    const pantallaCarga =  document.querySelector('.carga');
    pantallaCarga.classList.add('d-none');
  });

  const cards = document.querySelectorAll('.card');
  const imgCentral = document.querySelector('.central img');
  
  cards.forEach(card => {
    card.addEventListener('click', (e) => {
      imgCentral.src = e.target.src;
    });
  });

});