/* DESCRIPTION:
Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

Example:

"riley" --> "Hello Riley!"
"JACK"  --> "Hello Jack!" */

function Nome(name) {
    return `Hello ${name[0].toUpperCase()}${name.substring(1).toLowerCase()}!`
  };
  //O mais bem pensado que eu já fiz :)
  console.log(Nome('edUardo'));