var countDownDate = new Date();
countDownDate = new Date(
   countDownDate.getFullYear() + 1,
   countDownDate.getMonth() - 6,
   1
);

var x = setInterval(function () {
   var now = new Date();
   var diff = countDownDate - now;

   var months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
   var days = Math.floor(
      (diff % (30 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000)
   );
   var hours = Math.floor((diff % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
   var minutes = Math.floor((diff % (60 * 60 * 1000)) / (60 * 1000));
   var secounds = Math.floor((diff % (60 * 1000)) / 1000);

   document.getElementById("month").innerHTML = months;
   document.getElementById("days").innerHTML = days;
   document.getElementById("hours").innerHTML = hours;
   document.getElementById("minutes").innerHTML = minutes;
   document.getElementById("secounds").innerHTML = secounds;
}, 1000);

(function () {
   "use strict";

   var forms = document.querySelectorAll(".needs-validation");

   Array.prototype.slice.call(forms).forEach(function (form) {
      form.addEventListener(
         "submit",
         function (event) {
            if (!form.checkValidity()) {
               event.preventDefault();
               event.stopPropagation();
            }

            form.classList.add("was-validated");
         },
         false
      );
   });
})();
