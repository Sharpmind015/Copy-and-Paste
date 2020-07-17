<?php
$email = $_POST["email"];
$servername = "localhost";
$username = "Akindeji";
$password = "password";
$database = "myDB";
// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn === false) {
    die("ERROR: Couldn't connect to database ." .$mysqli->connect_error);
} else {

//  if(isset($_POST['email']) {
   //Check if data is in the database
	$select = mysqli_query($conn, "SELECT `email` FROM `registration` WHERE `email` = '" . $_POST['email'] . "'");
	if (mysqli_num_rows($select)) {
		echo "You have registered before";
	} else {
    //Insert Data
    $sql = "INSERT INTO registration (email) VALUES ('$email')";
    if($conn->query($sql) === TRUE) {
      echo 'Submission successful';
    } else {
      echo "ERROR: Could not execute database ." .$mysqli->error;
    }
  }  
    
  // }
}
$conn->close();
?>
