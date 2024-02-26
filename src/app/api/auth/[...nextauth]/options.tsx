import { AuthOptions } from "next-auth";
import  CredentialsProvider  from "next-auth/providers/credentials";
export const authOptions:AuthOptions = {
    providers:[
        CredentialsProvider({
            name:"Next Auth",
            credentials:{
                email:{
                    label:"Email",
                    type:"email",
                    placeholder:"Enter your email"
                },
                password:{
                    label:"Password", type:"password"
                }
            },

            async authorize(credentials, req){
             
                const user = {
                    id: "1",
                    name: "chetan",
                    email: credentials?.email
                };

                if(user){
                    return user;
                }
                else{
                    return null;
                }

            }
        })
    ]
}