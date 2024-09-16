import {
    FastifyInstance,
    FastifyPluginOptions,
    FastifyRequest,
    FastifyReply
} from "fastify";
import { CreateNutritionController } from "./controllers/CreateNutritionController";

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {

    fastify.get("/teste", (request: FastifyRequest, reply: FastifyReply) => {

        let responseText = "```json\n{\n  \"nome\": \"Guilherme\",\n  \"sexo\": \"gfd\",\n  \"idade\": \"ed\",\n  \"altura\": \"gf\",\n  \"peso\": 1.5,\n  \"objetivo\": \"fdw\",\n  \"refeicoes\": [\n    {\n      \"horario\": \"07:00\",\n      \"nome\": \"Café da Manhã\",\n      \"alimentos\": [\n        \"1 fatia de pão integral\",\n        \"1 ovo cozido\",\n        \"1 banana\",\n        \"1 xícara de café com leite desnatado\"\n      ]\n    },\n    {\n      \"horario\": \"10:00\",\n      \"nome\": \"Lanche da Manhã\",\n        \"alimentos\": [\n        \"1 iogurte grego natural\",\n        \"1 colher de sopa de granola\"\n      ]\n    },\n    {\n      \"horario\": \"13:00\",\n      \"nome\": \"Almoço\",\n      \"alimentos\": [\n        \"100g de frango grelhado\",\n        \"1 xícara de arroz integral\",\n        \"1 xícara de brócolis cozido\",\n        \"1 colher de sopa de azeite de oliva\"\n      ]\n    },\n    {\n      \"horario\": \"16:00\",\n      \"nome\": \"Lanche da Tarde\",\n      \"alimentos\": [\n        \"1 maçã\",\n        \"1 xícara de chá verde\"\n      ]\n    },\n    {\n      \"horario\": \"20:00\",\n      \"nome\": \"Jantar\",\n      \"alimentos\": [\n        \"150g de peixe assado\",\n        \"1 xícara de batata doce cozida\",\n        \"1 xícara de salada verde com tomate e pepino\"\n      ]\n    }\n  ],\n  \"suplementos\": [\n    \"Whey protein\",\n    \"Creatina\",\n    \"Glutamina\"\n  ]\n}\n```"

        try {

            // Remover os delimitadores de código
            let jsonString = responseText.replace(/```json|```/g, '').trim();

            // Parsear o JSON
            let jsonObject = JSON.parse(jsonString);

            return reply.send({ data: jsonObject });

        } catch (error) {
            console.log(error)
        }

        reply.send({ ok: true });
    })

    fastify.post("/create", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateNutritionController().handle(request, reply);
    })

}