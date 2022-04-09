const fs = require("fs");
const path = require("path");
exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
  const { user } = req.query;
  res.status(200).send("User Content for " + user);
};

exports.adminBoard = (req, res) => {
  fs.readFile(
    path.resolve(__dirname, "./connectionPacket.json"),
    "utf8",
    (err, data) => {
      if (err) {
        console.error(err);
        res.status(504).send("file read error");
      }
      const { user } = req.query;
      const parsedData = JSON.parse(data);

      res.status(200).send(JSON.stringify(parsedData[user]));
    }
  );

  //after authorization, we need to give the ST socket relayer the nod, and respond with an object containing user settings
};

exports.moderatorBoard = (req, res) => {
  fs.readFile(
    path.resolve(__dirname, "./connectionPacket.json"),
    "utf8",
    (err, data) => {
      if (err) {
        console.error(err);
        res.status(504).send("file read error");
      }
      console.log(data);
      res.status(200).send(data);
    }
  );

  //after authorization, we need to give the ST socket relayer the nod, and Respond with an object containing user settings
};
