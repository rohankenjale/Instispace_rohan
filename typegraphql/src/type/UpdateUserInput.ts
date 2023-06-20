import { Field, InputType } from "type-graphql"

@InputType()
class UpdateUser {
    @Field({nullable:true})
    name: string
}
 export { UpdateUser }