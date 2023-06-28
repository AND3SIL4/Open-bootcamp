let today = new Date();
let birthday = new Date(2002, 4, 6);
let prueba_logica = today > birthday;
let birthday_day = birthday.getDate();
let birthday_month = birthday.getMonth();
let birthday_year = birthday.getFullYear();
console.log(birthday_day, birthday_month, birthday_year);
