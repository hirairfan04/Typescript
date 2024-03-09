//test for equality and inequality with strings
let course='typescript';
console.log('Is course name typescript?');
console.log(course=='typescript');

//test using the lowercase function
let Case='hira';
console.log('Enter name');
console.log(Case=='Hira'.toLowerCase());

//test for equality and inequality
let Num=5;
console.log("Enter number");
console.log(Num==5);

//test for less than and greater than
let num=6;
num=2;
if(num>6)
{
    console.log('true');
}
else 
{
    console.log('false');
}

//test for less than or equal to and greater than or equal to
let numeric=27;
numeric=28;
if(numeric<=27)
{
    console.log('true');
}
else
{
    console.log('false')
}

//test using and operator
let firstnum=27;
let scndnum=28;
let thrdnum=26;
if(firstnum<scndnum && scndnum>thrdnum )
{
    console.log('true');
}
else
{
    console.log('false');
}

//test using or operator
let Firstnum=27;
let Scndnum=28;
let Thrdnum=26;
if(Firstnum<Scndnum || Scndnum<Thrdnum )
{
    console.log('true');
}
else
{
    console.log('false');
}

//test whether an item is in array or not
let names=['apple','door','car'];
if(names.includes('apple'))
{
  console.log('Apple is present in your array');
}
if(names.includes('ball'))
{
  console.log('Ball is present in your array');
}
if(names.includes('car'))
{
  console.log('Car item is present in your array');
}
if(names.includes('door'))
{
  console.log('Door item is present in your array');
}