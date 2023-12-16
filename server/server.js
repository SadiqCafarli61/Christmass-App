const express = require("express")
const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const multer = require("multer")
const jwt = require("jsonwebtoken")
const cookieparser = require("cookie-parser")
const cors = require("cors")
const bodyParser = require('body-parser')

const fs = require("fs")

const path = require("path")
const token = require("token")
const server = express()
const nodeMailer = require("nodemailer")
server.use(express.json())
server.use(bodyParser.json())
server.use(cookieparser())
const UserModel = require('./models/UserModel')
const PostModel = require("./models/PostModel")
const CommentsModel = require("./models/CommentModel")
const ReservationModel = require("./models/ReservationModel")
const RoomsModel = require("./models/RoomsModel")

server.use(cors({
    origin: ["http://localhost:5173"],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}))

server.use('/Posts', express.static("Posts"))

server.use("/Public", express.static("Public"))

mongoose.connect("mongodb://127.0.0.1:27017/newyear", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const parties = [
    {
        id: 1,
        name: "Drinks",
        content: "People will enjoy drink",
        price: "$50",
        url: "https://res.cloudinary.com/dgmkqlvme/image/upload/v1701516442/part1_bsiscn.jpg"
    },
    {
        id: 2,
        name: "Dj party",
        price: "$250",
        content: "Music and fun for everyone",
        url: "https://res.cloudinary.com/dgmkqlvme/image/upload/v1701512472/party2_mduysp.webp"
    },
    {
        id: 3,
        name: "Dance",
        price: "$120",
        content: "Dancing is will very funn in New Year Party",
        url: "https://res.cloudinary.com/dgmkqlvme/image/upload/v1701512472/party3_aha8lq.webp"
    },
    {
        id: 4,
        name: "Party Guests",
        price: "$100",
        content: "Guest are welcome to join the party",
        url: "https://res.cloudinary.com/dgmkqlvme/image/upload/v1701512472/party4_d4qs7b.jpg"
    },
    {
        id: 5,
        name: "Party Venue",
        price: "$500",
        content: "Venue of our new year party",
        url: "https://res.cloudinary.com/dgmkqlvme/image/upload/v1701512472/party5_z4nab5.webp"
    }
]


server.get('/parties', (req, res) => {
    return res.json(parties)
})
server.get('/parties/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const selectedParty = parties.find(party =>party.id === id)
    if(selectedParty){
        res.json(selectedParty)
    }
    else{
        res.status(400).send({message:'The party with the given ID was not found'})
    }
})


const transporter = nodeMailer.createTransport({
    service: "gmail",
    auth: {
        user: "sadiqcafarli2020@gmail.com",
        pass: "ubvlghdljzsfghlw"
    }
})

server.post('/send-ticket', (req, res) => {
    const {username, email, phone, ticket, christmasParty, holidayConcert} = req.body
    const mailOptions = {
        to: "sadiqcafarlidret@gmail.com",
    subject: "New Message",
    text: `username: ${username}\n email: ${email}\n phone: ${phone}\n ticket: ${ticket}\n Christmas party:${christmasParty}\n Holiday Concert${holidayConcert}`
    }
    transporter.sendMail(mailOptions, (error, info) => {
        if(error){
       
            console.log(error)
        }
        else{
            return res.json({Status: "mesaage has been sent"})
        }
    })
})

const datas = [
    {
        id: 1,
        url: "https://res.cloudinary.com/dgmkqlvme/image/upload/v1701449626/icon1_cfaiah.png",
        name: "Christmas Tree",
        price: "Free company😍",
        category: "free"
    },
    {
        id: 2,
        url : "https://res.cloudinary.com/dgmkqlvme/image/upload/v1701449638/icon2_xv5lsk.png",
        name: "Gifts for the kids",
        price: "Free company😍",
        category: "free"
    },
    {
        id: 3,
        url: "https://res.cloudinary.com/dgmkqlvme/image/upload/v1701449652/icon3_edzd6l.png",
        name: "Food and drinks",
        price: "Free Compamy😍",
        category: "free"
    },
    {
        id: 4,
        url: "https://res.cloudinary.com/dgmkqlvme/image/upload/v1701449666/icon4_tz76tb.png",
        name: "Sweets",
        price: "Free Company😍",
        category: "free"
    },
    {
        id: 5,
        url: "https://res.cloudinary.com/dgmkqlvme/image/upload/v1701451352/icon5_d1lbw8.png",
        name: "New Year socks",
        price: "$15 per pair",
        category: "paid"
    },
    {
        id: 6,
        url: "https://res.cloudinary.com/dgmkqlvme/image/upload/v1701451352/icon6_f6a38n.png",
        name: "Wine bottles",
        price: "$10 per bottle",
        category: "paid"
    },
    {
        id: 7,
        url: "https://res.cloudinary.com/dgmkqlvme/image/upload/v1701451352/icon7_ku5z0p.png",
        price: "$5 per item",
        name: "Candles",
        category: "paid"
    },
    {
        id: 8,
        url: "https://res.cloudinary.com/dgmkqlvme/image/upload/v1701451356/icon8_fzjmcl.png",
        name: "New year costumes",
        price: "$20 per item",
        category: "paid"
    }
]


