//https://ghibliapi.herokuapp.com/#

const body = document.querySelector('body');

const subBtn = document.querySelector('#subBtn');
const ttl = document.querySelector('.title');
const dir = document.querySelector('.director');
const releaseDate = document.querySelector('.release-date');
const err = document.querySelector('.error')

let number = '1';



    subBtn.addEventListener('click', function(event){


        //fetching data api
        async function getData(){
            const apiLink = `https://ghibliapi.herokuapp.com/films`;
            
            const response = await fetch(apiLink);
            const data = await response.json();
            console.log(data);
        
            
            const {title, director, release_date, vehicles} = data[number];
            
            
            console.log(title);
            console.log(director);
            console.log(release_date);

            //problem! how to extract data from another api link stored in current one?
            console.log(vehicles[0]);

            //display data
            ttl.innerHTML = `<p class="title">${title}</p>`;
            dir.innerHTML = `<p class="director">${director}</p>`;
            releaseDate.innerHTML = `<p class="title">${release_date}</p>`;
            
        }
        
        event.preventDefault();
        
        number = document.querySelector('input[type="number"]').value;
        
        if (number < 0 || number > 21 || number === ''){
            //make an error message and make it disappear after few seconds - setTimeout()
            console.log('Please enter number between 0 and 21');
        }
        console.log(number);


        getData();

        });
        

