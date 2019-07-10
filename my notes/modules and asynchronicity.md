1. We need some sort of mechanism to reuse the code
2. NPM is a repository where people write codes and upload them for free or copy right
3. `eval()` can be used to execute the code as string but scope determination is confusing 
4. We can also evalute string as code using `Function()` constructor , it takes two parameters , one - list of comma seperated string as parameters to functions and the second one is for body of the function itslef. This approach doesn't mess with other scope data
            let plusOne = Function("n", "return n + 1;");
            console.log(plusOne(4));
            // → 5
5. commonJS modules are widely used, which has `require()` function which takes the code and give us it's interface.
6. We just have to put their interface in the object bound to `exports`.
7. ESmodules is a better to seperate your code to modules , it has easy to use `import` like statements. The thing is many browsers doesn't support it yet, it was introduced in 2015.
            import ordinal from "ordinal";
            import {days, months} from "date-names";

            export function formatDate(date, format) { /* ... */ }
8. `export default ['something']`  default exported bindings
9. ES module imports happen before a module’s script starts running. That means import declarations may not appear inside functions or blocks, and the names of dependencies must be quoted strings, not arbitrary expressions
10. Make exposed interfaces of the module to be predictable , refer other modules of same category and expose methods with same name , types of parameters so that it can be compatible with other modules and data structures

## Asynchronicity 

1. Call back mechnism is simple , you pass a  function to another function which will execute the passed functions once it's work is over. 
2. In `promises` isntead of calling a function , you return an object which represents the future event.
3. The easiest way to create a promise is by calling Promise.resolve. This function ensures that the value you give it is wrapped in a promise. If it’s already a promise, it is simply returned—otherwise, you get a new promise that immediately finishes with your value as its result.

            let fifteen = Promise.resolve(15);
            fifteen.then(value => console.log(`Got ${value}`));
            // → Got 15

4. Create a normal method , return a `new Promise(resolve => resolve(something))` use the parameter from the outer method to perform required operations.
5.  Think about what would happen if a Promise function fails ? we would need a mechanism to indicate it's handlers .
6.  `.then() and .catch()` methods the handlers for a Promise. Just like `resolve`, `reject` is also a similar function where you send the failed  `reason` to handler function.
7. Once a promise is rejected , it's `.then()` will not be called instead it's promise is also rejected and the propagation continues until `.catch()` is encountered which would handle the rejection.
8.  `Promise.all`  returns a promise that waits for all of the promises in the array to resolve and then resolves to an array of the values that these promises produced (in the same order as the original array). If any promise is rejected, the result of Promise.all is itself rejected.
9. V8 doesn't have some native source code for `setTimeout()` and some other functions but they are part of WebAPI
10. Javascript is a single threaded language and can manage cuncurrancy through webApis
11. There is a heap memory and there is a stack - which stacks all the fucntion calls one after another .
12. Also , there is a callback queue  - when a `async` function is executed , it will not sit on call stack memory - it will be placed in webApi  , once the execution of an async function is completed , it will be moved to callback queue , whenever the stack is free , event loop will place a completed task/callback to stack and it gets executed.
13. There is also something called <b>Render Queue</b> which takes priority over callback queue(task queue)
14. Try not to block render queue for fluid UI

15. There is also a special concept called `generator fucntions`. Use it for generating a sequence or something
It returns an `iterator` and an expression `yield` is used to return the incremental value

            function* powers(n) {
            for (let current = n;; current *= n) {
                yield current;
            }
            }

            for (let power of powers(3)) {
            if (power > 50) break;
            console.log(power);
            }


 
