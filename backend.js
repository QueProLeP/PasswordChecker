const passwordInput = document.getElementById('password');
const feedback = document.getElementById('feedback');
const commonPasswords = [
     "123456", "password", "12345678", "qwerty", "123456789", "12345", "1234",
  "111111", "1234567", "dragon", "123123", "baseball", "abc123", "football",
  "monkey", "letmein", "696969", "shadow", "master", "666666", "qwertyuiop",
  "123321", "mustang", "1234567890", "michael", "654321", "superman",
  "1qaz2wsx", "7777777", "asdf", "121212", "000000", "qazwsx", "123qwe",
  "killer", "trustno1", "jordan", "jennifer", "zxcvbnm", "asdfgh", "hunter",
  "buster", "soccer", "harley", "batman", "andrew", "tigger", "sunshine",
  "iloveyou", "myspace1"
];

passwordInput.addEventListener('input', () => {
  const pwd = passwordInput.value;
  feedback.textContent = checkPasswordStrength(pwd);
  feedback.style.color = getColorForStrength(pwd);
});

function checkPasswordStrength(password){
    if(commonPasswords.includes(password) ) return "Real original aren't we..... top 50 most common passwords? Really now??";
    if(password.length < 6) return "Your password is too short bro";
    if(!/[a-z]/.test(password)) return "Where are the lowercase letters buddy";
    if(!/[A-Z]/.test(password)) return "Where are the UPPERCASE letters buddy";
    if(!/[0-9]/.test(password)) return "Forgot your numbers? What are we 8 years old?";
    if(!/[a-zA-z0-9]/.test(password)) return "Where are the lowercase letters buddy";
    if(password.length <= 12) return "now we getting somewhere pal!"
    return "This password is certified not completely garbage!"
}

function getColorForStrength(password){
    if (password.length < 6 || commonPasswords.includes(password)) return "red";
  if (password.length >= 12 &&
      /[a-z]/.test(password) &&
      /[A-Z]/.test(password) &&
      /[0-9]/.test(password) &&
      /[^A-Za-z0-9]/.test(password)) return "green";
  return "orange";
}

