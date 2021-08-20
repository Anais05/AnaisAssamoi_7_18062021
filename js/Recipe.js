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
        this.maxDescriptionLength = 175;
    }

    rederIngredients()
    {
        let html = '';

        this.ingredients.forEach((ingr) => {
            html += `<li class="ingredient"><span class="ingr-name">${ingr.ingredient}</span>`;

            if (ingr.hasOwnProperty('quantity') || ingr.hasOwnProperty('unit')) 
            {
                html += ' : ';
            }
            if (ingr.hasOwnProperty('quantity')) 
            {
                html += ingr.quantity;
            } 
            if (ingr.hasOwnProperty('unit')) 
            {
                html += ` ${ingr.unit}`;
            }
            html += '</li>'
        });
       
        return html;
    }

    getShortDescription() {
        if (this.description.length > this.maxDescriptionLength) 
        {
            return this.description.substring(0,this.maxDescriptionLength) + ' ...';
        }
        return this.description;
    }

    renderCard() {
        return `
            <article id="card">
                <img class="card-image" src="./img/img.png" alt="${this.name}">
                <div class="card-info">
                    <div class="card-header">
                        <h2 class="card-title">${this.name}</h2>
                        <div class="card-time"><i class="far fa-clock"></i> ${this.time} min </div>
                    </div>
                    <div class="card-recipe">
                        <ul class="card-ingredients">
                            ${this.rederIngredients()}
                        </ul>
                        <div class="card-description">${this.getShortDescription()}</div>
                    </div>
                </div>
            </article>
        `
    }
}