// problem is sum(1)(2)(3)(4)(10)();

let sum = function(a){
    return function(b){
        if(b){
            return sum(a+b)
        }
        return a;
    }
};

console.log("testest", sum(1)(2)(3)(4)(10)())