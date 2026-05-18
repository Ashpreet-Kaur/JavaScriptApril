const modeToggle = document.getElementById('modeToggle');
const modeStatus = document.getElementById('modeStatus');

modeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    modeStatus.textContent = isDark ? 'Dark mode is ON' : 'Light mode is ON';
    modeToggle.textContent = isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode';
});





//  Classlist Method - 
//  The classList property returns the class names of an element as a DOMTokenList object. This object has several methods that can be used to manipulate the class names of an element.

//  Classlist methods - 
//  1. add() - This method adds a class to the element. If the class already exists, it will not be added again.
//  2. remove() - This method removes a class from the element. If the class does not exist, it will do nothing.
//  3. toggle() - This method toggles a class on the element. If the class exists, it will be removed. If the class does not exist, it will be added.
//  4. contains() - This method checks if a class exists on the element. It returns true if the class exists, and false if it does not exist.
//  5. replace() - This method replaces an existing class with a new class. If the old class does not exist, it will do nothing. If the new class already exists, it will not be added again.