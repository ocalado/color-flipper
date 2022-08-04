const colors = ['blue', 'green', 'rgba(133,122,200)', '#f15025', 'red', 'brown', '#fff'];

const btn = document.getElementById('btn'); //pegar a tag button pelo seu id
const color = document.querySelector('.color'); 

btn.addEventListener("click",() => {
    //get random number between 0 - 3(array's elements number)
    const randomNumber = Math.floor(Math.random() * colors.length);
    document.body.style.background = colors[randomNumber];
    color.textContent = colors[randomNumber];
    color.style.color = colors[randomNumber]
})
