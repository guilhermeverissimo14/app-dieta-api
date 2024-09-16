import Fastify from "fastify";
import cors from "@fastify/cors";
import dotenv from "dotenv";
import { routes } from "./router";

const app = Fastify({ logger: true });
dotenv.config();

app.setErrorHandler((error, request, reply) => {
    reply.code(400).send({ error: error.message });
})

const start = async () => {

    app.register(cors);
    app.register(routes);

    try {

        await app.listen({ port: 3333, host: "0.0.0.0" })
        console.log("Server is running on port http://localhost:3333");
    } catch (error) {
        console.log(error);
    }

}

start();