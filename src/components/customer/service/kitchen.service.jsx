function getData(){
    let data = fetch('http://localhost:3001/kitchen')
   // let result = await data.json();
    return data;
}

module.exports = {
    getData
}