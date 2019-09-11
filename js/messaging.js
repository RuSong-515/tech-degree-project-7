const user = document.getElementById('userField');
const message = document.getElementById('messageField');
const send = document.getElementById('send');

send.addEventListener('click', () => {
  if (message.value === '' && user.value === '') {
    window.alert("User's field and message are both required.");
  } else if (user.value === '') {
    window.alert("User's field is required.");
  } else if (message.value === '') {
    window.alert("Message field is required.");
  } else {
    window.alert(`Your message has been sent to: ${user.value}`);
  }
});

