const {blogs}= require(`../data/data.js`);

// write functions
const FetchAlldata=(req,res)=>{
    try{
        res.status(200).json({
            success:true,
            data:blogs
        })
    }catch(err){
        res.status(500).json({
            success:false,
            message:err.message
        })
    }
}


// create

const CreateData = (req, res) => {
    try {
        let { title, author, category, description, isPublished } = req.body;

        if (
            !title ||
            !author ||
            !category ||
            !description ||
            typeof isPublished !== "boolean"
        ) {
            return res.status(400).json({
                success: false,
                message: "Please provide all blog data"
            });
        }

        let newblogs = {
            title,
            author,
            category,
            description,
            isPublished,
            id: Date.now()
        };

        blogs.push(newblogs);

        return res.status(201).json({
            success: true,
            data: newblogs
        });

    } catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message
        });
    }
};

// update
const updateDtaa=(req,res)=>{
    try{
        let BlogId= Number(req.params.id);
        let index= blogs.findIndex(t=>t.id===BlogId)
        if(index===-1){
            return res.status(404).json({
                success: false,
                message: `blogs not found with id ${BlogId}`
            });

        }
                let body=req.body;

        if(!body.title ||
            !body.author ||
            !body.category ||
            !body.description ||
            typeof body.isPublished !== "boolean"){
                return res.status(400).json({
                success: false,
                message: "Please provide blog data"
            });
            }
            let upobj={
                ...blogs[index],
                ...body,
                id:blogs[index].id
            };
            blogs[index]=upobj;

             res.status(200).json({
            success: true,
            message: `blogs updated successfully with id ${BlogId}`,
            data: upobj
        });

    }catch(err){
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: err.message
        });
    }

}


// delete
const DeletePost=(req,res)=>{
    try{
        let Remove_id=Number(req.params.id);
        let index=blogs.findIndex(t=>t.id==Remove_id)
        if(index=== -1){
            return res.status(404).json({
                success:false,
                message:`blogs not found with id ${Remove_id}`
            });
        }
        blogs.splice(index,1)
        res.status(200).json({
            success:true,
                message:`blogs sucsesfully deleted with id ${Remove_id}`
           
        });

    }catch(err){
        res.status(500).json({
            success:false,
            message:"server error",
            err:err.message

        })


    }
}

module.exports={
    FetchAlldata,
    CreateData,
    updateDtaa,
    DeletePost
}
