# Javascript Engines

*   Two just in time compilers present in V8 engine
        
        - Regular compiler (Base line compiler)  - Ignition
        - Hot compiler (Optimizing compiler) - Turbo Fan - it recognizes the repeated functions with same objects and generates machine level 

* Try to use objects of same type - Don't change the type of attributes in the object because of javascript engine optimization 

    ![Here is an example](/resources/images/SameTypeObj.PNG)

* If you want machine level code , start the node js with following commands

* Use array literals as much as possible , it will create a PACKED array

* when you declare an array with size without initializing it , it will just create a HOLY array.



    ![Here is an example](/resources/images/MachineJSCode.PNG)

*   Do not leave holes (empty spaces) in the array . Engine has to work more to retreive the values, packed arrays are more optimal

* Avoid hitting out of the bound indexes - it's costly process to throw an error.