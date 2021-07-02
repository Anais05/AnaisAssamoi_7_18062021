let list = new List ();

list.init(recipes);

// Ingredients
list.collectIngredients();
list.displayIngredients(list.ingredients);
list.filtered = list.all;
list.listenOnSelectIngredient();

// Appliances
list.collectAppliances();
list.displayAppliances(list.appliances);

// Ustensils
list.collectUstensils();
list.displayUstensils(list.ustensils);

