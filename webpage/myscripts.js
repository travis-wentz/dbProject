function cityAndType(city, htype) {
    var text = "hi";
    // document.getElementById("error").innerHTML = city;
    // document.getElementById("error1").innerHTML = htype;
    // return;

    switch(city){
        case "Bozeman":
            switch(htype){
                case("HouseRent"):
                    window.location = "file:///Users/TravisWentz/github/dbProject/webpage/results.html";
                    //SQL to get houses to rent in Bozeman;
                    break;
                case("Apartment"):
                    window.location = "file:///Users/TravisWentz/github/dbProject/webpage/results.html";
                    //SQL to get apartments in Bozeman;
                    break;
                case("Condo"):
                    window.location = "file:///Users/TravisWentz/github/dbProject/webpage/results.html";
                    //SQL to get condos in Bozeman;
                    break;
                case("Trailer"):
                    window.location = "file:///Users/TravisWentz/github/dbProject/webpage/results.html";
                    //SQL to get trailers in Bozeman;
                    break;
                case("Land"):
                    window.location = "file:///Users/TravisWentz/github/dbProject/webpage/results.html";
                    //SQL to get land in Bozeman;
                    break;
                default:
                    text = "Please select a city and a housing type.";
                    document.getElementById("error").innerHTML = text;
            }
            break;
        case("Seattle"):
            switch(htype){
                case("HouseRent"):
                    window.location = "file:///Users/TravisWentz/github/dbProject/webpage/results.html";
                    //SQL to get houses to rent;
                    break;
                case("Apartment"):
                    window.location = "file:///Users/TravisWentz/github/dbProject/webpage/results.html";
                    //SQL to get apartments;
                    break;
                case("Condo"):
                    window.location = "file:///Users/TravisWentz/github/dbProject/webpage/results.html";
                    //SQL to get condos;
                    break;
                case("Trailer"):
                    window.location = "file:///Users/TravisWentz/github/dbProject/webpage/results.html";
                    //SQL to get trailers;
                    break;
                case("Land"):
                    window.location = "file:///Users/TravisWentz/github/dbProject/webpage/results.html";
                    //SQL to get land;
                    break;
                default:
                    text = "Please select a city and a housing type.";
                    document.getElementById("error").innerHTML = text;
            }
            break;
        case("Las Angeles"):
            switch(htype){
                case("HouseRent"):
                    window.location = "file:///Users/TravisWentz/github/dbProject/webpage/results.html";
                    //SQL to get houses to rent;
                    break;
                case("Apartment"):
                    window.location = "file:///Users/TravisWentz/github/dbProject/webpage/results.html";
                    //SQL to get apartments;
                    break;
                case("Condo"):
                    window.location = "file:///Users/TravisWentz/github/dbProject/webpage/results.html";
                    //SQL to get condos;
                    break;
                case("Trailer"):
                    window.location = "file:///Users/TravisWentz/github/dbProject/webpage/results.html";
                    //SQL to get trailers;
                    break;
                case("Land"):
                    window.location = "file:///Users/TravisWentz/github/dbProject/webpage/results.html";
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