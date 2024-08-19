const router = require("express").Router();
const userStorer = require("../Controller/userData");

router.get("/get_user", userStorer.gettingAllData);
router.post("/create_user", userStorer.postingData);


module.exports = router;
