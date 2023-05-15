const jwt = require('jsonwebtoken');
const auth = (req, res, next) => {
    const Auth = req.headers.authorization
    if (Auth && Auth.split(' ')[0] === 'Bearer') {
        const token = Auth.split(' ')[1];
        if (token) {
            return jwt.verify(token, 'ss hh dd', function (err, decoded) {
                if (err) {
                    res.status(401).json({
                        statu: false,
                        statusCode: 401,
                        message: 'Token expire Please login again...'
                    })
                } else {
                    req.user = {
                        id: decoded.id,
                        email: decoded.email,
                        exp: decoded.exp
                    }
                    next()
                }
            });
        } else {
            next()
        }
    } else {
        next()
    }
}

module.exports = {
    auth
}