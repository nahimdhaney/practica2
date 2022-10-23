let Pizza = function (name) {
    this.name = name;

    this.describePizza = function () {
        console.log(this.name);
    };
}


let PizzaMargarita = function () {
    this.name = 'Margarita';
    this.muzarella = 3;
    this.albaca = 5;

    this.describePizza = function () {
        console.log("Decorated Pizza: " + JSON.stringify(this));
    };
}


let ConIngrediente = function (pizza, ingredient, quant) {
    const { name } = pizza;
    this.name = name;
    this[ingredient] = quant;
    for (const property in pizza) {
        if (!property !== 'name') {
            this[property] = pizza[property];
        }
    }

    console.log(name)
    this.describePizza = function () {
        console.log("Decorated Pizza: " + JSON.stringify(this));
    };
}


let ConPromo = function (pizza, promo, dia) {
    const { name } = pizza;
    this.name = name;
    this[promo] = dia;
    for (const property in pizza) {
        if (!property !== 'name') {
            this[property] = pizza[property];
        }
    }

    this.describePizza = function () {
        console.log("Decorated Pizza: " + JSON.stringify(this));
    };
}


function run() {

    let pizza = new Pizza("Peperoni");
    pizza.describePizza();

    let decorated = new ConIngrediente(pizza, "tomate", 1);
    let decorated2 = new ConIngrediente(decorated, "choclo", 3);
    let conPromo = new ConPromo(decorated2, "promo_1", "martes 2x1");
    decorated.describePizza();
    decorated2.describePizza();
    conPromo.describePizza();
    let pizzaMargarita = new PizzaMargarita();
    pizzaMargarita.describePizza();
}

run()