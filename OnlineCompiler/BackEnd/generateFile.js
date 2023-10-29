const fs = require('fs');
const path = require('path');
const {v4:uuid} = require('uuid'); //in google document of uuid for node they import like this

const dirCodes = path.join(__dirname, 'codes');
if(!fs.existsSync(dirCodes)){
    fs.mkdirSync(dirCodes, {recursive:true});
}

const GenerateFileMethod = async(format, content)=>{
     const jobID = uuid(); //will create unique id
     const fileName = `${jobID}.${format}`; //create filename with language extendsion
     const filePath = path.join(dirCodes, fileName); //file path where to store new file
     await fs.writeFileSync(filePath, content);//write code contents of file
     return filePath;
};

module.exports={
    GenerateFileMethod,
};