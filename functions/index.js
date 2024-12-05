const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

const functions = require('firebase-functions')

const express = require('express')
const cors = require('cors')
const stripe = require('stripe')(
    'sk_test_51QNHe7C7ZyN2MUI2ozaWE9334qbLTciJVLcnvQdYeN9267U8eir6cYjho8PwZ7aOiIkiBxDqCRChlCA8nZZz1PV20084bVDpED'
)

const app = express()

//app.use(cors({origin:true}))
app.use(express.json())



// Configure CORS
app.use(cors({
    origin: "http://localhost:3000", // Allow requests from this origin
  }));
  
  // Alternatively, allow all origins (for development purposes only)
app.use(cors());

app.get('/', (request,response) => response.status(200).send('hello world'))

app.post('/payments/create', async (request, response) => {
    console.log("dersual")
   const  total =parseInt(request.query.total)

   const paymentIntents = await stripe.paymentIntents.create({
    amount: total,
    currency: 'usd',
   })

   response.status(201).send({
    clientSecret: paymentIntents.client_secret,
   })
});

exports.api = onRequest(app)
//functions.https.onRequest(app)


//http://127.0.0.1:5001/clone-f416e/us-central1/api