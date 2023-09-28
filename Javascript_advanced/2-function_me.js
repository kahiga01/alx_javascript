#!/usr/bin/node
function welcomeMessage(fullName) {
  return function() {
    alert('Welcome ' + fullName);
  };
}

// Create variables containing closures
const guillaume = welcomeMessage('Guillaume');
const alex = welcomeMessage('Alex');
const fred = welcomeMessage('Fred');

// Test the variables by calling the functions
guillaume();
alex();
fred();

