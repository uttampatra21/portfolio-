const footer = document.querySelector("footer");
footer.innerHTML =`

`;

function sendMessage(){
  Email.send({
      Host : "smtp.email.com",
      Username : "boxmassage@gmail.com",
      Password : "uttampatra69",
      To : 'boxmassage@gmail.com',
      From : document.getElementById("email"),
      Subject : "New Contact From Enquary",
      Body : "Name :" + document.getElementById("name").value
              +"<br> Email :" + document.getElementById("email").value
              +"<br> Messege :" + document.getElementById("Message").value

  }).then(
  message => alert(message)
  );
}