const sliderButton = document.querySelector('.round');

sliderButton.addEventListener('click', (e) => {
    sliderButton.classList.toggle('round_on');
    if (sliderButton.class == "round") {
        sliderButton.class = "round_on";
    } else if (sliderButton.includes('round_on')) {
      sliderButton.classList.remove('round_on')  
    }
} );
