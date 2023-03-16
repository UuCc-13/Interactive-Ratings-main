
const selectedRound = document.querySelector("#selected-round");
const submitBtn = document.getElementById('submit');
const container2 = document.querySelector('.container2');


const buttons = document.querySelectorAll('.round');
buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const clickedButton = event.target;
    const rating = clickedButton.dataset.value;
    // display rate value in span
    selectedRound.innerHTML = rating;
    
    // remove active class from all buttons
    buttons.forEach((button) => {
      button.classList.remove('active');
    });

    // add active class to clicked button
    clickedButton.classList.add('active');
  });
});

  const card1 = document.querySelector('.Container');
  const card2 = document.querySelector('.Container-2');

  submitBtn.addEventListener('click', function() {
    card1.style.display = 'none';
    card2.style.display = 'block';
  });