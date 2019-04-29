
# Functions and Other things related

* `let` - will scope the variables inside a block
* `var` - will scope the variable inside an entire function

> lexical scoping : Local scope can access variables of an upper scope which contains it.

* If you declare a function with variable pointing to it then you have to end it with a semicolon 
`const = function() {// do something};`

## Arrow notation =>

1.  Arrow notion `=>` can also be used to define the function <br> Eg :
`const max = (a,b) => { if(a>b) return a; 
else b
};`  <br> basically what it indicates is that `(a,b)` will produce the result in `{}`   
   
2.  If there is only one parameter and only one expression in the body of the function then `const multiply = x => x*x;`

3. If there are no input parameters then `const empty = () => {return 'empty'};`

4.  Functions can accept more attributes than it is orignially declared for.

5. A function that references the local scope around it is called a Clousre <br> 

    `function multiplier(factor) {
return x => x*factor
}
let thrice = multiplier(3)
console.log(thrice(2))
//6
`
6.  Best way to think of a function value is of a variable containing the function code as well as the scope around it

7.  `object.x and object[x]` tries to access the property x of the object but .x represents the literal name of the property and [x] evaluates to propert 

8.  Use `delete` unary operator to delete the properties of the object

9.  Use `in` operator to check for the property in an object
10. `Object.key({})` will give you the keys and `Object.assign(objectA,objectB)` will copy and override the proerties if already exisits.

11. `object1=object2` - here object 1 & 2 points to the same referece. Use Object.assign to get the deep copy.
12. use `includes` method to check if array has required item 

13. `push,pop,shift and unshift ` for Array operations

14. use `slice(startIdex, endIndex)` to get the subset of an arry Here `endIndex` is excluded <br>
    `let array = [1,2,3,4,5,6]                  
    const removeIndex = (array,index) => {
    return array.slice(0,index).concat(array.slice(index+1,array.length))`
}
console.log(removeIndex(array,1));
>   This will remove an index and concatinate an array

15. You can split a string on every occurrence of another string with split and join it again with join.

16. use `...` as a function parameter if you are not sure of number of arguments

17. Destructuring  : `let {name} = {name: "Faraji", age: 23};
console.log(name);`
// → Faraji

18. `!undefined, !null` will produce false

19. ### Example for deep comparision
        
        function deepEqual(a, b) { 
        if (a === b) return true;
        
        if (a == null || typeof a != "object" ||
            b == null || typeof b != "object") return false;

        let keysA = Object.keys(a), keysB = Object.keys(b);

        if (keysA.length != keysB.length) return false;

        for (let key of keysA) { <br>
            if (!keysB.includes(key) || !deepEqual(a[key], b[key]))  return false;
        }

        return true;
        }

        let obj = {here: {is: "an"}, object: 2};
        console.log(deepEqual(obj, obj));
        // → true
        console.log(deepEqual(obj, {here: 1, object: 2}));
        // → false
        console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
        // → true

20. use forEach if possible `
[1,2,3,5,5,6,6,'sss',{a:'blur',b:'c'}].forEach((item,index) => {console.log(item,index)})`
        