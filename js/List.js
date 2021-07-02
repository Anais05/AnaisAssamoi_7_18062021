class List {
    constructor() {
      this.all = [];
      this.ingredients = [];
      this.selectedIngredients = [];
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
        tags.forEach(tag => {
            tag.addEventListener('click', (e) => {
                if (this.selectedIngredients.includes(tag)) {
                    this.removeFromFilter(tag);
                } else {
                    this.addToFilter(tag);
                    let ingr = e.target.getAttribute('id');
                    this.filterByIngredient(ingr);
                    this.selectedIngredients.push(ingr);
                    console.log(this.selectedIngredients);
                }
                
            })
        })
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

    addToFilter(tag)
    {
        let el = document.getElementById(tag);
        el.classList.add('select');
        this.selectedIngredients.push(tag);
    }

    removeFromFilter(tag)
    {
        let el = document.getElementById(tag);
        el.classList.remove('select');
        let indexTag = this.selectedIngredients.findIndex(item => item == tag);
        this.selectedIngredients.splice(indexTag, 1);
    }
}

