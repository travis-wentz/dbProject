function cityAndType(city, htype) {
    var text = "hi";
    // document.getElementById("error").innerHTML = city;
    // document.getElementById("error1").innerHTML = htype;
    // return;

    switch(city){
        case "Bozeman":
            switch(htype){
                case("HouseRent"):
                    window.location = "file:///Users/TravisWentz/github/dbProject/webpage/html/houseRent.html";
                    //SQL to get houses to rent in Bozeman;
                    break;
                case("Apartment"):
                    window.location = "file:///Users/TravisWentz/github/dbProject/webpage/html/apartment.html";
                    //SQL to get apartments in Bozeman;
                    break;
                case("Condo"):
                    window.location = "file:///Users/TravisWentz/github/dbProject/webpage/html/condo.html";
                    //SQL to get condos in Bozeman;
                    break;
                case("Trailer"):
                    window.location = "file:///Users/TravisWentz/github/dbProject/webpage/html/trailer.html";
                    //SQL to get trailers in Bozeman;
                    break;
                case("Land"):
                    window.location = "file:///Users/TravisWentz/github/dbProject/webpage/html/land.html";
                    //SQL to get land in Bozeman;
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