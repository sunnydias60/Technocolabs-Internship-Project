const { findByAltText } = require("@testing-library/react");

const apiKey = "JCYpG7-JCmvUbJajwxeL_48ak--BncVSVnv8845c5PQ_4mNCRy_UxOWSvEku7DF4N49apPUCjxOakOtyCk--nnvkMKIk7LOLcdG7jL-oQsT6oK2-Qti2x4V1iD5RX3Yx";
var Yelp = {};

function search(term, location, sortBy) {
    return (
    fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${SotBy}`, {headers: {Authorization: `Bearer ${apiKey}`}})
    .then(response => {
        return response.json();
    }
    )
    .then(
        jsonResponse => {
            if(jsonResponse.bussinesses.map(
                bussiness => {
                    return {
                        id: "",
                        imageSrc: "",
                        name:"",
                        address:"",
                        city:"",
                        state:"",
                        zipCode:"",
                        category:"",
                        rating:"",
                        reviewCount: ""
                    };
                }
            )
            );

        }  
    )
    )
}

export {Yelp};