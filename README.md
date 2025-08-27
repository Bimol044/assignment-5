"# assignment-5" 
✅getElementById: Finds a document of element by its unique id. Return a single element .

✅getElementsByClassName: Finds element by a class name. Return an HTMLCollection object like array.

✅querySelector: Finds a CSS element to the first matching element. Returns a single element .

✅querySelectorAll:Finds a CSS element to the all matching element in document . Return a NodeList like array.

How do I create and insert a new element into the DOM?
1. Create a new element: use document.createElement('tagName')
2. Add text or content: innerText, textContent or innerHTML.
3. Add attribute , classes or styles.
4. Insert Into the DOM: appendChild(), append().

✅Event Bubbling:
Event Bubbling means that when an event happens on a child element, it propagates upward step by step through its ancestors until it reaches the document unless 

✅Event Delegation: 
Event Delegation means  add event listener on parent element handel the child element. It is useful because it make code cleaner , more efficient and dynamical added element.

✅preventDefault: Its method they stope brawer default .

✅stopPropagation: never come to the event on parent element. 