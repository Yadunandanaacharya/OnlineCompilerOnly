const {exec} = require("child_process");
const fs = require("fs");
const path = require("path");
// const outPutPath = path.join(__dirname, "outputs");
const outPutPath = "D:\\GitHubCloneRepos\\MyGitDontAddAnyFile\\Personal-projects\\OnlineCompilerOnly\\OnlineCompiler\\BackEnd\\codes";
if(!fs.existsSync(outPutPath)){
    fs.mkdirSync(outPutPath, {recursive:true});
}

// D:\\GitHubCloneRepos\\MyGitDontAddAnyFile\\Personal-projects\\OnlineCompilerOnly\\OnlineCompiler\\BackEnd\\codes\\0f011097-1a47-4e38-983d-389c012edf48.java

const executeJavaMethod = (filePath)=>{
    const jobID = path.basename(filePath).split(".")[0];
    const extensionOfLanguage = path.basename(filePath).split(".")[1];
    const outPath = path.join(outPutPath, `${jobID}.${extensionOfLanguage}`);

    fs.exists(filePath, function (doesExist) {
        if (doesExist) {
          console.log('file exists');
        } else {
          console.log('file not found!');
        }
      });

    return new Promise((resolve, reject) =>{
        exec(
            // `java ${filePath} -o ${filePath} && cd ${outPutPath} && .\\${jobID}.java`,
            `java ${filePath}`,
            (error, stdout, stderr) =>{
                if(error){
                    reject({error, stderr});
                }  
                if(stderr){
                    reject(stderr);
                }
                resolve(stdout);
            }
        );
    });
};

module.exports = {
    executeJavaMethod
};