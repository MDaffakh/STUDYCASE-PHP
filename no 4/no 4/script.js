document.addEventListener('DOMContentLoaded', () => {
    const imageSelect = document.getElementById('image-select');
    const shapeSelect = document.getElementById('shape-select');
    const borderColorSelect = document.getElementById('border-color-select');
    const customImage = document.getElementById('custom-image');
    const imageContainer = document.querySelector('.image-container');

    function updateImage() {
        const imageUrl = imageSelect.value;
        customImage.src = imageUrl;
        if (shapeSelect.value === 'triangle') {
            customImage.style.display = 'none';
            imageContainer.classList.add('triangle');
        } else {
            customImage.style.display = 'block';
            imageContainer.classList.remove('triangle');
        }
    }

    function updateShape() {
        const shape = shapeSelect.value;
        customImage.className = shape;
        if (shape === 'triangle') {
            customImage.style.display = 'none';
            imageContainer.classList.add('triangle');
        } else {
            customImage.style.display = 'block';
            imageContainer.classList.remove('triangle');
        }
    }

    function updateBorderColor() {
        const color = borderColorSelect.value;
        customImage.style.borderColor = color;
    }

    imageSelect.addEventListener('change', updateImage);
    shapeSelect.addEventListener('change', updateShape);
    borderColorSelect.addEventListener('change', updateBorderColor);

    updateImage();
    updateShape();
    updateBorderColor();
});