server.get('/getGifts', (req, res) => {
    return res.json(datas)
})

server.get('/getGifts/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const selectedGift = datas.find(gift =>gift.id === id)
    if(selectedGift){
        res.json(selectedGift)
    }
    else{
        return res.status(400).json({Message: "Not found any gift"})
    }
})


const newYearGifts = [
    {
        id: 1,
        url: "https://res.cloudinary.com/dgmkqlvme/image/upload/v1701718779/tree1_lzagdg.jpg",
        name: "Christmas Tree 1",
        price: "$10 per item",
        category: "Christmas Tree"
    },
    {
        id: 2,
        url: "https://res.cloudinary.com/dgmkqlvme/image/upload/v1701718779/tree3_ncggch.jpg",
        name: "Christmas Tree 2",
        price: "$100 per item",
        category: "Christmas Tree"
    },
    {
        id: 3,
        url: "https://res.cloudinary.com/dgmkqlvme/image/upload/v1701718779/tree2_xamczy.jpg",
        name: "Christmas Tree 3",
        price: "$200 per item",
        category: "Christmas Tree"
    },
    {
        id: 4,
        url: "https://res.cloudinary.com/dgmkqlvme/image/upload/v1701449626/icon1_cfaiah.png",
        name: "Chritsmas Tree",
        category: "free"
    },
    {
        id: 5,
        url: "https://res.cloudinary.com/dgmkqlvme/image/upload/v1701413884/gift5_p5qsmd.jpg",
        name: "Santa Hat",
        price: "$55 per item",
        category: "Free"
    },
    {
        id: 6,
        url: "https://res.cloudinary.com/dgmkqlvme/image/upload/v1701413884/gift2_lhdwtl.webp",
        name: "Snowman toy",
        category: "free"
    },
    {
        id: 7,
        url: "https://res.cloudinary.com/dgmkqlvme/image/upload/v1701413884/gift3_yzzpgm.jpg",
        name: "Parties Candy",
        category: "free"
    },
    {
        id: 8,
        url: "https://res.cloudinary.com/dgmkqlvme/image/upload/v1701760287/hat2_fj3y1g.png",
        name: "Santa hat",
        price: "$15 per item",
        category: "Hat"
    },
    {
        id: 9,
        url: "https://res.cloudinary.com/dgmkqlvme/image/upload/v1701760287/hat1_cyzdke.webp",
        name: "Santa hat",
        price: "$25 per item",
        category: "Hat"
    },
    {
        id: 10,
        url: "https://res.cloudinary.com/dgmkqlvme/image/upload/v1701760288/hat3_zngjoy.jpg",
        name: "Santa hat",
        price: "$30 per item",
        category: "Hat"
    },
    {
        id: 11,
        url: "https://res.cloudinary.com/dgmkqlvme/image/upload/v1701760287/hat5_oaubgx.webp",
        name: "Santa hat",
        price: "$10 per item ",
        content: "Free %50  for first buying",
        category: "Hat"
    },
    {
        id: 12,
        url: "https://res.cloudinary.com/dgmkqlvme/image/upload/v1701760287/hat4_fgnnhp.jpg",
        name: "Santa hat",
        price: "$25 per item",
        category: "Hat"
    }
]

