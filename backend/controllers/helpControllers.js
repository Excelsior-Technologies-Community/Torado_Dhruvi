exports.helpController = async (req,res)=>{

try{

console.log("Help button clicked");

res.status(200).json({
success:true,
message:"Redirecting to contact page"
});

}catch(err){

res.status(500).json({
success:false,
message:"Server error"
});

}

};