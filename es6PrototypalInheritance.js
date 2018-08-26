const Obj = function(prop){
  this.prop = prop;
}

Obj.prototype = {
  getProp(){
    return this.prop;
  },
  setProp(prop){
    this.prop = prop;
  }
}

const obj1 = new Obj(1);
console.log(obj1);
console.log(obj1.getProp());
obj1.setProp(2);
console.log(obj1.getProp());