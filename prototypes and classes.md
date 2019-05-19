1. prototying is a useful method to create class like features in javascript - more like inheritance concept in Java

2. You can create javascript classes using `class` and `new` key words. To access prototype of an object use <br>
`Object.getPrototypeOf(object)`

                class Rabbit {
                constructor(type){
                this.type = type;
                }
                speak(text){
                console.log(`${this.type} Rabit say ${text}`)
                }
            }
3. Basically , `class` is also a Function proptype .  Use `constructor()` to assign properties which are specific to instances created using the class

4. If you add a function to  `Function.prototype` then it will be available for all kind of classes and functions created

5. Don't use javascript objects as maps. Use Map key word to create maps which doesnt have inherited methods.

6. If you do have a plain object that you need to treat as a map for some reason, it is useful to know that Object.keys returns only an object’s own keys, not those in the prototype. As an alternative to the in operator, you can use the hasOwnProperty method, which ignores the object’s prototype.