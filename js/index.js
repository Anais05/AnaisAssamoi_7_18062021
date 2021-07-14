let list = new List();

for (let i = 0; i < recipes.length; i++) {
    let recipe = new Recipe(recipes[i]);
    list.add(recipe);
}

list.filtered = list.all;

list.displayRecipes();
list.createFilterable('ingredient');
list.createFilterable('appliance');
list.createFilterable('ustensil');


