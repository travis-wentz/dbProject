$servername = "localhost";
$username = "root";
$password = "";
$dbname = "myDB";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

///////
function cityAndType(city, htype) {
    var text = "hi";
    // document.getElementById("error").innerHTML = city;
    // document.getElementById("error1").innerHTML = htype;
    // return;

    switch(city){
        case "Bozeman":
            switch(htype){
                case("HouseRent"):
                    window.location = "file:///Users/daverobins/documents/dbProject/webpage/html/houseRent.html";
                    $sql = "SELECT * FROM HOUSE AS H JOIN HOUSING AS HO ON H.ID = HO.ID JOIN LISTING AS L ON H.ID =L.ID WHERE City = "Bozeman" ";
                    $result = $conn->query($sql);
                    break;
                case("Apartment"):
                    window.location = "file:///Users/daverobins/documents/dbProject/webpage/html/apartment.html";
                    $sql = "SELECT * FROM APARTMENT AS H JOIN HOUSING AS HO ON H.ID = HO.ID JOIN LISTING AS L ON H.ID =L.ID WHERE City = "Bozeman" ";
                    $result = $conn->query($sql);
                    break;
                case("Condo"):
                    $sql = "SELECT * FROM CONDO AS H JOIN HOUSING AS HO ON H.ID = HO.ID JOIN LISTING AS L ON H.ID =L.ID WHERE City = "Bozeman" ";
                    $result = $conn->query($sql);
                    break;
                case("Trailer"):
                    window.location = "file:///Users/TravisWentz/github/dbProject/webpage/html/trailer.html";
                    $sql = "SELECT * FROM TRAILER AS H JOIN HOUSING AS HO ON H.ID = HO.ID JOIN LISTING AS L ON H.ID =L.ID WHERE City = "Bozeman" ";
                    $result = $conn->query($sql);
                    break;
                case("Land"):
                    window.location = "file:///Users/TravisWentz/github/dbProject/webpage/html/land.html";
                    $sql = "SELECT * FROM LAND AS H JOIN HOUSING AS HO ON H.ID = HO.ID JOIN LISTING AS L ON H.ID =L.ID WHERE City = "Bozeman" ";
                    $result = $conn->query($sql);
                    break;
                default:
                    text = "Please select a city and a housing type.";
                    document.getElementById("error").innerHTML = text;
            }
            break;
        case("Seattle"):
            switch(htype){
                case("HouseBuy"):
                    //go to houseBuy.html;
                    //SQL to get houses to buy;
                    break;
                case("HouseRent"):
                    //go to houseRent.html;
                    //SQL to get houses to rent;
                    break;
                case("Apartment"):
                    //go to apartment.html;
                    //SQL to get apartments;
                    break;
                case("Condo"):
                    //go to condo.html;
                    //SQL to get condos;
                    break;
                case("Trailer"):
                    //go to trailer.html;
                    //SQL to get trailers;
                    break;
                case("Land"):
                    //go to land.html;
                    //SQL to get land;
                    break;
                default:
                    text = "Please select a city and a housing type.";
                    document.getElementById("error").innerHTML = text;
            }
            break;
        case("Las Angeles"):
            switch(htype){
                case("HouseBuy"):
                    //go to houseBuy.html;
                    //SQL to get houses to buy;
                    break;
                case("HouseRent"):
                    //go to houseRent.html;
                    //SQL to get houses to rent;
                    break;
                case("Apartment"):
                    //go to apartment.html;
                    //SQL to get apartments;
                    break;
                case("Condo"):
                    //go to condo.html;
                    //SQL to get condos;
                    break;
                case("Trailer"):
                    //go to trailer.html;
                    //SQL to get trailers;
                    break;
                case("Land"):
                    //go to land.html;
                    //SQL to get land;
                    break;
                default:
                    text = "Please select a city and a housing type.";
                    document.getElementById("error").innerHTML = text;
            }
            break;
        default:
            text = "Please select a city and a housing type.";
            document.getElementById("error").innerHTML = text;
    }
    return;
}