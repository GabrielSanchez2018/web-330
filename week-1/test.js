

// Create Cell phone Object. 

function cellPhone(properties){
    this.properties = properties;
    this.manufacturer = "manufacturer";
    this.model = "model";
    this.color = "color";
    this.price = "price"; 
    this.getPrice = function(){
        return "Price " + this.price;
    };

    this.getModel = function(){
        return " Model" + this.model;
    };
    this.getDetails = function(){
        return " Manufacturer" + this.manufacturer + " Model" + this.model + " Color" + this.color + " Price" + this.price; 
    };
};

console.log(cellPhone());