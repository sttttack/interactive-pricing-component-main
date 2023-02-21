const sliderButton = document.querySelector('.round');
const slider = document.querySelector('.slider');


// Switch button Monthly to Yearly

sliderButton.addEventListener('click', (e) => {
    var price = document.getElementById('price');
    sliderButton.classList.toggle('round_on');
    if (sliderButton.classList == 'round round_on') {
        price.innerHTML = "$36.00";
    } else {
        price.innerHTML = "$16.00";
    }

});


// Changes the value of HTML value

slider.addEventListener('change', (y) => {
    var views = document.getElementById('views');
    var price = document.getElementById('price');
    if (slider.value == 0) {
        views.innerHTML = "10K PAGEVIEWS",
        price.innerHTML = "$8.00"
    } else if (slider.value == 25) {
        views.innerHTML = "50K PAGEVIEWS",
        price.innerHTML = "$12.00"
    } else if (slider.value == 50) {
        views.innerHTML = "100K PAGEVIEWS",
        price.innerHTML = "$16.00"
    }  
    else if (slider.value == 75)  {
        views.innerHTML = "500K PAGEVIEWS",
        price.innerHTML = "$24.00"
    } else if (slider.value == 100) {
        views.innerHTML = "1M PAGEVIEWS",
        price.innerHTML = "$36.00"
    }    
});