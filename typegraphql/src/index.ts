import "reflect-metadata"
import { ApolloServer } from "apollo-server"
import { buildSchema } from "type-graphql";
import { createConnection } from "typeorm";
import { User } from "./entities/user";
import { Hello } from "./resolvers/resolver";
const main =async () => {
    const schema = await buildSchema({
        resolvers : [Hello],
    });
    const server = new ApolloServer({
        schema
    })
    server.listen(5432, () => {
        console.log("server started")
    })
}
createConnection({
    type : 'postgres',
    url : "postgresql://postgres:rohan123@localhost:5432/db",
    entities : [User],
    logging : true,

}).then(()=>{
    console.log("data connected:")
    main()
})