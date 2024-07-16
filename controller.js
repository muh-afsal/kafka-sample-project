import kafkaConfig from "./config.js";



const  sendmessagetoKafka=async(req,res)=>{
       try {
          const {message}=req.body;
          const KafkaConfig=new kafkaConfig()
          const messages=[{key:'key1',value:message}]

          await KafkaConfig.produce('my-topic', messages);

          res.status(200).json({status:"ok!",message:'--message successfully send!--'})
       } catch (error) {
        console.log(error);
       }

       
} 

const controller = {sendmessagetoKafka}

export default controller