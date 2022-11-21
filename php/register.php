<?php

$connection = new mysqli('localhost', 'root', '', 'users');
if (isset($_GET['Login'])) {

    $name = $connection->real_escape_string($_GET['Name']);
    $phone = $connection->real_escape_string($_GET['Phone']);
    $email = $connection->real_escape_string($_GET['Email']);
    $password = $connection->real_escape_string($_GET['Password']);
    $gender = $connection->real_escape_string($_GET['Gender']);
    $dob = $connection->real_escape_string($_GET['DOB']);

    $query1 = "INSERT INTO `user-info` (`email`, `name`, `phone`, `dob`, `gender`) VALUES ('$email', '$name', '$phone', '$dob', '$gender')";
    if (mysqli_query($connection, $query1)) {
       
    } else {

        echo "Error: " . $sql . "<br>" . mysqli_error($connection);
    }
    $query2 = "INSERT INTO `user-cred` (`ID`, `Email`, `Password`) VALUES (NULL, '$email', '$password')";
    if (mysqli_query($connection, $query2)) {
       
    } else {

        echo "Error: " . $sql . "<br>" . mysqli_error($connection);
    }
    exit('success');
}

?>