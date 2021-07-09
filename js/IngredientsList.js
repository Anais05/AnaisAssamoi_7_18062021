class IngredientsList {
    constructor() {
      this.all = [];
      this.ingredients = [];
      this.selectedIngredients = new Set();
      this.filteredIngredients = new Set()
      this.filtered = new Set();
    }

    collectIngredients() 
    {
        this.all.forEach(recipe => {
            recipe.ingredients.forEach(ingr => {
                this.ingredients.push(ingr.ingredient);
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