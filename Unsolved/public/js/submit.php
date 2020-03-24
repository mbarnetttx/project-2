<?php
    $servername='localhost';
    $username='root';
    $password='password';
    $dbname = "indoorLearning_db";
    $conn=mysqli_connect($servername,$username,$password,"$dbname");
      if(!$conn){
          die('Could not Connect MySql Server:' .mysql_error());
        }
 
    $title = mysqli_real_escape_string($conn, $_POST['title']);
    $category = mysqli_real_escape_string($conn, $_POST['category']);
    $link = mysqli_real_escape_string($conn, $_POST['link']);
 
    if(mysqli_query($conn, "INSERT INTO learns(title, category, link) VALUES('" . $title . "', '" . $category . "', '" . $link . "')")) {
     echo '1';
    } else {
       echo "Error: " . $sql . "" . mysqli_error($conn);
    }
 
    mysqli_close($conn);
 
?>

