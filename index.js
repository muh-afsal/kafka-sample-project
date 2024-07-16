import bodyParser from "body-parser";
import express from "express";
import controller from "./controller.js";  
import kafkaConfig from "./config.js";     


const app = express();
const jsonParser = bodyParser.json();

app.post('/api/send', jsonParser, controller.sendmessagetoKafka);

const KafkaConfig = new kafkaConfig();
KafkaConfig.consume('my-topic', (value) => {
    console.log(value,'-----');
});

app.listen(8080, () => {
    console.log('server is running on port 8080');
});
