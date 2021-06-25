class Recipe {

    constructor(data)
    {
        this.id = data.id;
        this.name = data.name;
        this.servings = data.servings;
        this.ingredients = data.ingredients;
        this.time = data.time;
        this.description = data.description;
        this.appliance = data.appliance;
        this.ustensils = data.ustensils;
        this.ingredientList ="";
    }

    getIngredients()
    {
        this.ingredients.forEach((ingr) => {
            if (ingr.quantity) {
                if (ingr.unit && ingr.quantity) {
                return this.ingredientList += `<li class="ingredient">${ingr.ingredient} : ${ingr.quantity} ${ingr.unit}</li>`;
                } else {
               return this.ingredientList += `<li class="ingredient">${ingr.ingredient} : ${ingr.quantity}</li>`;
                }
            } else {
                return this.ingredientList += `<li class="ingredient">${ingr.ingredient}</li>`;
            }
        })
            
    }

    renderCard() {
        return `
            <article class="card">
                <img class="card-image" src="./img/img.png" alt="${this.name}">
                <div class="card-info">
                    <div class="card-header">
                        <h2 class="card-title">${this.name}</h2>
                        <div class="card-time"><i class="far fa-clock"></i> ${this.time} min </div>
                    </div>
                    <div class="card-recipe">
                        <ul class="card-ingredients">
                        // ${this.getIngredients()}
                        ${this.ingredients.map(ingredient => `
                        <li class="ingredient">${ingredient.ingredient} : ${ingredient.quantity} ${ingredient.unit}</li>`).join('')}
                            
                        </ul>
                        <div class="card-description">${this.description}</div>
                    </div>
                </div>
            </article>
        `
    }
}