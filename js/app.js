const title = "Making Ice Cream Sandwiches";
var parra = "Kids and adults alike will be figthing over these big monsters ice scream sandwiches! The best part about thes things is taht they are no bake . You don't even need to warm up your oven if you purchased cookies. Makes early to use the mini M&Ms or the large ones will fall off. As a volunteer field editor for the Taste of Home magazines. I love recipes that can be assembled quickly and still make a presentation.";
var imgs = ['../img/p1.jpg', '../img/p2.jpg', '../img/p3.jpg', '../img/p4.jpg'];
var ingredientTitle = 'Ingredients';
var ingredientsItem = ["Cookies and Cream ice Cream", "Large chocolate chip cookies","M&M's mints", "Reese's mini peanut butter cups"];
var div = document.createElement("div");
 div.innerHTML  = `
  <h1> ${title} </h1>
  <p> ${parra} </p>
  <div class="ingredients-bk">
      <h2> ${ingredientTitle} </h2>
   <ul>
     <li> ${ingredientsItem[0]}</li>
     <li> ${ingredientsItem[1]}</li>
     <li> ${ingredientsItem[2]}</li>
     <li> ${ingredientsItem[3]}</li>
    <ul>
  </div>
  <div class="gallery">
  <div>
  <img src="${imgs[0]}" alt ="ice scream" />
  </div>
  <div>
  <img src="${imgs[1]}" alt ="cookies" />
  </div>
  <div>
  <img src="${imgs[2]}" alt ="m&m" />
  </div>
  <div>
  <img src="${imgs[3]}" alt ="reese's" />
  </div>
  </div>
   <p>For more information about this recipe, pleas visit <span><a href="https://www.tasteofhome.com"> The Taste of Home website</a></span></p>
`;
document.body.appendChild(div);




