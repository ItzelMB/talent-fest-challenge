export const signup = user =>{ 
 const URL="http://localhost:8080";
    return fetch( `${URL}/signup`, {
            method: "POST",
            headers: {
                Accept: "appication/json}",
                "Content-Type": "application/json"
            },
            
            body: JSON.stringify(user)
        })
        .then(response => {
            return response.json()
        })
        .catch(err => console.log(err));
};