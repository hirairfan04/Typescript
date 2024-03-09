let magician_names=['John','Smith','Edward','Henry'];
function show_magicians(magician_names){
for(let i=0; i<magician_names.length; i++)
{
    console.log(magician_names[i]);
}}
function make_great(magician_names) {
    for(let i=0; i<magician_names.length; i++){
        console.log(`The great ${magician_names[i]}`);
    }
}
show_magicians(magician_names);
make_great(magician_names);