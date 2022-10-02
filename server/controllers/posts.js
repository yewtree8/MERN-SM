import PostMessage from '../models/postMessage.js';

export const getPosts = async (req, res) => {
    try {
        const postMessages = await PostMessage.find();
        console.log(postMessages);
    } catch (error) {
        
    }
}

export const createPost = async (req, res) => {
    res.send("Post creation");
}





