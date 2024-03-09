var magician_names = ['John', 'Smith', 'Edward', 'Henry'];
function make_great(magician_names) {
    for (var i = 0; i < magician_names.length; i++) {
        console.log("The great ".concat(magician_names[i]));
    }
}
make_great(magician_names);
