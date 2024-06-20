function rot13(message){
  
  let lowerCaseAlphabet = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz'.split('')
  let upperCaseAlphabet = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz'.toUpperCase().split('')

  // console.log(lowerCaseAlphabet)
  // console.log(upperCaseAlphabet)

  let encodedMessage = []

  for (let i = 0; i < message.length; i++) {
    
    if (lowerCaseAlphabet.includes(message[i])) {
      encodedMessage.push( lowerCaseAlphabet[ lowerCaseAlphabet.indexOf(message[i]) + 13 ] )
    } else if (upperCaseAlphabet.includes(message[i])) {
      encodedMessage.push( upperCaseAlphabet[ upperCaseAlphabet.indexOf(message[i]) + 13 ] )
    } else {
      encodedMessage.push(message[i])
    }
  }

  return encodedMessage.join('')
}

console.log(rot13('Hello'))


// parameters: message    // a string containing letters, numbers and special characters
// return: encodedMessage     // a string inwhich letters are replaced with the letter 13 letters after them in the alphabet. Other chracters remain as they are
// e.g. rot13('Hello')
// results in 'Uryyb'

// create an array that contains the alphabet uppercase twice 
// create an array that contains the alphabet lowercase twice
// create an empty array called encodedMessage
// loop through the message string
// if lowercaseAlphabet contains message[i] then push lowercaseAphabet[ lowerCaseAlphabet.firstIndexOf(message[i]) + 13 ] to encodedMessage
// else if lowercaseAlphabet contains message[i] then push lowercaseAphabet[ lowerCaseAlphabet.firstIndexOf(message[i]) + 13 ] to encodedMessage
// else push message[i] to encodedMessage
// end loop
// return encodedMessage
