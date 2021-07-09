let list = new List();

list.init(recipes);

// With Ingredients appliances and ustensils in the same file 


// Ingredients
// list.collectIngredients();
// list.displayIngredients(list.ingredients);
// list.filtered = list.all;
// list.listenOnSelectIngredient();

// Appliances
// list.collectAppliances();
// list.displayAppliances(list.appliances);

// // Ustensils
// list.collectUstensils();
// list.displayUstensils(list.ustensils);


// With separated file for Ingredients appliances and ustensils

// Ingredients
let ingredients = new IngredientsList();
ingredients.collectIngredients();
ingredients.displayIngredients(ingredients.ingredients);
ingredients.filtered = ingredients.all;
ingredients.listenOnSelectIngredient();

// // Appliances
// let appliances = new AppliancesList();
// appliances.collectAppliances();
// appliances.displayAppliances(appliances.appliances);

// // Ustensils
// let ustensils = new UstensilsList();
// ustensils.collectUstensils();
// ustensils.displayUstensils(ustensils.ustensils);

