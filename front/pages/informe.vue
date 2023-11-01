<template>
    <div class="report-container">
      <div class="card">
        <h1>Informe de Desempeño</h1>
        <h3>Este informe de desempeño es un documento que resume el progreso hacia metas y objetivos, utilizando métricas, destacando tus logros y proporcionando recomendaciones para mejoras futuras. </h3>
        <button @click="generatePDF" class="download-button">Descargar Informe</button>
      </div>
    </div>
  </template>
  
  <script>
  import jsPDF from 'jspdf';
  import Swal from 'sweetalert2'

  export default {
    methods: {
      
      generatePDF() {
        const doc = new jsPDF();
        const img = new Image();
        
        doc.setFont('Times New Roman');
        doc.setFillColor(252, 75, 8); 
        doc.rect(0, 0, 210, 25, 'F'); 
        doc.setFontSize(20);
        doc.setTextColor(255, 255, 255); 
        doc.text('Informe de Desempeño', 70, 15);

      
        doc.setDrawColor(0);
      

        
        doc.setFontSize(15);
        doc.setTextColor(0); 
        doc.text('Aqui va el nombre completo del estudiante', 10, 40);
        doc.text('Correo del estudiante', 10, 50);
        doc.text('Universidad y Carrera 1', 10, 60);
        doc.text('Universidad y Carrera 2', 10, 70);
        doc.line(10, 80, 200, 80); 
        doc.text('Ensayos PAES realizados:', 10, 90);
        doc.text('Puntaje más alto: 987', 10, 100);
        doc.text('Puntaje más bajo: 679 ', 10, 110);

        doc.line(5, 120, 205, 120); 
        doc.line(5, 120, 5, 190); 
        doc.line(5, 120, 130, 120); 
        doc.line(205, 120, 205, 190); 
        doc.text('Informacion de las carreras: ', 70, 130);
        doc.text('Nombre U', 10, 150);
        doc.text('Nombre carrera ', 10, 160);
        doc.text('Ponderaciones', 10, 170);
        doc.text('¿Ingresa a carrera? Si', 10, 180);

        
        doc.text('Nombre U', 90, 150);
        doc.text('Nombre carrera ', 90, 160);
        doc.text('Ponderaciones', 90, 170);
        doc.text('¿Ingresa a carrera? Si', 90, 180);

        doc.line(5, 190, 205, 190); 
     
        const aspectRatio = 4 / 3;
        const ancho = 100;
        const alto = ancho / aspectRatio;
        img.src = 'fotoinforme.png';
        doc.addImage(img, 'JPEG', 110, 200, alto, ancho); 

        
        const pdfBlob = doc.output('blob');
  

        const url = window.URL.createObjectURL(pdfBlob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'mi-informe-de-desempeno.pdf'; 
        a.click();
        Swal.fire({
                icon: 'success',
                title: 'Informe descargado con éxito',
                text: '',
                            })
 
        window.URL.revokeObjectURL(url);
      },
    },
  };
  </script>
  
  <style>
  .report-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

    background-size: cover;
    background-color: #f3b195e9
  }
  
  .card {
    
    padding: 20px;
    border-radius: 10px;
    text-align: center;
  }
  
 
  h3 {
    font-size: 16px;
  
  }
  
  .download-button {
    background-color: #c03a00e9;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  </style>
  