const auth = {
    isAuthenticated : localStorage.isAuthenticated,
    login(callback){
        localStorage.isAuthenticated = "true";
        this.isAuthenticated = "true"
        setTimeout(callback, 2000)
    },
    signout(callback){
        localStorage.isAuthenticated = "false"
        this.isAuthenticated ="false"
        setTimeout(callback, 2000)
    }
}

export default auth;