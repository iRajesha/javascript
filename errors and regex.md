1.  if `let` is not used for creating a variable then javscript creates a new gloabal variable by the name - avoid this
2.  `use strict` will not allow automatic allocation of `this` to gloabal scope if constructor is not called with `new` key word . Calling a method with same pamarameters is also not allowed if `strict` key word is used
3. use `try, catch, finally` to handle errors . use `throw` key word to raise a custom `Error()`
4.  As a general rule, don’t blanket-catch exceptions unless it is for the purpose of “routing” them somewhere—for example, over the network to tell another system that our program crashed

#REGEX

1.  Use `RegExp('')` to construct the regular expression and `RegExp().test()` to check if any match
2. Another systax is writing `/abcd\d/`
3. use `[]` to match range of values, `[^abc]` will try to match characters other than abc
4.  `+` is for one or more occurrances, `*` is for zero or more
5. `?` is for matching an optional text 
        
6. To indicate that a pattern should occur a precise number of times, use braces. Putting `{4}` 
after an element, for example, requires it to occur exactly four times. It is also possible to specify a range this way: `{2,4}` means the element must occur at least twice and at most four times.

7.  `RegExp().exec()` will return  [whole match , match of braces , last match of braces(if multiple matches present)]

8. Match can happen in any substring  to make the match span entrire string use markers `^,$`
10. Use word boundary marker `\b` to match the word in the middle with world boundary(space , new line a non `\w` character)
11. deafault format of    `Date()` is YYYY-MM-DD
12. `'abc'.replace(/[a]/, f)` First argument to the replace method of Strings can be a regular expression use `g` option to replace all occurrances 

        console.log(
        "Liskov, Barbara\nMcCarthy, John\nWadler, Philip"
        .replace(/(\w+), (\w+)/g, "$2 $1"));
        // → Barbara Liskov
        //   John McCarthy
        //   Philip Wadler
13. In javascript date , month starts from 0 , which makes 11 as december.
