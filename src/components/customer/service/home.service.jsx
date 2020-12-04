function getData(){
    let data = fetch('http://localhost:3001/home')
   // let result = await data.json();
    return data;
}

module.exports = {
    getData
}