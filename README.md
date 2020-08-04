# Typewrite Text effect - React

### In App.js file change the following values to see the effects

```
  <TypeIn
    text={`The quick brown fox jump over the lazy dog`}
    type='letter' // word or letter
    animation='in-left' // in-left, in-down or leave it empty
    repeat={true} // true or false
    delay='3000' // delay after each cycle
    speed='200' // more number, more slow
    onComplete={() => console.log('complete')} // any function to class after every cycle
    class='custom-text-style' // any custom class you created in type.css
    show={true} // true or false
  />
```
