const postService = require('../services/post.services');

exports.create = async(req, res) => {
    const data = req.body;
    console.log(data);
    console.log("Insert post ", data.title);

    try {
        const result = await postService.create(data);
        res.status(200).json({ status: true, data: result });
        console.log("Success saving post");
    } catch (err) {
        res.status(400).json({ status: false, data: err});
        console.log("Problem saving post");
    }
}

exports.findAll = async(req, res) => {

    console.log("Find All Posts");

    try {
        const result = await postService.findAll();
        res.status(200).json({ status: true, data: result });
        console.log("Success finding all posts");
    } catch (err) {
        res.status(400).json({ status: false, data: err});
        console.log("Problem finding all posts");
    }
}

exports.findOne = async(req, res) => {
    const id = req.params.id;
    console.log("Find post with id: ", id);

    try {
        const result = await postService.findOne(id);
        res.status(200).json({ status: true, data: result });
        console.log("Success finding post ", id);
    } catch (err) {
        res.status(400).json({ status: false, data: err});
        console.log("Problem finding post ", id);
    }
}

exports.updatePost = async(req, res) => {
    const id = req.params.id;
    console.log("Update post with id: ", id);

    try {
        const result = await postService.updatePost(req.body);
        res.status(200).json({status: true, data: result});
        console.log("Success updating post");
    } catch(err){
        res.status(400).json({status: false, data: err})
        console.log("Problem updating post ", err);
    }
}

exports.updateCategory = async(req, res) => {
    const id = req.params.id;
    console.log("Update post category");

    try {
        const result = await postService.updateCategory(req.body);
        res.status(200).json({status: true, data: result});
        console.log("Success updating post category");
    } catch(err){
        res.status(400).json({status: false, data: err})
        console.log("Problem updating post category ", err);
    }
}

exports.deletePost = async(req, res) => {
    const id = req.params.id;
    console.log("Delete post");

    try {
        const result = await postService.deletePost(id);
        res.status(200).json({status: true, data: result});
        console.log("Success Deleting post");
    } catch(err){
        res.status(400).json({status: false, data: err})
        console.log("Problem Deleting post ", err);
    }
}

exports.deletePostCategories = async(req, res) => {
    const id = req.params.id;
    console.log("Remove categories");

    try {
        const result = await postService.deleteCategories(req.body);
        res.status(200).json({status: true, data: result});
        console.log("Success Removing Categories");
    } catch(err){
        res.status(400).json({status: false, data: err})
        console.log("Problem Removing Categoris", err);
    }
}
