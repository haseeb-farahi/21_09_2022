<?php
$conn = mysqli_connect('localhost', 'root', '','sub_email')

$query = 'SELECT *FROM test';

$result = mysqli_query($conn,$query);

$emails = mysqyli_fetch($result, MYSQYLI_ASSOC);

echo json_encode($emails);