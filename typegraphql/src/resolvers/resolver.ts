import { User } from "../entities/user";
import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { InputUser } from "../type/createUserInput";
import { UpdateUser } from "../type/UpdateUserInput";
@Resolver(()=>String)
export class Hello {
    @Query(()=>String)
    async helloworld(){
        return "hello"
    }
    @Mutation(()=>User)
    async createuser(
        
        @Arg("inputuser") inputuser : InputUser
    ){
        let newUser = new User()
        newUser.name = inputuser.name;
        let savedUser= await newUser.save()
        return savedUser
    }
    @Mutation(()=>User)
    async updateuser(
        @Arg("id") id : String,
        @Arg("updateuser") updateuser : UpdateUser
    ){
        let newUser = await User.findOne({where:{id:id}});
        if (!newUser) {
          throw new Error("User not found");
        }
        newUser.name = updateuser.name;
        let updatedUser= await newUser.save()
        return updatedUser
    }
    @Mutation(()=>Boolean)
    async deleteUser(@Arg("id") id: string) {
    const user = await User.findOne({where:{id:id}});
    if (!user) {
      throw new Error("User not found");
    }

    await user.remove();
    return true;
  }
}