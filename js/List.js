class List {
    constructor() {
      this.all = [];
      this.ingredients = [];
      this.selectedIngredients = new Set();
      this.filteredIngredients = new Set()
      this.appliances = [];
      this.ustensils = [];
      this.filtered = new Set();
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
        let html = '';

        list.forEach(ingr => {
            html += `<a href="#" class="ingr-tag tag" data-ingr-id="${ingr}">${ingr}</a>`;
        })
        document.getElementById('ingredients-list').innerHTML = html
    }

    displayAppliances(list) 
    {
        let html = "";
    
        list.forEach(appl => {
          html += `<a href="#" class="appl-tag tag" data-appl-id="${appl}">${appl}</a>`;
        })
        document.getElementById("appliance-list").innerHTML = html;
    }

    displayUstensils(list)
    {
        let html = '';

        list.forEach(ust => {
            html += `<a href="#" class="ingr-tag tag" data-ust-id="${ust}">${ust}</a>`;
        })
        document.getElementById('ustensils-list').innerHTML = html
    }

    listenOnSelectIngredient()
    {
        document.querySelectorAll('.ingr-tag').forEach(element => {
            element.addEventListener('click', (e) => {
                let tag = e.target.getAttribute('data-ingr-id')
                if (this.selectedIngredients.has(tag)) {
                    this.removeFromFilter(tag);
                    this.displayUnselectedTag(e.target)
                } else {
                    this.addToFilter(tag);
                    this.displaySelectedTag(e.target)
                }

                this.filterByIngredient();
                this.displayRecipes(this.filtered);
                this.filterIngredientPerFilteredRecipies();
                this.displayIngredients(this.filteredIngredients);
                this.listenOnSelectIngredient();
                
            })
        })
    }

    filterByIngredient()
    {
        let list = [];

        this.filtered.forEach(recipe => {
            let isSelectable = true;

            this.selectedIngredients.forEach(ingredient => {
                if (!recipe.hasIngredient(ingredient)) {
                   isSelectable = false;
                }
            })

            if (isSelectable) {
                list.push(recipe);
            }
            
        })

        this.filtered = list;
    }

    filterIngredientPerFilteredRecipies()
    {
        let list = new Set();

        this.filtered.forEach(recipe => {
            recipe.ingredients.forEach(item => {
                list.add(item.ingredient)
            })
        })
        this.filteredIngredients = list;
    }

    addToFilter(tag)
    {
        this.selectedIngredients.add(tag);
    }

    displaySelectedTag(el)
    {
        el.classList.add('select');
    }

    removeFromFilter(tag)
    {
        this.selectedIngredients.delete(tag);
    }

    displayUnselectedTag(el)
    {
        el.classList.remove('select');
    }
}

