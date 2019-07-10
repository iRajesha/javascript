
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

21. Some of the higher order functions are `forEach,filter,map,reduce`
22. use `charPointAt()` to get the character code at an index
            Best approach is 
            <code>let roseDragon = "🌹🐉"; <br>
            for (let char of roseDragon) {
            console.log(char);
            } </code>

23. The `some` method is another higher-order function. It takes a test function and tells you whether that function returns true for any of the elements in the array

24. Arrays provide a number of useful higher-order methods. You can use forEach to loop over the elements in an array. The filter method returns a new array containing only the elements that pass the predicate function. Transforming an array by putting each element through a function is done with map. You can use reduce to combine all the elements in an array into a single value. The some method tests whether any element matches a given predicate function. And findIndex finds the position of the first element that matches a predicate.



24. `Maps` are not same as `Objects`. `Objects` would have derived from some kind of `prototype` and would have methods and proerties from `prototype`

25. you can create a `Map` by passing null to `Object.create(null)`  - Just one trick but there is a Key word which we can use to create the `Map` . Use `map.has(key)` to check if the value is present. `set,get ` are used to add, retrieve 

26. `in` - operator will check for properties in objects as well as in it's prototype but `hasOwnProperty` will not check in one's prototype

27. A good example for Polymorphism is that For/Of loop would work with serveral kind of data structures because these data structures implement certain methods required for `for/of` loop to work, they expose the methods through interface.

28. `Symbols` are used to resolve the confusion between different interfces having same names

            const toStringSymbol = Symbol("toString");
            Array.prototype[toStringSymbol] = function() {
            return `${this.length} cm of blue yarn`;
            };

            console.log([1, 2].toString());
            // → 1,2
            console.log([1, 2][toStringSymbol]());
            // → 2 cm of blue yarn
29. Inside a class declaration , functions written with `static` key word would be a part of the constructor.
30. Making an `Object` const will only make sure that the `Object` cannot be pointed to something else but you can change the properties it holds
31. Use `Object.freez()` to make sure , property updates to Object are ignored.
