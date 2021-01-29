//image upload
let uploadForm = document.querySelector('#upload-form');
uploadForm.addEventListener('submit', function () {
    // To get the exact image file
    let imageFile = document.querySelector('#customFile').files[0]; //file content
    let imageName = imageFile.name; //name on the file

    //to read the image file
    let reader = new FileReader(); //FileReader object lets web applications asynchronously read the contents of files (or raw data buffers) stored on the user's computer, using File or Blob objects to specify the file or data to read.
    reader.readAsDataURL(imageFile); //takes the imageFile an reads it as data 

    reader.addEventListener('load', function () {
        if (this.result && localStorage) {  //if local storage is available and file has some content
                                        //if any data is available, fetch it, else return empty array for the first time 
            let imagesList = localStorage.getItem('images') ? JSON.parse(localStorage.getItem('images')) : [];
            imagesList.push(this.result);
            localStorage.setItem('images', JSON.stringify(imagesList));
        }
    })
    displayImage();
});

//display image
let displayImage = () => {
    let imagesList = localStorage.getItem('images') ? JSON.parse(localStorage.getItem('images')) : [];
    
};
displayImage();

