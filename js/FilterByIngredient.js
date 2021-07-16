class FilterByIngredient extends Filterable
{
    constructor()
    {
        super('ingredient');
    }

    collect(recipes)
    {
        let list = new Set();

        recipes.forEach(recipe => {
            recipe.ingredients.forEach(item => {
                list.add(item.ingredient);
            })
        });

        return list;
    }

    filter(recipes)
    {
        if (this.selected.size === 0) {
            return recipes;
        }

        return recipes.filter(recipe => {
            let isSelectable = false;
            let count = 0;

            this.selected.forEach(ing => {
                let existingIngredients = recipe.ingredients.map(item => item.ingredient);
                if (existingIngredients.includes(ing)) {
                    count++
                }  
            })

            if (count == this.selected.size) {
                isSelectable = true;
            }

            return isSelectable;
        })
    }
}