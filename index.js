const text =
  "Lorem, ipsum dolor sit amet, consectetur adipisicing elit, \
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi \
  ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit \
  in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \
  Excepteur sint occaecat cupidatat non proident, \
  sunt in culpa qui officia deserunt mollit anim id est laborum.";

// Step 1: taken the above variable text and made into a array

let arrayOfWords = text.split(" ")
console.log(arrayOfWords)

// Step 2: need to loop through the array (arrayOfWords) and find a specific word (dolor)

// the below loops through the whole array

for(i = 0; i < arrayOfWords.length; i++){
  console.log(arrayOfWords[i]);
}

// the below loops through the array and using if arrayOfWords = dolor it changes arrayOfWords to xxx

for(i = 0; i < arrayOfWords.length; i++){
  if(arrayOfWords[i] === "dolor"){
    arrayOfWords[i] = "xxx";
    console.log(arrayOfWords)
  }
}

// Step 4: need to return the new array with replaced words 

for(i = 0; i < arrayOfWords.length; i++){
  if(arrayOfWords[i] === "dolor"){
    arrayOfWords[i] = "xxx";
    
  }
}
console.log(arrayOfWords)


// Step 5 need to put all of the above in a function ✅


function censor (wordToChange, wordToReplace){

  

  for(i = 0; i < arrayOfWords.length; i++){
    if(arrayOfWords[i] === wordToChange){
      arrayOfWords[i] = wordToReplace;
      return arrayOfWords
      
    }
  }
  console.log(arrayOfWords)
  
}



  


//// below is jonathons messing around with code //////

// the below function so far takes the original variable text, makes it a string (not nessesary if above has been run)
// then allows the user to add new words to the array (arrayOfWords) 
// and add words to a 'badwords' list
// this works and the array changes ✅




const text = // text held in a variable we were given

"Lorem, ipsum dolor sit amet, consectetur adipisicing elit, \
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi \
ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit \
in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \
Excepteur sint occaecat cupidatat non proident, \
sunt in culpa qui officia deserunt mollit anim id est laborum.";

let arrayOfWords = text.split(" ") // taken the above words and used .split to make an array which adds to the array wordsTobeEdited

// wordsToBeEdited = [] // created an empty array // not needed as is above
let badWords = [] // created another empty array
const wordToReplace = "xxx" //created a variable to replace any bad words

function addToArray(wordToAddToArrayEdited, wordsToGoInBadWords){ // created a function to add more words to 2 arrays

  arrayOfWords.push(wordToAddToArrayEdited) // pushed the wordToAddEdited to the wordsToBeEdited array

  badWords.push(wordsToGoInBadWords) // pushed the wordsToGoInBadWords to the badWords array

  alert("The word you added to edited list was: " + wordToAddToArrayEdited +  "\nAnd the new array for words to be edited is: " + arrayOfWords) 
  // alerted the word added and the new array

  alert("The bad word you added was: " + wordsToGoInBadWords +  "\nAnd the new array for bad words is: " + badWords) 
   // alerted the word added and the new array

  }

// i need to make it loop through wordsToBeEdited array
// i need to make it loop through the badWords array
// and check it there are matching words within each array - 
// if so list their index (in wordsToBeEdited array) 
// and replace these index's with wordToReplace varibale (xxx)
// no idea how to do this !!!! (the below is code from first attempt & changed and it doesn't work) ❌

  function censor (wordsToBeEdited, badWords, wordToReplace){

    for(i = 0; i < arrayOfWords.length; i++){
      if(arrayOfWords[i] === badWords[i]){
        arrayOfWords[i] = wordToReplace;
        return arrayOfWords
        
      }
    }
    console.log(arrayOfWords)
    
  }



// trying to make a function where i can put in as many words (string) as i want - this isn't working

function addToArray(){ 
  wordsToBeEdited = [] 
  wordsToBeEdited.push()
  console.log(wordsToBeEdited)
  }




  ///// changing code but keeping above original

  const text =
  "Lorem, ipsum dolor sit amet, consectetur adipisicing elit, \
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi \
  ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit \
  in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \
  Excepteur sint occaecat cupidatat non proident, \
  sunt in culpa qui officia deserunt mollit anim id est laborum.";

  let arrayOfWords = text.split(" ")

  let badWords = [] 
  const wordToReplace = "xxx" 

  // function 1 allows you to change the original array and also creates a new bad words array //

  function addToArray(wordToAddToArrayEdited, wordsToGoInBadWords){ 

    arrayOfWords.push(wordToAddToArrayEdited) 
  
    badWords.push(wordsToGoInBadWords) 
  
    alert("The word you added to edited list was: " + wordToAddToArrayEdited +  "\nAnd the new array for words to be edited is: " + arrayOfWords) 
    
    alert("The bad word you added was: " + wordsToGoInBadWords +  "\nAnd the new array for bad words is: " + badWords) 
  }

  // function 2 allows you to individually change words within the original array //
  // I need function 2 to loop through original array and compare with bad words array // 

    function censor (wordToChange, wordToReplace){

      for(i = 0; i < arrayOfWords.length; i++){
        if(arrayOfWords[i] === wordToChange){
          arrayOfWords[i] = wordToReplace;
          return arrayOfWords
          
        }
      }
      console.log(arrayOfWords)
      
    }

    

    // the below is Duncans code that i'm trying to understand and reverse engineer

    // i can see that everytime you run the function censor you are working with a new array so...
    //...any changes you previously made are redundant

    function censor(text, wordToCensor, replacementString) {

      //:heavy_check_mark: take the string, and put each word in an array called words
      const wordsArray = text.split(' ')
      console.log(`words: ${wordsArray}`)
    
      //:heavy_check_mark: check the array against wordToCensor, note down its index in an array, make a count of the words frequency
      let wordCount = 0
    
      for (let word in wordsArray) {
    
        if (wordsArray[word] === wordToCensor) {
    
          wordsArray.splice(word, 1, replacementString)
    
    
          wordCount ++
    
          console.log(`count ${wordCount}`)
    
        }
        // if there has been no words counted, and we are on the last word in the array, then print there is no word
        else if (wordsArray[word] === wordsArray[wordsArray.length-1]) {
          console.log(wordsArray)
        }
        else if (wordCount === 0 && wordsArray[word] === wordsArray[wordsArray.length-1]) {
          console.log("There is no such word ☹")
          return false
        }
    
      }
     }
    
     const text =
     "Lorem, ipsum ipsum ipsum dolor sit amet, consectetur adipisicing elit, \
     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \
     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi \
     ut aliquip ex ea tempor commodo consequat. Duis aute irure dolor in reprehenderit \
     in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \
     Excepteur sint occaecat tempor cupidatat non proident, \
     sunt in culpa qui officia deserunt mollit anim id est laborum.";
    
     
      censor(text, "ipsum", "dick")