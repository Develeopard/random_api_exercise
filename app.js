//https://ghibliapi.herokuapp.com/#

const body = document.querySelector('body');

const subBtn = document.querySelector('#subBtn');

let number = '1';


window.addEventListener('DOMContentLoaded', function(){
    subBtn.addEventListener('click', function(event){
    async function getData(){
        const apiLink = `https://ghibliapi.herokuapp.com/films`;
        
        const response = await fetch(apiLink);
        const data = await response.json();
        console.log(data);
        
        // data.forEach(obj => {
            //     console.log(obj);
            // })
            
            const {title, director, release_date} = data[number];
            
            // console.log(data[number].title);
            console.log(title);
            console.log(director);
            console.log(release_date);
            
        }
        
            event.preventDefault();
            
            number = document.querySelector('input[type="number"]').value;
            
            console.log(number);
            getData();
        });
        
});
