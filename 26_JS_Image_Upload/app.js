//image upload
let uploadForm = document.querySelector('#upload-form');
uploadForm.addEventListener('submit', function () {
    // To get the exact image file
    let imageFile = document.querySelector('#customFile').files[0]; //file content
    let imageName = imageFile.name; //name on the file

    displayImage();
});
