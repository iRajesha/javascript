1.  To be able to include angle brackets in the text of a document, even though they have a special meaning in HTML, yet another form of special notation has to be introduced. A plain opening angle bracket is written as &lt; (“less than”), and a closing bracket is written as &gt; (“greater than”). In HTML, an ampersand (&) character followed by a name or character code and a semicolon (;) is called an entity and will be replaced by the character it encodes.

2.  This is analogous to the way backslashes are used in JavaScript strings. Since this mechanism gives ampersand characters a special meaning, too, they need to be escaped as &amp;. Inside attribute values, which are wrapped in double quotes, &quot; can be used to insert an actual quote character.

3.  You can load ES modules in the browser by giving your script tag a type="module" attribute. Such modules can depend on other modules by using URLs relative to themselves as module names in import declarations.

4.  Each DOM node object has a nodeType property, which contains a code (number) that identifies the type of node. Elements have code 1, which is also defined as the constant property Node.ELEMENT_NODE. Text nodes, representing a section of text in the document, get code 3 (Node.TEXT_NODE). Comments have code 8 (Node.COMMENT_NODE).

5.  `Document` object will give us the access to whole web page. `Document.body` is a node.

6.  `node.childNodes` will give us all the nodes of all types
7.  `node.children` will return only type 1 nodes
8.  `childNodes` is not a real array, we cannot loop over it with for/of and have to run over the index range using a regular for loop or use Array.from.
9.  A node can exist in the document in only one place
10. When carrying out live operation on elements , you from last element to first .
11. You can make up your own attribute names for nodes, use , `getAttribute`, `setAttribute` to access it.
12. `appendChild, insertBefore, replaceChild
13. Block elements are rendered in a seperate lines `<p>,<h1>`
14. Inline elements are rendered in a single line
15. `addEventListener` on the window object to register a handler for the whole window. Simillarly for on ther nodes to register an event on particular node.
16. Call `stopPropagation ` on an event to prevent the outward propogarion.
17. use `target` property to identify the node you require , in case, multiple nodes or elements have the same events registered on them
18. `preventDefault` on events override browser default behavior
19. 
