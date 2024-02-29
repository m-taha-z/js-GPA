alert("Hello, I want to calculate the GPA of your lessons");
let n = Number(prompt("How many lessons do you want to enter?"));
let s = 0;
let j = 0;
for (i = 1; i <= n; ++i) {
  let numbers = Number(prompt("enter number" + " " + i));
  s += numbers;
  j += 1;
}
alert("I calculated the GPA of your lessons");
alert("average =" + s / j);
if (s / j >= 20) {
  alert(
    "You are a book-chewing bookworm, and your studies are very good, and you might be Lucy's child."
  );
}
if ((s / j >= 18, s / j < 20)) {
  alert("Your lesson is good, but you have bad luck");
}
if ((s / j >= 15, s / j < 17.99)) {
  alert("Your course is good and you are not a bad student");
}
if ((s / j >= 10, s / j < 14.99)) {
  alert("Your lesson is not good and you should try harder");
}
if ((s / j >= 0, s / j < 9.99)) {
  alert(
    "You are now wasting the efforts of your parents and you have a ruined future, of course, if you do not increase your efforts and do not get out of this stupid state."
  );
}