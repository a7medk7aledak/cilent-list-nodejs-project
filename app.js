//express
const express = require("express");
const app = express();

//mongoose
const mongoose = require("mongoose");
const Customer = require("./models/customerSchema");

//port
const port = 3000;

//views folder + static files like css,js
app.set("view engine",'ejs');
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// moment library
var moment = require("moment");
//to Delete and update
var methodOverride = require("method-override");
app.use(methodOverride("_method"));

//mongoose
mongoose
  .connect(
    "mongodb+srv://ahmedkhaledNodejs:AK$01005701983$AK@cilentlistnodejsproject.g4kity7.mongodb.net/all-data?retryWrites=true&w=majority&appName=cilentListNodejsProject"
  )
  .then(() => {
    app.listen(port, () => {
      console.log(`http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
//make static file run outomaticly
const path = require("path");
const livereload = require("livereload");
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, "public"));

const connectLivereload = require("connect-livereload");
app.use(connectLivereload());

liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});

//get Request
      //home
app.get("/", (req, res) => {
    Customer.find()
        .then((result) => {
            res.render("index",{arr: result,moment});//to file index.ejs
        })
        .catch((err) => {
            console.log(err);
        });
  
});


      //add user
app.get("/user/add.html", (req, res) => {
  res.render("user/add.ejs")
});

      //user edit
app.get("/edit/:id", (req, res) => {
        Customer.findById(req.params.id)
          .then((result) => {
            res.render("user/edit",{Customer:result});
          })
          .catch((err) => {
            console.log(err);
          });
});

      //view user
app.get("/user/:id", (req, res) => {
      Customer.findById(req.params.id)
        .then((result) => {
          res.render("user/view", { Customer: result, moment });
        })
        .catch((err) => {
          console.log(err);
        });
});


//Post Request to add data
app.post("/user/add.html", (req, res) => {
    Customer.create(req.body)
      .then((result) => {
        res.redirect("/");
      })
      .catch((err) => {
        console.log(err);
      });
});

//Post Request to search
app.post("/search", (req, res) => {
   const searchText = req.body.searchText.trim();

    Customer.find({ FirstName: req.body.searchText })
      .then((result) => {
        res.render("user/search", { arr: result });
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });

});

// app.post("/", (req, res) => {
//   Customer.find({ FirstName: req.body.searchTextHome })
//     .then((result) => {
//       res.render("user/search", { arr: result });
//       console.log(req.body.searchText);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });


// Put Request
app.put("/edit/:id", (req, res) => {
  Customer.updateOne({ _id: req.params.id }, req.body)
    .then((result) => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
});

// Delete Request in Home
app.delete("/delete/:id", (req, res) => {
  Customer.deleteOne({ _id: req.params.id })
    .then((result) => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
});

// Delete Request in edit
app.delete("/delete/:id", (req, res) => {
  Customer.deleteOne({ _id: req.params.id })
    .then((result) => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
});