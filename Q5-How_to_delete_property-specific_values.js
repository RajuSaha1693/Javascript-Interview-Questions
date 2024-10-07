//Q5-How_to_delete_property-specific_values.js
/* 
property specific values can be be deleted from the object using the delete keyword, which delete the property as 
well as the value
*/

const superHero={
    name:'Batman',
    realName:'Bruce Wayne',
    power:'Wealth & Technology',
    city:'Gotham'
}
console.log(superHero);
/*{
    name: 'Batman',
    realName: 'Bruce Wayne',
    power: 'Wealth & Technology',
    city: 'Gotham'
  }
*/
delete superHero.realName

console.log(superHero); //{ name: 'Batman', power: 'Wealth & Technology', city: 'Gotham' }