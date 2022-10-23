let Pizza = function (name) {
    this.name = name;
    this.ingredients = [];
    this.promos = [];

    this.describePizza = function () {
        console.log(this.name);
    };
}


const describePizzaPrototype = function () {
    console.log("Decorated Pizza: " + JSON.stringify(this));
};
  

let PizzaMargarita = function () {
    this.name = 'Margarita';
    this.promos = [];
    this.ingredients = [
        {
            name: 'muzarella',
            quatity: '5'
        }, {
            name: 'albaca',
            quatity: '4'
        }
    ]
    this.describePizza = describePizzaPrototype;
}


let ConIngrediente = function (pizza,newIngredient) {
    const { ingredients,name, promos } = pizza;
    this.name = name;
    this.ingredients = ingredients;
    this.promos = promos;
    this.ingredients.push(newIngredient);
    this.describePizza = describePizzaPrototype;
}


let ConPromo = function (pizza,newPromo) {
    const { ingredients,name, promos } = pizza;
    this.name = name;
    this.ingredients = ingredients;
    this.promos = promos;
    this.promos.push(newPromo);
    this.describePizza = describePizzaPrototype;
}



function run() {

    let pizza = new Pizza("Peperoni");
    let decorated = new ConIngrediente(pizza, {name:'tomaco',quant:6});
    let decorated2 = new ConIngrediente(decorated,{name:'choclo',quant:2});
    let conPromo = new ConPromo(decorated2, {day:'tuesday',description:'2x1'});
    pizza.describePizza();
    decorated.describePizza();
    decorated2.describePizza();
    conPromo.describePizza();
    let pizzaMargarita = new PizzaMargarita();
    pizzaMargarita.describePizza();
    let margaritaConPromo = new ConPromo(pizzaMargarita, {day:'monday',description:'2x1'});
    margaritaConPromo.describePizza();
}

run()