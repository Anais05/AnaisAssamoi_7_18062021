class List 
{
    constructor() {
      this.all = [];
      this.filtered = new Set();
      this.filterables = {};
      this.filters = [];
    }

    add(recipe) 
    {
        list.all.push(recipe);
    }

    displayRecipes() 
    {
        let html = '';

        for (let i = 0; i < this.filtered.length; i++) {
            if (this.filtered.length === 0) {
                html += 'Aucune recette ne correspond à votre recherche'
            } else {
                let recipe = new Recipe(this.filtered[i]);
                html += recipe.renderCard()
            }
        }
        document.getElementById('recipes').innerHTML = html;
    }

    addFilter(type, tag, recipesId) 
    {
        let filter = new Filter(type, tag, recipesId)
        this.filters.push(filter);
    }

    build() 
    {
        list.displayRecipes();
        for (let [key, filterable] of Object.entries(this.filterables))
        {
            filterable.filtered = filterable.collect(this.filtered);
            filterable.displayList(filterable.filtered);
            filterable.listenForFilter();
            filterable.build();
            filterable.listenForUnselect();
        }
    }

    createFilterable(name)
    {
        document.getElementById('filters').innerHTML += this.renderDropDown(name);
        this.filterables[name] = new Filterable(name);
        this.filterables[name].build();
    }

    filter()
    {
        if (this.filters.length === 0) {
           return  this.filtered = this.all
        }

        this.filtered = [];

        this._combine().forEach(id => {
            this.filtered.push(this._findById(id))
        })
    }

    renderDropDown(type)
    {
        return `
            <div id="dropdown-${type}" class="menu-close">
                <input type="search" id="${type}" class="type-search-input" placeholder="${type}s"/>
                <i class="type-search-icon fas fa-chevron-down" id="${type}-open"></i>
            </div>
            <div id="dropdown-${type}-open" class="menu-open">
                <input type="search" id="${type}" class="type-search-input" placeholder="Rechercher un ${type}"/>
                <i class="type-search-icon fas fa-chevron-up" id="${type}-close"></i>
                <div class="dropdown-content" id="list-${type}"></div>
            </div>
        `
    }

    removeFilter(tag, type)
    {
        let index = this.filters.findIndex(filter => (filter.tag == tag && filter.type == type));
        this.filters.splice(index, 1);
    }

    _findById(id)
    {
        return this.all.find(recipe => recipe.id == id)
    }

    _combine()
    {
        let result = [];

        for (let i = 0; i < this.filters.length; i++) {
            let currentList = this.filters[i].recipesId;

            for (let x = 0; x < currentList.length; x++) {
                let currentValue = currentList[x];
                if (result.indexOf(currentValue) === -1) {
                    let existsInAll = true;
                    for (let y = 0; y < this.filters.length; y++) {
                        if (this.filters[y].recipesId.indexOf(currentValue) === -1) {
                            existsInAll = false
                            break
                        }                        
                    }
                    if (existsInAll) {
                        result.push(currentValue);
                    }
                }
                
            }
            
        }

        return result;

    }
}

