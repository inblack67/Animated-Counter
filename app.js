const figures = document.querySelectorAll('#figure')

const speed = 200;

figures.forEach(counter => {
    const updateCounter = () => {

        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = Math.ceil(target / speed);

        if(count < target){
            counter.innerText = count + increment;
            setTimeout(updateCounter, 1);
        }
        else{
            counter.innerText = target;
        }
    }
    updateCounter();
})