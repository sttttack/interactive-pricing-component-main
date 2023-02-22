"use strict";

const sliderButton = document.querySelector('.round');
const slider = document.querySelector('.slider');


// Switch button Monthly to Yearly

sliderButton.addEventListener('click', (e) => {
    var price = document.getElementById('price');
    sliderButton.classList.toggle('round_on');
    if (sliderButton.classList == 'round round_on') {
        calculateYearly();
    } else {
        changeValues(),
        document.getElementById('month').innerHTML = '/ monthly'
    }

});

// Discount Changes

slider.addEventListener('change', (values) => {

    if (sliderButton.classList == 'round round_on') {
        calculateYearly();
    } else {
        changeValues();
    }

})

// Changes the value of HTML value

function changeValues() {
    if (slider.value == 0) {
        views.innerHTML = "10K PAGEVIEWS",
        price.innerHTML = "$8.00"
    }   else if (slider.value == 25) {
        views.innerHTML = "50K PAGEVIEWS",
        price.innerHTML = "$12.00"
    } else if (slider.value == 50) {
        views.innerHTML = "100K PAGEVIEWS",
        price.innerHTML = "$16.00"
    }  else if (slider.value == 75)  {
        views.innerHTML = "500K PAGEVIEWS",
        price.innerHTML = "$24.00"
    } else if (slider.value == 100) {
        views.innerHTML = "1M PAGEVIEWS",
        price.innerHTML = "$36.00"
    } 
}

// Changes the value of Yearly HTML

function calculateYearly() {
    if (slider.value == 0) {
        views.innerHTML = "10K PAGEVIEWS",
        price.innerHTML = "$24.00"
        document.getElementById('month').innerHTML = '/ yearly'
    }   else if (slider.value == 25) {
        views.innerHTML = "50K PAGEVIEWS",
        price.innerHTML = "$36.00"
        document.getElementById('month').innerHTML = '/ yearly'
    } else if (slider.value == 50) {
        views.innerHTML = "100K PAGEVIEWS",
        price.innerHTML = "$48.00"
        document.getElementById('month').innerHTML = '/ yearly'
    }  else if (slider.value == 75)  {
        views.innerHTML = "500K PAGEVIEWS",
        price.innerHTML = "$72.00"
        document.getElementById('month').innerHTML = '/ yearly'
    } else if (slider.value == 100) {
        views.innerHTML = "1M PAGEVIEWS",
        price.innerHTML = "$108.00"
        document.getElementById('month').innerHTML = '/ yearly'
    } 
}



