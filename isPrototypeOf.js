var isPrototypeOf = function isPrototypeOf (prototypeObject, testObject) {
  
     // return false if either of the arguments is null, also serves as base case for recursion 
    if (prototypeObject === null || testObject === null) {return false}

    // throw error if either of the arguments is undefined, or evaluates to undefined
    if (prototypeObject === undefined || testObject === undefined) {throw new Error ('cannot evaluate undefined type')}
    
    // for multi-level object prototype chain with prototypeObject = Object.prototype -> return true
    // object.__proto__ === undefined for object created through Object.create(null)
    if (testObject.__proto__ !== undefined && Object.getPrototypeOf(prototypeObject) === null)  {
        return true;
    } 
      // for a single level prototype chain
      else if (Object.getPrototypeOf(testObject) === prototypeObject) {
        return true;  
    } else {

        // to go one level down prototype chain of testObject for each recursive call
        return isPrototypeOf(prototypeObject, Object.getPrototypeOf(testObject));
    } 
};