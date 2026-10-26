var cl=console.log;

let express= require(`express`);
const app=express();
const router=require(`./router/router.js`);
app.use(express.json());
app.use("/api/blogs",router);
module.exports=app;

