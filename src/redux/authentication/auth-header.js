export function authHeader(req, res, next) {
    JSON.parse(localStorage.getItem('user'));

    if(user && user.token) {
        return {'Authorization':'Bearer' + user.token}
    }
    else {
        return;
    }
}