import figlet from 'figlet';
import axios from 'axios';

let number = Math.floor(Math.random() * 1008 + 1)
axios.get('https://pokeapi.co/api/v2/pokemon/' + number)
    .then(function(response) {
        let name = response.data.name
        figlet(name, function(err, data) {
            if (err) {
                console.log('Something went wrong...');
                console.dir(err);
                return;
            }
            console.log(data)
        });
    })
    .catch(function(error) {    
    })