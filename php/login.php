<?php
$connection = new mysqli('localhost', 'root' , '', 'users');
if (isset($_GET['login'])){
    $email = $connection->real_escape_string($_GET['email']);
    $password = $connection-> real_escape_string($_GET['password']);

    $data = $connection->query(query: "SELECT Id FROM `user-cred` where email='$email' AND password='$password'");

    if($data->num_rows>0){
         exit('success');
     }

     else{
         exit("Email or Password is incorrect");
     }

}

?>