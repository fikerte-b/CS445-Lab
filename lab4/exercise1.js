class Regular{
    constructor(){
        this.lumens = "between 50 and 100";
        this.age = "1 year";
    }
}


class EnegrySaver{
    constructor(color){
        this.lumens = "between 5 to 40";
        this.age = "10 years";
        this.color = color;
    }
}

class Factory{
    createBulb(type, color){
        let bulb;
        if(type === "regular"){
            bulb = new Regular();
        }else if(type === "energy"){
            bulb = new EnegrySaver(color);
        } 
       // bulb.type = type; 
        return bulb;    
    }
}
const bulbs = [];
const factory = new Factory();

bulbs.push(factory.createBulb("regular"));
bulbs.push(factory.createBulb("energy", "red"));


for (let i = 0, len = bulbs.length; i < len; i++) {
    console.log(bulbs[i]);
}