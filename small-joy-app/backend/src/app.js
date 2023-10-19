const express = require("express");
const cors = require("cors");
require("../src/db/conn");

const Notes = require("../src/models/notes");
const User = require("../src/models/user");

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 8080;

app.post("/notes",async(req,res) => {
    try{
        const addNote = new Notes(req.body);
        console.log(addNote);
        const attachNote = await addNote.save();
        res.status(201).send(attachNote);
    }catch(e){
        res.status(400).send(e);
    }
})

app.get("/notes",async(req,res) => {
    try{
        const getNotes =await Notes.find({})
        res.send(getNotes);
    }catch(e){
        res.status(400).send(e);
    }
})

app.patch("/notes/:id",async(req,res) => {
    try{
        const _id = req.params.id;
        const updateNote = await Notes.findByIdAndUpdate(_id,req.body,{new:true});
        res.send(updateNote);
    }catch(e){
        res.status(500).send(e);
    }
});

app.delete("/notes/:id",async(req,res) => {
    try{
        const _id = req.params.id;
        const updateNote = await Notes.findByIdAndDelete(_id);
        res.send(updateNote);
    }catch(e){
        res.status(500).send(e);
    }
});

app.post("/notes/user", async (req, res) => {
	try {
		const { username, password } = req.body;

		const existingUser = await User.findOne({ username });

		if (existingUser) {
			return res.status(400).json({ message: "Username already taken" });
		}

		const user = new User({ username, password });

		await user.save();

		res.status(201).json({ message: "User registered successfully" });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Server error" });
	}
});

app.get("/notes/user", async (req, res) => {
    try {
        const users = await User.find({});
        res.send(users);
    } catch (e) {
        res.status(500).send(e);
    }
});


app.listen(port,()=>{
    console.log(`Connection is successfully established at ${port} `); 
});