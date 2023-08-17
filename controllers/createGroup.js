const jwt = require("jsonwebtoken");

const createGroup = async (req, res, next) => {
  try {
    const { title, members, pastGroups } = req.body;
    const payload = {
      title,
      members,
      pastGroups
    };
    // console.log(req.body);
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "259200m",
    });
    res
      .header("Access-Control-Allow-Credentials", true)

      .cookie("randomGroups_token", token, {
        maxAge: 180 * 24 * 60 * 60 * 1000,
        // httpOnly: true,
      })
      .json(payload);
  } catch (error) {
    next(error);
  }
};

module.exports = createGroup;
