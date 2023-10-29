const express = require('express');
const app = express();
const {GenerateFileMethod} = require("./generateFile.js");
const {executeJavaMethod} = require("./executeJavaFiles.js");
const cors  = require('cors');

//middlewares
app.use(cors());

//need to use before post or else while using postman you get error here in console
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.get('/',(req,res)=>{
    res.json({online:"compiler"});
});




app.post('/run', async(req,res)=>{
    // const language = req.body.language;
    // const code = req.body.code;
    const {language = 'cpp', code} = req.body;
    if (code === undefined){
        return res.status(404).json({success:false, error : "empty code"});
    }

    try{
        const filePath = await GenerateFileMethod(language, code);
        const outPut = await executeJavaMethod(filePath);
        res.json({filePath, outPut});
    }
    catch(error){
        res.status(500).json({error:error});
    }
});
app.listen(5000, ()=>{
    console.log("Server is running on port 5000");
});
