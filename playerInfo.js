const data = [
    {id:1, name:'Michael Jordan', sports:'Basketball', description:'Basketball Legend'},
    {id:2, name:'Kobe Bryant', sports:'Basketball', description:'He plays Basketball really well'},
    {id:3, name:'Taylor Sanders', sports:'Volleyball', description:'He got a cool tattoo'}
];

const list = ()=>{
    return [...data]
}

const find = (id) => {
    const info = data.find(player => player.id === +id)
    return {...info}
}

module.exports = { list:list, find:find };