server.get("/getGiftData", (req, res) => {
 return res.json(newYearGifts)
})
server.post('/addtoCart', async (req, res) => {
    try {
        const gift = req.body
       newYearGifts.push({...gift})  
    } catch (error) {
        console.log(error)
    }

})
server.get(`/getCarts/:id`, async (req, res) => {
    try {
        const id =  parseInt(req.params.id)
        const selectedCart = await  newYearGifts.find(cart =>cart.id === id)
        if(selectedCart){
            return res.json(selectedCart)  
        }
        else{
            return res.status(401).json({Message: "Error in uploaded card"})
        }

    } catch (error) {
        console.log(error)
    }
})



const seasondata = [
    {
        id: 1,
         name: "Sydney Australia",
        url: "https://res.cloudinary.com/dgmkqlvme/image/upload/v1701804898/country1_yokamu.webp",
    },
    {
        id: 2,
        name: "Las Vegas, Venada",
        url: "https://res.cloudinary.com/dgmkqlvme/image/upload/v1701804899/country2_rcb6x7.webp",
    },
    {
        id: 3,
        name: "Miami, United States",
        url: "https://res.cloudinary.com/dgmkqlvme/image/upload/v1701804899/country3_amrxwq.webp",
    },
    {
        id: 4,
        name: "Venice, Italy",
        url: "https://res.cloudinary.com/dgmkqlvme/image/upload/v1701804899/country4_ckagob.webp",
    },
    {
        id: 5,
        name: "Dubai, UAE",
        url: "https://res.cloudinary.com/dgmkqlvme/image/upload/v1701804899/country5_ymhknp.webp",
    }
]

server.get(`/seasondata`,  (req, res) => {
   return res.json(seasondata)
})


// Authentication Starts 


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'Public')
    },
    filename: (req, file, cb) => {
       cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage: storage
})  

server.post("/register", upload.single('file'), (req, res) => {
    const {username, email, password} = req.body
    const file = req.file
    bcrypt.hash(password,10)
    .then(hash => {
        const userData = new UserModel({username: username, email: email, password: hash, file: file.filename})
        userData.save()
        .then(() => {
         res.json({message: "success"})
        })
    })
    .catch(err  =>console.log(err))


})

server.post('/login', (req, res) => {
    const {email, password} = req.body
    UserModel.findOne({email: email})
    .then(user => {
        if(user){
            bcrypt.compare(password, user.password, (err, response) => {
                if(response){
                 const token =   jwt.sign({email: user.email, username: user.username}, "secret-key",{expiresIn: "2d"})
res.cookie("token", token)
return res.json("success")                    
                } 
                else{
                    return res.status(401).json({message: "errr"})
                }
            })
        }
        else{
            return res.status(401).json({messsage: "error"})
        }
    })
    .catch(err =>console.log(err))
})

const verifyUser = (req, res, next) => {
    const token = req.cookies.token
    if(!token){
        return res.json("token is waiting")
    }
    else{
        jwt.verify(token, 'secret-key', (err, decoded) => {
            if(err){
                return res.json("Token has expired")
            }
            else{
                req.username = decoded.username
                req.email = decoded.email
                req.file = decoded.file
                next()

            }
        })
    }
}


server.get('/profile', (req, res) => {
    const token = req.cookies.token
if(token){
    jwt.verify(token, 'secret-key', (err, decoded) => {
        if(err){
            return res.json("error")
        }
        const {email} = decoded
        UserModel.findOne({email: email})
        .then(user => {
            if(user){
                res.json(user)
            }
            else{
                  return res.json("user is not defined")
            }
        })
        .catch(err =>console.log(err))
    })
}
}) 

server.put("/profile/edit", verifyUser, (req, res) => {
    const {username, email} = req.body
    const {biography}  = req.body
    const {phone}  =req.body
    const file = req.file
    const newFile = file ? file.filename : req.file
    UserModel.findOneAndUpdate(
        {email: req.email},
        {$set: {username, biography, email, phone, file: newFile, lastUpdate: new Date()}},
        {new: true}
    )
    .then(updatedUser => {
        res.json(updatedUser)
    })
    .catch(error =>console.log(error))
})

server.get('/profile/edit/photo', upload.single("file"), (req, res) => {
const file = req.file
if(!file){
    return res.json("no file selected")
}
res.json({filename: file.filename})
})

server.get("/", verifyUser, (req, res) => {
    return res.json({username: req.username, email: req.email, file: req.file})
})

server.get("/logout",  (req, res) => {
     res.clearCookie("token")
    return res.json("success")
})


// Post Section Starts

const post = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'Posts')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
    }
})

const add = multer({
    storage: post
})

