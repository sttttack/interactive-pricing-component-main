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


slider.addEventListener('click', (y) => {
    var views = document.getElementById('views');
    if (slider.value < 50) {
        views.innerHTML = "30K PAGEVIEWS"
    } else if (slider.value > 50) {
        views.innerHTML = "70K PAGEVIEWS"
    }
});






// - 10K pageviews / $8 per month
// - 50K pageviews / $12 per month
// - 100K pageviews / $16 per month
// - 500k pageviews / $24 per month
// - 1M pageviews / $36 per month


var rates = [
    { 
        pageviews: "10k pageviews",
        permonth: "$8 per month"
    },
    { 
        pageviews: "50k pageviews",
        permonth: "$12 per month"
    },
    { 
        pageviews: "100k pageviews",
        permonth: "$16 per month"
    },
    { 
        pageviews: "500k pageviews",
        permonth: "$24 per month"
    },
    { 
        pageviews: "1M pageviews",
        permonth: "$36 per month"
    }
]