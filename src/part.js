 




const Handlebars = require("handlebars");
const source =   '<div class="card"> <div class="card-img-top">   <img src="{{sprites.front_default}}" alt="{{name}}"> </div> <div class="card-body"> <h2 class="card-title">Имя: {{name}}</h2> <p class="card-text"> Вес: {{weight}}</p> <p class="card-text">Рост: {{height}}</p> <p class="card-text">Умения</p> <ul class="list-group">{{#each abilities}} <li class="list-group-item">{{ability.name}}</li> {{/each}}</ul ></div > </div > '

export const TEMPLATE = Handlebars.compile (source);
