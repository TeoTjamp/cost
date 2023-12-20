/* Pour que la fleche au milieu elle tourne autour des elements */

const triangleImages = document.querySelectorAll('.triangle-image');

    triangleImages.forEach(image => {
        image.addEventListener('mouseover', () => {
            document.querySelector('.center-image').style.transform = `rotate(${getAngle(image)}deg)`;
        });
    });

    function getAngle(target) {
        const center = document.querySelector('.center-image');
        const centerRect = center.getBoundingClientRect();
        const targetRect = target.getBoundingClientRect();

        const angle = Math.atan2(targetRect.top - centerRect.top, targetRect.left - centerRect.left) * (180 / Math.PI);

        return angle;
    }

    /* Fin de la fleche au milieu elle tourne autour des elements */