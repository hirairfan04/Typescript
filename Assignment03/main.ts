let city = 'karachi';
console.log(city .toUpperCase());
console.log(city. toLowerCase());
function TitleCase(city){
    city=city.toLowerCase().split(" ")
    for(let i=0; i<city.length; i++){
        city[i] = city[i].charAt(0).toUpperCase() + city[i].slice(1);
    }
    return city.join(" ");
}

console.log(TitleCase(city));