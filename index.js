
var container = $("#container");
var searchResult=[];
const ApiUrl="https://superheroapi.com/api.php/1528706850893289";//Api url

$("button").click(function () {
  var name=document.getElementById("searchbar").value;//name of superhero
  $("#container").html("");
  searchResult = [];
  $.get(`${ApiUrl}/search/${name}`, function (data) {
      let searchResult = data.results;
      
      for (let course of searchResult) {
      //appending the search results in the list 
        container.append(`
            <li> 
              <div  id="search-results">
                <div  id="image">
                  <img src="${course.image.url}">
                </div>
                <div id="name"> 
                  <a href="heros.html?id=${course.id}">
                    ${course.name}
                  </a>
                  <br>
                  <p id="original">
                  ${
                    course.biography['full-name']
                  }
                  </p>
                </div>
                <button id="add-to-fav" onclick="addToFav(${course.id})">Add to Favourites</button>
              </div>
            </li>
          <br>
        `);
      }
  });
});