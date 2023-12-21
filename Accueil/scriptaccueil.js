/* Pour que la fleche au milieu elle tourne autour des elements */

document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.triangle-image');
    const arrow = document.querySelector('.center-image img');
  
    images.forEach(image => {
      image.addEventListener('click', function () {
        const imageRect = this.getBoundingClientRect();
        const arrowRect = arrow.getBoundingClientRect();
        
        const angle = Math.atan2(imageRect.top - arrowRect.top, imageRect.left - arrowRect.left) * (180 / Math.PI);
        
        arrow.style.transform = `rotate(${angle}deg)`;
      });
    });
  });
 

  document.addEventListener('DOMContentLoaded', function () {
    const triangleImages = document.querySelectorAll('.Recherche .triangle-image');
    const imageZImages = document.querySelectorAll('.textdroite .imageZ img');
    const textPElements = document.querySelectorAll('.textdroite .premierf .textP');
    const arrow = document.querySelector('.Recherche .center-image img');
  
    function resetOpacity() {
      // Réinitialisez l'opacité de toutes les images de la classe triangle-image
      triangleImages.forEach(otherTriangleImage => {
        otherTriangleImage.classList.remove('selected');
        otherTriangleImage.style.opacity = '1';
      });
  
      // Réinitialisez l'opacité de toutes les images de la classe imageZ
      imageZImages.forEach(otherImageZImage => {
        otherImageZImage.style.opacity = '1';
      });
  
      // Réinitialisez l'opacité du texte
      textPElements.forEach(textPElement => {
        textPElement.style.opacity = '1';
      });
  
      // Réinitialisez l'opacité de la flèche
      arrow.style.opacity = '1';
    }
  
    triangleImages.forEach((triangleImage, index) => {
      triangleImage.addEventListener('click', function () {
        resetOpacity();
  
        // Ajoutez la classe "selected" à l'image triangle cliquée
        this.classList.add('selected');
  
        // Appliquez une opacité réduite aux autres images de la classe triangle-image (sauf image 4)
        triangleImages.forEach((otherTriangleImage, i) => {
          if (otherTriangleImage !== this && !otherTriangleImage.classList.contains('center-image')) {
            otherTriangleImage.style.opacity = '0.5';
            // Appliquez également l'opacité correspondante aux images de la classe imageZ
            imageZImages[i].style.opacity = '0.5';
            // Appliquez l'opacité correspondante au texte
            textPElements[i].style.opacity = '0.5';
          }
        });
      });
    });
  
    // Ajoutez également une gestion du clic pour les images de la classe imageZ
    imageZImages.forEach((imageZImage, index) => {
      imageZImage.addEventListener('click', function () {
        resetOpacity();
        
        // Appliquez l'opacité correspondante aux images de la classe triangle-image
        triangleImages.forEach((triangleImage, i) => {
          if (index === i && !triangleImage.classList.contains('center-image')) {
            triangleImage.style.opacity = '0.5';
            // Appliquez l'opacité correspondante au texte
            textPElements[i].style.opacity = '0.5';
          }
        });
      });
    });
  });
  
  
  
  
  
  
    /* Fin de la fleche au milieu elle tourne autour des elements */