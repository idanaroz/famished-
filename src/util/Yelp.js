import Business from "../components/Business/Business";

const apiKey = '0BxLPzYZSId9-CnW5lyW8H7gGf1zJ2WPAFKNf1DkZIcEPB3maabBpXkcd3bFMgn_jh_0DanqD4K1HkoMjG5La1MIS-PiUYtJLighh9Ym3lArsl984Ukvkb9E9NNzXXYx'


const yelp = {
    async searchYelp(term, location, sortBy){
        const response = await fetch(`https://cors-anywhere.herokuapp.com/api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: { Authorization: `Bearer ${apiKey}` }
        });
        const jsonResponse = await response.json();
        if (jsonResponse.businesses) {
            return jsonResponse.businesses.map(business => {
                return {
                    id: business.id,
                    imageSrc: business.image_url,
                    name: business.name,
                    address: business.location.address1,
                    city: business.location.city,
                    state: business.location.state,
                    zipCode: business.location.zip_codw,
                    category: business.categories[0].title,
                    rating: business.rating,
                    reviewCount: business.review_count,
                };
            });
        }
            
    }
}


export default yelp;