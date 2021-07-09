class AppliancesList {
    constructor() {
      this.all = [];
      this.appliances = [];
      this.selectedAppliances = new Set();
      this.filteredAppliances = new Set()
      this.filtered = new Set();
    }

    init() {
        this.collectAppliances();
    }

    collectAppliances() 
    {
        this.all.forEach(recipe => {
            this.appliances.push(recipe.appliance);
        })
    }

    displayAppliances(list) 
    {
        let html = "";
    
        list.forEach(appl => {
          html += `<a href="#" class="appl-tag tag" data-appl-id="${appl}">${appl}</a>`;
        })
        document.getElementById("appliance-list").innerHTML = html;
    }
}