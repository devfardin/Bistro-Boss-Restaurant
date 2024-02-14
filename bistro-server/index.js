const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')
const cors = require('cors')
require('dotenv').config()
const port = process.env.PORT || 5000
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');


//Meddleware
app.use(cors())
app.use(express.json())

const uri = `mongodb+srv://${process.env.DB_user}:${process.env.DB_password}@cluster0.sdbmurj.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();
    const menuCollection = client.db("bistroDB").collection("menu");
    const reviewCollection = client.db("bistroDB").collection("review");
    const cartColllection = client.db("bistroDB").collection("card");
    const userColllection = client.db("bistroDB").collection("users");


    // Access Token related api
    app.post('/jwt', async (req, res) => {
      const user = req.body;
      const token = jwt.sign(user, process.env.ACCESS_TOKEN, {
        expiresIn: '1h'
      });
      res.send(token)
    })

    // Meddleware
    const verifyToken = (req, res, next) => {
      // console.log('insite veryfite token', req.headers.authorization);

      if (!req.headers.authorization) {
        return res.status(401).send({ message: 'forbidden Access' })
      }
      const token = req.headers.authorization.split(' ')[2]
      jwt.verify(token, process.env.ACCESS_TOKEN, (err, decoded) => {
        if (err) {
          return res.status(401).send({ message: 'forbiddten access' })
        }
        else {
          req.decoded = decoded
          next()
        }
      })
    }

    //  User Related Api
    // verify admin token 
    const verifyAdmin= async(req, res, next)=>{
      const email= req.decoded.email;
      const query= {email: email}
      const adminUser= await userColllection.findOne(query)
      const isAdmin=adminUser?.role=='admin'
      if(!isAdmin){
        return res.status(403).send({message:'Forbiden Access'})
      }
      next()
    }


    app.get('/user/admin/:email', verifyToken, async (req, res) => {
      const email = req.params.email
      if (email !== req.decoded.email) {
        res.status(403).send({ message: 'Unauthorized access' })
      }
      const query = { email: email }
      const user = await userColllection.findOne(query)
      // console.log(req.decoded.email);
      console.log(user.role);
      var admin = false
      if (user) {
        admin = user.role === 'admin'
        res.send(admin)
      }
    })

    app.get('/users', verifyToken, verifyAdmin, async (req, res) => {
      // console.log(req.headers.authorization);
      const users = await userColllection.find().toArray()
      res.send(users)
    })


    app.post('/users', async (req, res) => {
      const user = req.body;
      const query = { email: user.email }
      const existUser = await userColllection.findOne(query)
      if (existUser) {
        return res.send({ message: 'User Is Already exist', insertedId: null })
      }
      const result = await userColllection.insertOne(user)
      res.send(result)
    })


    app.delete('/users/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) }
      const result = await userColllection.deleteOne(query)
      res.send(result)
    })
    app.patch('/user/admin/:id', async (req, res) => {
      const userId = req.params.id
      const filter = { _id: new ObjectId(userId) }
      const update = {
        $set: {
          role: 'admin'
        }
      }
      const result = await userColllection.updateOne(filter, update)
      res.send(result)

    })


    // Menu related Api
    app.get('/menu', async (req, res) => {
      const result = await menuCollection.find().toArray()
      res.send(result)
    })

    app.get('/review', async (req, res) => {
      const result = await reviewCollection.find().toArray()
      res.send(result)
    })
    // Post Card collection
    app.get('/carts', async (req, res) => {
      const email = req.query.email
      const query = { email: email }
      const result = await cartColllection.find(query).toArray()
      res.send(result)
    })

    app.delete('/cart/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) }
      const result = await cartColllection.deleteOne(query)
      res.send(result)
    })

    app.post('/cart', async (req, res) => {
      const carditems = req.body;
      const result = await cartColllection.insertOne(carditems)
      res.send(result)
    })


    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);



app.get('/', (req, res) => {
  res.send('Bistro server is runing')
})
app.listen(port, () => {
  console.log(`Bristo is running on the port ${port}`);
})
