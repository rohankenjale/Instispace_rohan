import { Field, InputType } from "type-graphql"

@InputType()
class InputUser {
    @Field()
    name: string
}
 export { InputUser }