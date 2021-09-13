import jwt from "jsonwebtoken";

// here we define some utilities funcs alike generate token
export const generateToken = (user) => {
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    process.env.JWT_SECRET || "somethingsecret",
    {
      expiresIn: "30d",
    }
  );
};

// create middle layer to authenticate user
export const isAuth = (req, res, next) => {
  const authorization = req.headers.authorization;
  if (authorization) {
    //get token from authorization we use slice func
    const token = authorization.slice(7, authorization.length); //bearer XXXX
    // so we have the token of the request.. next steps is gonna be using jwt to dcreypt the toek.
    // function to that is verify..verify dcrypt the tokn for us and second parameter is jwt-scret... third parameter is call back func that has two parameter err nd decode..that constains the data inside token.
    jwt.verify(
      token,
      process.env.JWT_SECRET || "somethingsecret",
      (err, decode) => {
        if (err) {
          res.status(401).send({ message: "Invalid Token" });
        } else {
          // token is correct .. so we need to do fill req.user by decodeand decode here is the imfo about this user becasuse in the sign part^at generate token we pass --- information as the data ..so jwt.verify returns those data inside decode variable
          req.user = decode;
          next();
          //right after that we pass user as a property of requst to the next middleware.
        }
      }
    );
  } else {
    res.status(401).send({ message: "No Token" });
  }
};

export const isAdmin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401).send({ message: "Invalid Admin Token" });
  }
};
