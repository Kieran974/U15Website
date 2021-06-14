//Function to check userid & password
function check(login)
{
 //The following code checks whether the entered user id and password match
 if(login.userid.value == "username@test.com" && login.pswrd.value == "password")
  {
    //Opens the target page while Id & password matches
    window.open('products.html')
  }
 else
 {
   //Displays error message
   alert("Error: Please enter a valid password and/or username")
  }
}
