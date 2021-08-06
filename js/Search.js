class Search 
{
    constructor()
    {
        this.searchValue = '';
    }

    listenForSearch()
    {
        document.getElementById('main-search').addEventListener('input', (e) => {
            let newSearchValue = e.target.value.toLowerCase();

            if (newSearchValue.length > 2) 
            {
                if(newSearchValue.length >= this.searchValue.length) 
                {
                    list.filtered = list.all;
                }
                this.searchValue = newSearchValue;
                this.search();

            } else 
            {
                list.filtered = list.all;
                list.displayRecipes();
            }

            list.build();
            
        })

    }

    search()
    {
        // try with list.filtered => doesn't work
        list.filtered = list.all.filter(recipe => {
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

        console.log(list.filtered);

        list.displayRecipes()
    }
}