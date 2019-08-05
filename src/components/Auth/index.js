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

export const  signin = user =>{
    return fetch( `${process.env.REACT_APP_API_URL}/signin`, {
        method: "POST",
        headers: {
            Accept: "appication/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
    .then(response => {
        return response.json()
    })
    .catch(err => console.log(err))
  };

  export const authenticate =  (jwt, next) => {
    if(typeof window !== "undefined"){
        localStorage.setItem("jwt", JSON.stringify(jwt))
        next();
    }
  };
  
  export const signout = next => {
      if (typeof window !== "undefined") localStorage.removeItem("jwt");
      next();
      return fetch( `${process.env.REACT_APP_API_URL}/signout`, {
        method: "GET"
      })
        .then(response => {
          console.log("signout", response);
          return response.json();
        })
        .catch(err => console.log(err));
    };
    
    export const isAuthenticated = () => {
      if (typeof window == "undefined") {
        return false
      }
      if (localStorage.getItem("jwt")) {
        return JSON.parse(localStorage.getItem("jwt"));
      } else {
        return false
      }
    };


    export const create = (userId, token, inventory) => {
        const body = JSON.stringify(inventory);
        console.log('INVENTOTY', body)

        return fetch (`${process.env.REACT_APP_API_URL}/inventory/${userId}`, {
            method: "POST",
            headers: {
                'Content-Type': "application/json",
                Authorization: `Bearer ${token}`
            },
            body:body
        })
        .then(response => {
            return response.json();
        })
        .catch( err => console.log(err));
    };