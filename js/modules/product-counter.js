const productNumber = document.querySelector('.number');
let counter = 23;

async function productCounter() {
    const interval = setInterval(function () {
        counter --;
        productNumber.innerText = counter;

        if (counter === 0){
            clearInterval(interval)
        }
    }, 60000);
}

productCounter();

