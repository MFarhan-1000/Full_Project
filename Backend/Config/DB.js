const mongoose = require("mongoose")

const mongoose_url = process.env.mongoose_url;

function main(){
    return mongoose.connect(mongoose_url);
}

main().then(()=>{
    console.log("Db connected successfully")
}).catch((err)=>{
    console.log(err);
})

module.exports = main;