server.post("/createPost", verifyUser, add.single("file"), (req, res) => {
    const {text} = req.body
    const file = req.file.filename
  
    const postedBy = req.username
    PostModel.create({
        text,
        file,
        postedBy,
       
    })
    .then(result =>res.json(result))
    .catch(err =>console.log(err))
})
 
server.get("/getPosts", (req, res) => {
    PostModel.find()
    .then(result =>res.json(result))
    .catch(err =>console.log(err))
})

const news = [
    {
        id: 1,
        url: "https://res.cloudinary.com/dgmkqlvme/image/upload/v1702126040/news1_ksbzyn.webp",
        content: "WATCH: Kyiv Christmas tree offers residents a rare moment of festivity"
    },
    {
        id: 2,
        url: "https://res.cloudinary.com/dgmkqlvme/image/upload/v1702126040/news2_npnh6z.webp",
        content: "WATCH: Lyon prepares to be dazzled by the annual Fête des Lumières"
    }
]

server.get("/news", (req, res) => {
    return res.json(news)
})

server.get("/news/:id", (req, res) => {
    const id = parseInt(req.params.id)
    const newsItem = news.find(item =>item.id === id)
    if(newsItem){
        res.json(newsItem)
    }
    else{
        return res.status(401).json({message: "error in fetching news data"})
    }
})

const trees = [
    {
        id: 1,
        name: "Christmas tree 1",
        address: "Kyiv, Lenina st., 38",
content: "Welcome to the enchanting world of Christmas trees, where the spirit of the season comes alive with twinkling lights, shimmering ornaments, and the scent of pine. Discover the rich history, meaningful traditions, and tips for creating your own festive masterpiece. Join us as we explore the magic that Christmas trees bring to homes around the world.",
        url: "https://res.cloudinary.com/dgmkqlvme/image/upload/v1702316983/tree2_mxlsfv.png"
    },
    {
        id: 2,
        name: "Christmas tree 2",
        address: "Lyon, Rue de la Paix, 15",
content: "Delve into the roots of the Christmas tree tradition. Learn about the ancient customs that inspired the use of evergreen trees during winter festivities. From pagan rituals to medieval traditions, explore how this symbol evolved into the centerpiece of modern holiday celebrations.",
        url: "https://res.cloudinary.com/dgmkqlvme/image/upload/v1702316983/tree3_ycmxea.png",
    },
    {
        id: 3,
        name: "Noel's tree",
        address: "New York, W 57th St between 8th and 9th Aves",
        content: "Get inspired with creative ideas for decorating your Christmas tree. From traditional themes to modern aesthetics, we'll guide you through choosing the right color scheme, ornaments, and lights to make your tree a true reflection of your holiday spirit. Learn about DIY decorations and handmade ornaments for a personal touch.",
        url: "https://res.cloudinary.com/dgmkqlvme/image/upload/v1702316983/tree1_lcmypn.png"
    },
    {
        id: 4,
        name:"Gingerbread house tree",
        address: "Boston, Massachusetts",
        content: "Ensure your Christmas tree stays fresh and vibrant throughout the holiday season. Learn essential care tips, such as proper watering, placement, and temperature control. Extend the life of your tree and enjoy its beauty from the moment you bring it home until the last day of the festive season.",
        url: "https://res.cloudinary.com/dgmkqlvme/image/upload/v1702316983/tree5_ustwp2.png"
    },
    {
        id: 5,
        name: 'Flower powered tree',
        address: "Florida Usa",
        content: "Explore innovative alternatives to traditional Christmas trees, perfect for those with limited space or a desire for something a bit different. Discover creative ideas like wall-mounted trees, tabletop trees, and even environmentally friendly options for a unique and memorable holiday display",
        url: "https://res.cloudinary.com/dgmkqlvme/image/upload/v1702316983/tree4_pym8nt.png"
    }
]

server.get('/getTrees', (req, res) => {
    return res.json(trees)
})


server.get("/getTrees/:id", (req, res) => {
    const id = parseInt(req.params.id)
    const filteredTrees = trees.find(tree =>tree.id === id)
    if(filteredTrees){
        res.json(filteredTrees)
    }
    else{
        return res.status(401).json({error: "error in fetching trees data"})
    }
})

