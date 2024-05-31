//set login detail to local storage

export const doLogin = (data) =>{
    // const token = "Bearer "+ data.token;
    // localStorage.setItem("token", token);

    localStorage.setItem("data",JSON.stringify(data));
}


//check is logged in

export const isLoggedIn = () =>{
    const data = localStorage.getItem("data");
    if(data != null){
        return true;
    }

    return false;
}

//log out or remove login detals from local storage

export const doLogOut = () =>{
    if(isLoggedIn()){
        localStorage.removeItem("data");
    }
    
}

export const getUserToken = () =>{
    if(isLoggedIn()){
        return JSON.parse(localStorage.getItem("data")).token;
    }
    else{
        return null;
    }
}

export const getLoggedInUser = () =>{
    if(isLoggedIn()){
        return JSON.parse(localStorage.getItem("data")).userDto;
    }
    return null;
}