import axios from "axios";
// url de la api
axios.get('https://pokeapi.co/api/v2/pokemon/felipe')
  .then(function (response) {
    console.log(response.data);
    console.log('Success...');
  })
  .catch(function (error) {
    console.log(error);
    console.log('Error...');
  })


// Axios devuelve una promesa por defecto, no haay que sobre cargar con otra promesa 
// const miPromesa = new Promise((resolve, reject) => {
//   axios.get('https://pokeapi.co/api/v2/pokemon/charmander')
//     .then(response => {
//       resolve(response.data);
//     })
//     .catch(error => {
//       console.log(`Error ${error}`);
//       reject(error);
//     });
// });

// miPromesa
//   .then(function(response) {
//     console.log(response);
//     console.log('Success...');
//   })
//   .catch(function(error) {
//     console.log(error);
//     console.log('Error...');
//   });


