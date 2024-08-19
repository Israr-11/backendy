const userModel = require("../Model/model");

//GET Request

const gettingAllData = async (req, res) => {
  try {
    const userData = await userModel.find();
    if (userData === null) {
      return res.status(404).json({
        STATUS: "FAILED",
        MESSAGE: "No such data found!",
      });
    }
    res.status(200).json({
      STATUS: "SUCCESSFUL",
      userData,
    });
  } catch (error) {
    res.status(500).json({
      STATUS: "FAILED",
      MESSAGE: "Cannot get the data!",
    });
  }
};

//POST Requests

const postingData = async (req, res) => {
  try {
    const router = new userModel({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      age: req.body.age,
    });

    if (!router.firstName || !router.lastName || !router.age) {
      return res.status(500).json({
        STATUS: "FAILED",
        MESSAGE: "All field required!",
      });
    }

    const postedData = await router.save();

    res.status(200).json({
      STATUS: "SUCCESSFUL",
      postedData,
    });
  } catch (error) {
    res.status(500).json({
      STATUS: "FAILED",
      MESSAGE: "Cannot post the data!",
    });
  }
};



module.exports = {
  gettingAllData,
  postingData
};
