const container = document.querySelector('.my-container');

//to extract the id of superhero from link
function getId(id) {
    const url = new URLSearchParams(window.location.search);
    return url.get(id);
  }
  
//to show all the details about the superhero
function getDetails(id)
{
const url="https://superheroapi.com/api.php/1528706850893289";
$.get(`${url}/${id}`,function(data)
{
    $('#my-container').append(`
   
    <div id="details">
    <h1 id="more-details">More about the superhero</h1>
    <img src="${data.image.url}">
    
    <h1>${data.name}</h1>
    <h4>${data.biography['full-name']}</h4>
    <h4> Intelligence : ${data.powerstats.intelligence}</span>
    <h4> Strength : ${data.powerstats.strength}</h4>
    <h4>Speed : </span> <span> ${data.powerstats.speed}</h4>
    <h4> Durability: </span> <span> ${data.powerstats.durability}</h4>
    <h4>Power :</span> <span>${data.powerstats.power}</h4>
     <h4> Combat :</span> <span>${data.powerstats.combat}</h4>
   </div>`
        
    );

});  
}
const heroId = getId('id');
getDetails(heroId);