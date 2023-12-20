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
    const arrow = document.querySelector('.Recherche .center-image img');
  
    function resetOpacity() {
      // reduire l'opacité de toutes les images de la classe triangle-image
      triangleImages.forEach(otherTriangleImage => {
        otherTriangleImage.classList.remove('selected');
        otherTriangleImage.style.opacity = '1';
      });
  
      // reduire l'opacité de toutes les images de la classe imageZ
      imageZImages.forEach(otherImageZImage => {
        otherImageZImage.style.opacity = '1';
      });
  
      // garder l'opacité de la flèche intacte
      arrow.style.opacity = '1';
    }
  
    triangleImages.forEach((triangleImage, index) => {
      triangleImage.addEventListener('click', function () {
        resetOpacity();
  
        // créer une classe pour l'image choisi
        this.classList.add('selected');
  
        // Appliquer une opacité réduite aux autres images de la classe triangle-image (sauf image 4)
        triangleImages.forEach((otherTriangleImage, i) => {
          if (otherTriangleImage !== this && !otherTriangleImage.classList.contains('center-image')) {
            otherTriangleImage.style.opacity = '0.5';
            // pareil images de la classe imageZ
            imageZImages[i].style.opacity = '0.5';
          }
        });
      });
    });
  
    // pour faire en sorte que cela ce reinitialise au clique
    imageZImages.forEach((imageZImage, index) => {
      imageZImage.addEventListener('click', function () {
        resetOpacity();
        
        // opacité correspondante aux images de la classe triangle-image
        triangleImages.forEach((triangleImage, i) => {
          if (index === i && !triangleImage.classList.contains('center-image')) {
            triangleImage.style.opacity = '0.5';
          }
        });
      });
    });
  });
  
  
  
  
  
  
    /* Fin de la fleche au milieu elle tourne autour des elements */