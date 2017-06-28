<?php

  if(isset($_POST['fname']) && isset($_POST['lname']) && isset($_POST['email']) && isset($_POST['message'])){
    if(!empty($_POST['fname']) && !empty($_POST['lname']) && !empty($_POST['email']) && !empty($_POST['message'])){
      $fname = $_POST['fname'];
      $lname = $_POST['lname'];
      $email = $_POST['email'];
      $message = $_POST['message'];

      if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
        echo 'Kindly provide a valid EMAIL';
      }
      else{
        $body = $fname."\n".$lname."\n".$email."\n".$message;
        if(mail('madhavbahl20@gmail.com','WEBSITE RESPONSE',$body,'From: response@mywebsite.com')){
          echo 'Thanks for contacting us';
        }
        else{
          echo 'There is a problem in sending mail';
        }
      }
    }
    else {
      echo "ALL fields are empty";
    }
  }
  else{
    echo 'Not OK';
  }

?>


<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="content-type" content="text/html" />
    <meta name="author" content="MADHAV" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="http://www.w3schools.com/lib/w3.css">
    <title>Contact Us</title>

  </head>
  <body>

    <div class="w3-container w3-teal">
      <h5 class="w3-center">Contact Us</h5>
      <p>Please fill in the form</p>
      <form action="" method="POST">
        <fieldset>
          <legend>Your Details</legend>
          First Name: <br />
          <input type="text" name="fname" required=""/><br />
          Last Name: <br />
          <input type="text" name="lname" required=""/><br />
          Email ID: <br />
          <input type="email" name="email" required=""/><br />
          Your Message: <br />
          <textarea name="message" required="" rows="7" cols="30"></textarea><br />
          <input type="submit" value="Contact Me"/>
        </fieldset>
      </form>
    </div>

  </body>
</html>
