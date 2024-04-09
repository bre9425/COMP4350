import Convo from '../models/convoModel.js';
import User from '../models/userModel.js';

export async function getConvos(req, res){
    try{
        const userID = req.user; 
        
        const convo = await Convo.find(
            { users: { $in: [userID] } }
        ).populate({
            path: 'users',
            select: 'username _id',
            match: { _id: { $ne: userID } }
        });

        if (!convo) {
            res.status(404).send({ message: "No conversation found for the user." });
            return;
        }

        const usernames = convo.map(conv => ({
            _id: conv._id,
            username: conv.users[0].username,
            userId: conv.users[0]._id
        }));

        res.status(200).json(usernames); 

    } catch (error) {
        if (error.kind == 'ObjectId'){
            res.status(404).send({message: "There's no Conversation ID to see here"});
        }else {
            res.status(400).send({ message: error.message });
        }
    }
}

export async function createConvo(req, res){
    try{
        const userID = req.user._id; 
        const recipient = req.body.username
    
        const user = await User.findOne({username: recipient});
        const recipientID = user._id
        
        if (!user){
            return res.status(404).send({message: `Who (${userID}) you tryna contact? ${recipient} The wind?`})
        }

        const existingConvo = await Convo.findOne({
            users: { $all: [userID, recipientID] }
        });
        if (existingConvo) {
            return res.status(400).send({ message: "Conversation already exists for these users." });
        }

        let convoInfo = {
            messages : [], 
            users: [userID, recipientID] 
        }
        const convo = new Convo(convoInfo); 
        await convo.save(); 

        res.status(201).send(); 

    } catch (error) {
        if (error.kind == 'ObjectId'){
            res.status(404).send({message: "There's no Conversation ID to see here"});
        }else {
            res.status(400).send({ message: error.message });
        }
    }
}


