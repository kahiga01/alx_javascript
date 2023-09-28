function welcome(firstName, lastName) {
  const fullName = firstName + ' ' + lastName;

  function displayFullName() {
    alert('Welcome ' + fullName + '!');
  }

  displayFullName();
}

// Test the welcome function
welcome('Holberton', 'School');

