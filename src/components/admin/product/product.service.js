function addProduct(data){
    var formData = new  FormData(data);
    console.log("formData:-",formData.get());
    
    fetch('http://127.0.0.1:8080/Web/product', {
       method: 'POST', // or 'PUT'
       headers: {
           "contectType": false,
           "enctype":"multipart/form-data",
           "processData":false
       },
       body: formData,
   })
   .then(response => response.json())
   .then(data => {
       console.log('Success:', data);
   })
   .catch((error) => {
       console.error('Error:', error);
   });  
}

module.exports = {
    addProduct
}