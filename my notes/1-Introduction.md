# Javascript
### These are some of the points I just noted down when I was going through a book named **Eloquent JavaScript**  by Marijn Haverbeke 

## Types and Values and Operators 
0.  `var` is function scope, `let` is block scope. `Const` variables cannot be changed but object values can be changed but can't change the entire object itself.
1.  %,/,*  are of same precedence when came side by side L to R is applied
2.  +,- are of same precedence when came side by side L to R is applied
3.  use braces whenever there is a doubt

4.  || has the least precedence 
5.  && is next then >,<>,== comes over.

> Special numbers are Infinity, -Infinity and NaN

>Characters / Strings are stored as numbers in memory - Unicode is used for mapping .
Javascript uses 16 bits to store a character but Unicode as much more 

`` `Backtick quoted string can contain commands to evaluate - half of 100 is ${100/2}` `` They are also called template strings

*   NaN == NaN is false

*   undefined and null are themselves values - use it interchangeably 

> watch out for type coercion if you are getting weird results - JS converts the values to type of most favourable one for the situation

*   === and ==! defensively for comparision

### short-circuit evaluation
*   || doesnt behave the same way as in JAVA . This will evaluate the left side value to Boolean , if it is true then return the left side one otherwise go for right 
>   `'' || 'Andy' would return Andy   , 'Andy' || 'Hello' would retun Hello`

* The && operator works similarly but the other way around. When the value to its left is something that converts to false, it returns that value, and otherwise it returns the value on its right

`false && 'all' will return false, true && 'something' will return something`

If you ask for the value of an empty binding, you’ll get the value undefined.



