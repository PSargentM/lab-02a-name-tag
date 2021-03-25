// 1. create variables for each 
// element we need to interact with
const nameInput = document.getElementById('name-input');
const changeNameButton = document.getElementById('change-your-name-here');
const nameDisplay = document.getElementById('your-name-here');

// 2. add listeners for events we care about
changeNameButton.addEventListener('click', () => {

// 3. do the action
nameDisplay.textContent = nameInput.value;
});

// 1. create variables for each 
// element we need to interact with
const pronounInput = document.getElementById('pronoun-input');
const changePronounButton = document.getElementById('change-your-pronouns-here');
const pronounDisplay = document.getElementById('your-pronouns-here');

// 2. add listeners for events we care about
changePronounButton.addEventListener('click', () => {

// 3. do the action
pronounDisplay.textContent = pronounInput.value;
});
