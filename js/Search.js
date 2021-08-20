class Search 
{
    constructor()
    {
        this.searchValue = '';
    }

    listen()
    { 
        document.getElementById('main-search').addEventListener('input', (e) => {
            this.searchValue = e.target.value.toLowerCase();
            list.filter();
        })
    }

    search(recipes)
    {
        
        if (this.searchValue.length < 3) 
        {
           return recipes;
        }
        console.time('2')

        list.filtered = recipes.filter(recipe => {
            if (recipe.name.toLowerCase().includes(this.searchValue)) 
            {
                return true;
            }
            if (recipe.description.toLowerCase().includes(this.searchValue)) 
            {
                return true;
            }
            for (let i = 0; i < recipe.ingredients; i++) 
            {
                if (recipe.ingredients[i].ingredient.toLowerCase().includes(this.searchValue)) 
                {
                    return true;
                }
            }
            return false;
        })
        console.timeEnd('2')

    }
}