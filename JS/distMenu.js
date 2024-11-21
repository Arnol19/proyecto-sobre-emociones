function fmenu(page) {
  fetch(`${page}.html`)
      .then(response => response.text())
      .then(data => {
          document.getElementById('cuerpoPag').innerHTML = data;
      }).catch(error => console.log('Error al cargar la página', error));
};

$(document).ready(function(){
 
  $('#registroForm').parsley({
      trigger: 'input'
  });
  $('input').on('input', function () {
      $(this).parsley().validate();
  });

  $('#registroForm').on('submit', function(event){

      event.preventDefault();
      if ($(this).parsley().isValid()){ 
          const nroDoc = document.getElementById('nroDoc').value;
          console.log('Nro.Documento: ', nroDoc);
          const tipoDoc = document.getElementById('tipoDoc').value;
          console.log('Tipo Documento: ', tipoDoc);
          const nombres = document.getElementById('nombres').value;
          console.log('Nombre: ', nombres);
          console.log ('Formulario valido. Los datos se enviaran a donde tu le digas ....');

          $('#exampleModal').modal('hide'); 
          alert('Su perfil ha sido guardado con éxito');

          $('#exampleModal').on('hidden.bs.modal', function () {
              $('#registroForm')[0].reset(); // Restablece todos los campos del formulario a sus valores iniciales
              $('#registroForm').parsley().reset(); // Restablece cualquier mensaje de error de Parsley
          });
      }
  }); 
});

// Obtener los elementos solo una vez
const insertImageButton = document.getElementById('insertImageButton');
const insertImageUpload = document.getElementById('insertImageUpload');
const imagePreview = document.getElementById('imagePreview');
const changeImageButton = document.getElementById('changeImageButton');
const changeImageUpload = document.getElementById('changeImageUpload');
const clearImageButton = document.getElementById('clearImageButton'); // Botón para limpiar
const closeButton = document.getElementById('closeButton'); // Botón de "Cerrar" o "Close"

// Función común para manejar la carga de imágenes
function handleImageUpload(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      imagePreview.src = e.target.result; // Actualiza la imagen de vista previa
    };
    reader.readAsDataURL(file); // Convierte la imagen en una URL de datos
  }
}

// Subir Imagen - Abrir selector de archivos
insertImageButton.addEventListener('click', () => {
  insertImageUpload.click(); // Abre el selector de archivos
});

// Cambiar Imagen - Abrir selector de archivos
changeImageButton.addEventListener('click', () => {
  changeImageUpload.click(); // Abre el selector de archivos para cambiar la imagen
});

// Manejar la carga de imágenes para "Subir Imagen" y "Cambiar Imagen"
insertImageUpload.addEventListener('change', handleImageUpload);
changeImageUpload.addEventListener('change', handleImageUpload);

// Función para limpiar la imagen y el campo de selección de archivo
clearImageButton.addEventListener('click', () => {
  insertImageUpload.value = ''; // Limpia el campo de archivo de "Subir Imagen"
  changeImageUpload.value = ''; // Limpia el campo de archivo de "Cambiar Imagen"
  imagePreview.src = ''; // Restablece la imagen de vista previa
});

// Limpiar al cerrar (si se cierra el modal o el contenedor)
closeButton.addEventListener('click', () => {
  insertImageUpload.value = ''; // Limpia el campo de archivo
  changeImageUpload.value = ''; // Limpia el campo de archivo
  imagePreview.src = ''; // Restablece la vista previa de la imagen
});
