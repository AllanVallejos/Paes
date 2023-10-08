<template>
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Registro de Cuenta</title>
    </head>
    <body>
      
      <form id="registro-form">
        <h2>Registro de cuenta</h2>
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" required />

        <label for="nombre">Apellido:</label>
        <input type="text" id="nombre" name="nombre" required />

        <label for="email">Correo Electrónico:</label>
        <input type="email" id="email" name="email" required />

        <label for="universidad">Universidad de preferencia:</label>
        <select id="universidad" name="universidad" required>
          <option value="uni1">Universidad de Talca</option>
          <option value="uni2">Universidad de Chile</option>
          <option value="uni3">Universidad Diego Portales</option>
        </select>

        <label for="carrera">Carrera:</label>
        <select id="carrera" name="carrera" required>
          <option value="carrera1">Carrera 1</option>
          <option value="carrera2">Carrera 2</option>
          <option value="carrera3">Carrera 3</option>
        </select>

        <button type="submit">Registrar Cuenta</button>
      </form>
    </body>


</template>

<style>
body {
font-family: Arial, sans-serif;
background-image: url('/fondo6.jpg'); 
background-size: cover; 
background-repeat: no-repeat; 
background-attachment: fixed; 
background-color: #f4f4f4;
margin-right:80px;

display: flex;
justify-content: flex-end ;
align-items: center;

}

h2 {
text-align: center;
font-size: 30px;
color: #000000;

}

form {
background-color: #fff;
padding: 10px;
padding-right: 50px;
padding-left: 40px;
border-radius: 5px;
box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
width: 300px;
margin-right:30px;
margin-left: 0 auto; 


}

label {
display: block;
margin-bottom: 10px;
}

input[type="text"],
input[type="email"],
select {
width: 100%;
padding: 10px;
margin-bottom: 15px;
border: 1px solid #ccc;
border-radius: 5px;
}

button[type="submit"] {

background-color: #000000;
color: #fff;
border: none;
padding: 10px 20px;
border-radius: 5px;

cursor: pointer;
}

button[type="submit"]:hover {
background-color: #0056b3;
}
</style>
