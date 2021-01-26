'use strict'

/**
 * FETCH (AJAX) Y PETICIONES A SERVICIOS / API REST
 * 
 * PROMESAS, PERMITE EVITAR LOS CALLBACK (.THEN)
 *    NOTA: Se usa mucho para leer archivos, enviar/recibir por AJAX
 */

 var divUser = document.querySelector('#usuarios');
 // INVOCAR A API EXTERNA FAKE

 //fetch('https://jsonplaceholder.typicode.com/users')
  getUsuarios()
    .then(data => data.json())
    .then(users => {
      listadoUsuarios(users.data);
      return getInfo();
      })
      .then(data => {
        console.log('estudiante: '+data);
        mostrarStudent(data);
        return getUsuarioJanet();
      })
      .then(data => data.json())
      .then(user =>{
        console.log(user);
        mostrarJanet(user.data);
      });

  function getUsuarios(params) {
    return fetch('https://reqres.in/api/users');
  }

  function getUsuarioJanet(){
    return fetch('https://reqres.in/api/users/2');
  }

  // CREACION DE PROMESAS
  function getInfo() {
    var estudiante = {
      nombre: 'Denis',
      apellidos: 'Rocher',
      url: 'https://github.com/DenisRocher'
    };
    return new Promise((resolve, reject) =>{
      var estudiante_str = '';      
      setTimeout(function(){
        estudiante_str = JSON.stringify(estudiante);
        if (typeof estudiante_str != 'string' || estudiante_str =='') return reject('error estudiante_str');
        return resolve(estudiante_str);
      }, 3000);
    })
  };

  // JSON con método .map
  function listadoUsuarios(usuarios) {
    usuarios.map((users,i) => {
      let nombre = document.createElement('h2');
      nombre.innerHTML = i + '. '+ users.first_name +' ' +users.last_name;
      divUser.append(nombre);
      document.querySelector('.loading').style.display = "none";
      }
    )
  };

  function mostrarStudent(user){
      let nombreStd = document.createElement('h4');
      console.log('mostrarStudent '+user);
      var student = JSON.parse(user);
      nombreStd.innerHTML = student.nombre +' ' +student.apellidos +' ' +student.url;
      document.querySelector('#student').appendChild(nombreStd);
      document.querySelector('#student .loading').style.display = "none";
  }

  function mostrarJanet(user){
      let nombre = document.createElement('h4');
      let avatar = document.createElement('img');

      nombre.innerHTML = user.first_name +' ' +user.last_name;
      document.querySelector('#janet').appendChild(nombre);
      avatar.src = user.avatar;
      avatar.width = '100';
      document.querySelector('#janet').appendChild(avatar);
      document.querySelector('#janet .loading').style.display = "none";
  }

    // Se lee todo el JSON con método for (index in)
    /**
     * for (let index in usuarios) {
     var usuarios =users.data;
     var parafo = document.createElement('p');
     parafo.append(usuarios[index].first_name + ' - ' + usuarios[index].last_name);
     divUser.append(parafo);
    */
