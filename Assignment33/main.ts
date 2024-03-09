let ordinals=[1,2,3,4,5,6,7,8,9];
for(let i=0; i<ordinals.length; i++)
{
    if(ordinals[i]==1)
    {
        console.log('1st');
    }
    if(ordinals[i]==2)
    {
        console.log('2nd');
    }
    if(ordinals[i]==3)
    {
        console.log('3rd');
    }
}
        for(let i=3;i<ordinals.length; i++)
        {
        console.log(`${ordinals[i]}th`);
        }