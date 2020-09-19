const mongoose = require ("mongoose");
const Tweet = require ("./tweet.js");

const mongoURI = "mongodb+srv://mfarid:metallica@sei.mfupj.azure.mongodb.net/tweetapp?retryWrites=true&w=majority"

const db = mongoose.connection;

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

db.on("error", (err) => console.log(err.message + " is Mongod not running?"));
db.on("connected", () => console.log("mongo connected: ", mongoURI));
db.on("disconnected", () => console.log("mongo disconnected"));

db.on("open", () => {
    console.log("Connection made!");
  });
  
  setTimeout(() => {
    db.close();
  }, 5000);

  const myFirstTweet = {
      title: "Deep thoughts",
      body: "Friends, I have been navel-gazing",
      author: "Karolin"

  };

  Tweet.create(myFirstTweet, (error, tweet)=> {
        if (error) {
            console.log(error)
        } else {
            console.log(tweet);
        }
        db.close()
  })
  