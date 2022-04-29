 let data = [
    {
        name : 'Matero',
        age: '30'
    }, 
    {
        name : 'Jamie',
        age: '20'
    },
    {
        name : 'Agah',
        age: '35'
    },
    {
        name : 'Simon',
        age: '30'
    },
    {
        name : 'Selehattin',
        age: '10'
    },
    {
        name : 'Nuray',
        age: '20'
    },
];


const info = document.querySelector('#info');

let details = data.map(function(item){
    return(
        '<div>' + item.name + ' ' + 'is ' +  item.age + ' years old '    +  '</div>'
    )
})

info.innerHTML = details.join('\n');
