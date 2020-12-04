function addUser(data){
    var formData = new  FormData(data);
    console.log(data);
    
    fetch('http://127.0.0.1:8080/Web/user', {
       method: 'POST', // or 'PUT'
       headers: {
           "contectType": false,
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
    addUser
}