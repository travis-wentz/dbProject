<html>
<head>
    <title>Filter</title>
</head>
<body>
<?php
$servername = "192.168.10.1";
$username = "robins";
$password = "fr4lxpi6in";
$dbname = "robins";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$city = $_GET("selected1");
$htype = $_GET("selected2");
$minrooms = $_GET("min_rooms");
$maxrooms = $_GET("max_rooms");
$minrooms = $_GET("min_rooms");
$minprice = $_GET("min_price");
$maxprice = $_GET("max_price");

echo $city.$htype;

$sql = "SELECT * FROM $htype AS H JOIN HOUSING AS HO ON H.ID = HO.ID JOIN LISTING AS L ON H.ID =L.ID WHERE City = "$city"
AND Num_Rooms > $minrooms-1 AND Num_Rooms < $maxrooms+1 AND Price > $minprice-1 AND Price < $maxprice+1";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo "id: " . $row["id"]. " - Name: " . $row["firstname"]. " " . $row["lastname"]. "<br>";
    }
} else {
    echo "0 results";
}

?>
</body>
</html>