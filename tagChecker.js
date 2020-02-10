var myArgs = process.argv.slice(2);

/**
*   Takes a phrase and checks if the opening tags and closing tags is matching.
*/
let checkTags = (phrase) => {

  // Find all instances of tags.
  let re = /<\/?[A-Z]>/g;
  let tags = phrase.matchAll(re);

  // Loop through all the tags and check if matching.
  let res = tags.next();
  let opening = []; // Holds the opening tags in order they come.
  while (!res.done) {
    tag = res.value[0];
    if (tag.length == 3) {
      // Add to the opening tags list
      opening.push(tag);
    } else {
      // Otherwise, it is a closing tag and we can try to match it to latest opening tag.
      currentOpening = opening.pop();
      if(!currentOpening){
        // Missing opening tag.
        return errorMsg('#', tag);
      } else if (currentOpening[1] !== tag[2]) {
        // Opening tag and closing tag not matching
        let expected = correspondingTag(currentOpening);
        return errorMsg(expected, tag);
      }
        // Opening tag and closing tag match, continue.
    }
    res = tags.next();
  }

  /*
  If there is no opening tags left, it was a correct match.
  If there exist opening tag there is a closing tag missing.
  */
  return opening.length === 0 ? "Correctly tagged paragraph" : errorMsg(correspondingTag(opening.pop()), '#');
}

/**
*   Find the corresponding tag.
*/
let correspondingTag = (open) => {
  if (open.length == 3) {
    return open.slice(0, 1) + "/" + open.slice(1);
  } else {
    return open.slice(0,1) + open.slice(2);
  }
}

/**
*   Construct a error message.
*/
let errorMsg = (expected, unexpected) => {
  return `Expected ${expected} found ${unexpected}`;
}

if (myArgs.length != 0) {
  for (let i = 0; i < myArgs.length; i++){
    console.log(checkTags(myArgs[i]));
  }
}

module.exports = checkTags;
