const Obj = function(prop){
  this.prop = prop;
  Obj.getProp = function(){
    return 2;
  };
}

Obj.prototype.method = function(){
  console.log("method...");
}

const obj1 = new Obj(1);
obj1.method();
console.log(Obj.getProp());