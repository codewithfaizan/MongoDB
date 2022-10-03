// schema for tasky_application
// import 
const taskySchema = new Schema({
     user:{
            firstname: {
                type: String,
                required: true,
                maxlength: 25,
                minlength: 2,
            },
            lastname: {
                type: String,
                required: true,
                maxlength: 25,
                minlength: 2,
            },
            email: {
                type: String,
                required: true,
                unique:true,
            },
            password:{
                type: String,
                required: true,
                unique:true,
            },
            address:{
                type: String,
                required: true,
                maxlength: 25,
                minlength: 2,
            },
        },
  

        
        task:[{
            task_id:{
                type:String,
                unique:true,
            },
            task_name:{
                type: String,
            },
            deadline:{
                type: String,
            },
            isComplete:{
                type: Boolean,
            }

        }]
});
