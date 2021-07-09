class UstensilsList {
    constructor() {
      this.all = [];
      this.ustensils = [];
      this.selectedUstensils = new Set();
      this.filteredUstensils = new Set()
      this.filtered = new Set();
    }

    init() {
        this.collectUstensils();
    }

    collectUstensils() 
    {
        this.all.forEach(recipe => {
            recipe.ustensils.forEach(ust => {
                this.ustensils.push(ust);
            })
        })
    }

    displayUstensils(list)
    {
        let html = '';

        list.forEach(ust => {
            html += `<a href="#" class="ingr-tag tag" data-ust-id="${ust}">${ust}</a>`;
        })
        document.getElementById('ustensils-list').innerHTML = html
    }
}