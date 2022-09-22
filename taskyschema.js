// schema for tasky_application

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

// "tasks": [
//     {
//       "task_id": "a5uAojyBREOtmb",
//       "task_name": "task1",
//       "deadline": "2022-09-14T10:46:34.000Z",
//       "isComplete": false
//     }
//   ]