function cityAndType(var1, var2) {
    var text = "hi";

    // window.alert(city);
    // return;
    document.getElementById("error").innerHTML = var1;
    return;

    switch(city){
        case 'Bozeman':
            switch(htype){
                case 'HouseBuy':
                    window.location = "file:///Users/TravisWentz/github/dbProject/webpage/html/houseBuy.html";
                    //houseBuy.html;
                    //SQL to get houses to buy in Bozeman;
                    break;
                case("HouseRent"):
                    //go to houseRent.html;
                    //SQL to get houses to rent in Bozeman;
                    break;
                case("Apartment"):
                    //go to apartment.html;
                    //SQL to get apartments in Bozeman;
                    break;
                case("Condo"):
                    //go to condo.html;
                    //SQL to get condos in Bozeman;
                    break;
                case("Trailer"):
                    //go to trailer.html;
                    //SQL to get trailers in Bozeman;
                    break;
                case("Land"):
                    //go to land.html;
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