server.post('/addComments', verifyUser, upload.single("file"),  (req, res) => {
 
  const  {comments} = req.body
  const postedBy = req.username
  CommentsModel.create({
    comments,
    postedBy,
    
  }) 
  .then(result =>res.json(result))
  .catch(error =>console.log(error))
})
server.get("/getComments",  (req, res) => {
 CommentsModel.find()
    .then(result =>res.json(result))
    .catch(error =>console.log(error))
    
    })  

    const catalogList = [
        {
            id: 1,
            name: "Magical Books",
            description:"A collection of magical books for all book lovers.",
            url: "https://res.cloudinary.com/dgmkqlvme/image/upload/v1702624148/spellbook_rutsw8.png"
        },
        {
            id: 2,
            name: "PS 5",
            description:"The latest gaming consoles from the world's top manufacturers.",
            url: "https://res.cloudinary.com/dgmkqlvme/image/upload/v1702624148/game-console_lfqdiu.png"
        },
        {
            id: 3,
            name: "Smart Watch",
            description:"Catch up on your tech with our wide selection of Electronics.",
            url: "https://res.cloudinary.com/dgmkqlvme/image/upload/v1702624148/smartwatch_nxoqhr.png"
        },
        {
            id: 4,
            name: "lamp",
            description:"Lamps are a must-have item for any home.",
          url: "https://res.cloudinary.com/dgmkqlvme/image/upload/v1702624148/lantern_tdwewk.png"
        },
        {
            id: 5,
            name: "Iphone 15 pro",
            description:`iPhone 15 Pro is here! With its powerful A15 Bionic chip and an OLED display that offers stunnin`,
            url: "https://res.cloudinary.com/dgmkqlvme/image/upload/v1702625039/iphone_qchlic.png"
        },
        {
            id: 6,
           name: "Mac Book",
           description:`This is MacBook Pro, one of the most powerful laptops available in the market today. It comes with an 8th`,
            url: "https://res.cloudinary.com/dgmkqlvme/image/upload/v1702625152/book_feihjr.png"
        }
    ]

    server.get("/getList", (req, res) => {
       res.json(catalogList)
    })
    server.get("/getList/:id", (req, res) => {
        const id = parseInt(req.params.id)
        const  selectedList = catalogList.find(catalog =>catalog.id === id)
        if(selectedList){
            return res.json(selectedList)
        }
        else{
            setTimeout(() => {
                return res.status(401).json({message: "error"})
            }, 1000)
        }
    })

   
    const reservations = []
    const rooms = [
        {id: 1, number: 1, price: "$100", url: "https://res.cloudinary.com/dgmkqlvme/image/upload/v1702737068/room2_bi0hrx.webp"},
        {id: 2, number: 2, price: "$50", url: "https://res.cloudinary.com/dgmkqlvme/image/upload/v1702737068/room1_whwavh.jpg"},
        {id: 3, number: 3, price: "$250", url: "https://res.cloudinary.com/dgmkqlvme/image/upload/v1702737068/room4_uhcney.webp"},
        {id: 4, number: 4, price: "$35", url: "https://res.cloudinary.com/dgmkqlvme/image/upload/v1702737068/room3_lrsfw7.jpg"},
        {id: 5, number: 51, price: "$45", url: "https://res.cloudinary.com/dgmkqlvme/image/upload/v1702737068/room5_s3ybx6.jpg"},
        {id: 6, number: 96, price: "$500", url: "https://res.cloudinary.com/dgmkqlvme/image/upload/v1702737093/room6_e0swio.jpg"}
    ]
    server.get("/rooms", (req, res) => {
        res.send(rooms)
    })

  server.get("/rooms/:roomId", (req, res) => {
    const roomId = parseInt(req.params.roomId)
    const room = rooms.find(room =>room.roomId === roomId)
    if(room){
        return res.json(room)
    }
    else{
        res.status(401).json({message: "rooms could not find"})
    }
  })
 
  server.post("/reservations", async (req, res) => {
   const {user, email, phoneNumber, room} = req.body
   ReservationModel.create({
    user,
    email, 
    phoneNumber,
    room
   })
   .then(result =>res.json(result))
   .catch(error =>console.log(error))
  })
  server.get("/getreservations/:id", async (req, res) => {
    const id = req.params.id;
    try {
      const reservation = await ReservationModel.findById(id);
      if (reservation) {
        return res.json(reservation);
      } else {
        return res.status(404).json({ message: "Reservation not found" });
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  });
   
 

const port = 3001 
server.listen(port) 