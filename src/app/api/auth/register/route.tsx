import { connect } from '@/database/mongo.config';
import { NextRequest, NextResponse } from 'next/server';
import { registerSchema } from '@/validator/authSchema';
import vine, {errors} from "@vinejs/vine"
import ErrorReporter from '@/validator/errorReporter';
import bcrypt from 'bcryptjs'
import { User } from '@/model/User';
// Used for db connection
connect();

export async function POST(request: NextRequest) {
  try {
    // Access the JSON body from the request
    const body = await request.json();

    console.log('Received data:', body); //for development mode
    
    const validator = vine.compile(registerSchema);

    validator.errorReporter = ( ) => new ErrorReporter(); 
    
    const output = await validator.validate(body);
    
    //check email is already exist or not 

    const user = await User.findOne({email : output.email});
    if(user){
      return NextResponse.json({
        status: 400,
        errors:{
          email : " Email already exist on our database"
        }
      },{status:200})
    }else{

      const salt = bcrypt.genSaltSync(10);
      output.password = bcrypt.hashSync(output.password, salt);
      await User.create(output);
  
      // Return the received data in the response
      return NextResponse.json({status:200, message: "User created succesfully"} , { status: 200 });

    }

    //salting

  } catch (error) {
   if(error instanceof errors.E_VALIDATION_ERROR){
    return NextResponse.json(
      {status:400, errors : error.messages},
      {status: 200});
   }
  }
}


