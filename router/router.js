// mention pathe with endpoints

const express=require(`express`)
const router=express.Router();
const blogcontroller=require(`../controller/blogcontroller.js`);

// get path
router.get("/",blogcontroller.FetchAlldata);
router.post("/",blogcontroller.CreateData);
router.patch("/:id",blogcontroller.updateDtaa);
router.delete("/:id",blogcontroller.DeletePost);




module.exports=router;