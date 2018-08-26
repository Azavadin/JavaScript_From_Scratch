const Obj = function(prop){
  this.prop = prop;
}

Obj.prototype.getProp = function(){
  return this.prop;
}

Obj.prototype.setProp = function(_prop){
  this.prop = _prop;
}

const obj1 = new Obj(1);
console.log(obj1);
console.log(obj1.getProp());
obj1.setProp(2);
console.log(obj1.getProp());