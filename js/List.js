class List {
    constructor() {
      this.all = [];
      this.ingredients = [];
      this.appliances = [];
      this.ustensils = [];
      this.filtered = [];
      this.activeTag = [];
    }

    init(recipes) 
    {
        for (let recipe of recipes) 
        {
            this.all.push(new Recipe(recipe))
        }
        this.displayRecipes(this.all);

    }

    displayRecipes(recipes) 
    {
        let html = '';
        recipes.forEach((recipe) => 
        {
            html += recipe.renderCard()
        })
        document.getElementById('recipes').innerHTML = html;
    }

    collectIngredients() 
    {
        this.all.forEach(recipe => {
            recipe.ingredients.forEach(ingr => {
                this.ingredients.push(ingr.ingredient);
            })
        })
    }

    collectAppliances() 
    {
        this.all.forEach(recipe => {
            this.appliances.push(recipe.appliance);
        })
    }

    collectUstensils() 
    {
        this.all.forEach(recipe => {
            recipe.ustensils.forEach(ust => {
                this.ustensils.push(ust);
            })
        })
    }

    displayIngredients(list)
    {
        list = new Set(list);
        let html = '';

        list.forEach(ingr => {
            html += `<a href="#" class="ingr-tag tag" id="${ingr}">${ingr}</a>`;
        })
        document.getElementById('ingredients-list').innerHTML = html
    }

    displayAppliances(list) 
    {
        list = new Set(list);
        let html = "";
    
        list.forEach(appl => {
          html += `<a href="#" class="appl-tag tag" id="${appl}">${appl}</a>`;
        })
        document.getElementById("appliance-list").innerHTML = html;
    }

    displayUstensils(list)
    {
        list = new Set(list);
        let html = '';

        list.forEach(ust => {
            html += `<a href="#" class="ingr-tag tag" id="${ust}">${ust}</a>`;
        })
        document.getElementById('ustensils-list').innerHTML = html
    }

    listenOnSelectIngredient()
    {
        let tags = document.querySelectorAll('.ingr-tag');
        for (let i = 0; i < tags.length; i++) {
            let tag = tags[i];
           tag.addEventListener('click', (e) => {
               let ingr = e.target.getAttribute('id');
               this.filterByIngredient(ingr);
           })
        }
    }

    filterByIngredient(ingredient)
    {
        this.all.filter(recipe => {
            if (recipe.hasIngredient(ingredient)) {
                this.filtered.push(recipe)
            }
        })
        this.displayRecipes(this.filtered);
    }
}

