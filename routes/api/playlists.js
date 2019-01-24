const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

// profile model
const Profile = require("../../models/Profile");

// playlist model
const Playlist = require("../../models/Playlist");

// validation
const validatePlaylistInput = require("../../validation/playlist")

// @route Get api/playlits/test
// @description Tests playlist route
// @acess Public

router.get("/test",(req,res)=>res.json({msg:"Playlists Works"}));

// @route GET api/playlists
// @description get post
// @acess Public
router.get("/",(req,res)=>{
    Playlist.find()
    .sort({date: -1})
    .then(playlists=>res.json(playlists))
    .catch(err => res.status(404).json({noplaylistsfound: "No playlists found with that ID"}));
});

// @route GET api/playlists/:id
// @description get post by id
// @acess Public
router.get("/:id",(req,res)=>{
    Playlist.findById(req.params.id)
    .then(playlist =>res.json(playlist))
    .catch(err => res.status(404).json({noplaylistfound: "No playlist found with that ID"}));
});

// @route POST api/playlists
// @description create playlist
// @acess Private

router.post("/",passport.authenticate("jwt",{session:false}),(req,res)=>{
    const {errors, isValid} = validatePlaylistInput(req.body);

    // check validation
    if(!isValid){
        // any errors send 400 error
        return res.status(400).json(errors);
    }
const newPlaylist = new Playlist({
    text:req.body.text,
    name:req.body.name,
    user:req.user.id
});

newPlaylist.save().then(playlist => res.json(playlist))
})

// @route DELETE api/playlists/:id
// @description delete playlist
// @acess Private

router.delete("/:id",passport.authenticate("jwt", {session:false}),(req,res)=>{
Profile.findOne({user:req.user.id})
.then(profile=>{
    Playlist.findById(req.params.id)
    .then(playlist=> {
        // check for playlist owner
        if(playlist.user.toString() !== req.user.id){
            return res.status(401).json({notauthorized: "User not authorized"})
        }

        // Delete
        playlist.remove().then(()=>res.json({sucsess:true}))
    })
    .catch(err=> res.status(404).json({playlistnotfound: "No playlist found"}))
})
});


// @route POST api/playlists/like/:id
// @description like playlist
// @acess Private

router.post(
    "/like/:id",
    passport.authenticate("jwt", {session:false}),
    (req,res)=>{
    Profile.findOne({user:req.user.id})
    .then(profile=>{
        Playlist.findById(req.params.id)
        .then(playlist=> {
            if(playlist.likes.filter(like => like.user.toString() === req.user.id).length > 0){
                return res.status(400).json({alreadyliked: "User already liked this post"})
            }
            // add user id to user array
            playlist.likes.unshift({user:req.user.id});
            playlist.save().then(playlist => res.json(playlist));
        })
        .catch(err=> res.status(404).json({playlistnotfound: "No playlist found"}))
    })
    });

 // @route POST api/playlists/unklike/:id
// @description unlike playlist
// @acess Private

router.post(
    "/unlike/:id",
    passport.authenticate("jwt", {session:false}),
    (req,res)=>{
    Profile.findOne({user:req.user.id})
    .then(profile=>{
        Playlist.findById(req.params.id)
        .then(playlist=> {
            if(playlist.likes.filter(like => like.user.toString() === req.user.id).length === 0){
                return res.status(400).json({notliked: "You have not yet liked this post"})
            }
            // get remove index
            const removeIndex = playlist.likes
            .map(item => item.user.toString())
            .indexOf(req.user.id);

            // splice out of the array
            playlist.likes.splice(removeIndex, 1)

            // save 
            playlist.save().then(playlist =>res.json(playlist));
        })
        .catch(err=> res.status(404).json({playlistnotfound: "No playlist found"}))
    })
    });

 // @route POST api/playlists/comment/:id
// @description add comment to playlist
// @acess Private

router.post("/comment/:id", passport.authenticate("jwt",{session:false}),(req,res)=>{
    const {errors, isValid} = validatePlaylistInput(req.body);

    // check validation
    if(!isValid){
        // any errors send 400 error
        return res.status(400).json(errors);
    }
    Playlist.findById(req.params.id)
    .then(playlist => {
        const newComment ={
            text:req.body.text,
            name: req.body.name,
            user: req.user.id
        }
        // add to comments array
        playlist.comments.unshift(newComment);

        //  save
        playlist.save().then(playlist=>res.json(playlist))
    })
    .catch(err => res.status(404).json({playlistnotfound:"No playlist found"}))
})

// @route DELETE api/playlists/comment/:id/:comment
// @description remove comments from playlist
// @acess Private

router.delete("/comment/:id/:comment_id", passport.authenticate("jwt",{session:false}),(req,res)=>{

    Playlist.findById(req.params.id)
    .then(playlist => {
        // check to see if comment exists
        if(playlist.comments.filter(comment => comment._id.toString()=== req.params.comment_id).length ===
        0){
            return res.status(404).json({commentnotexists:"comment does not exists"})
        }

        // get remove index
        const removeIndex = playlist.comments
        .map(item => item._id.toString())
        .indexOf(req.params.comment_id);

        // splice it out of the array
        playlist.comments.splice(removeIndex,1);
        //save 
        playlist.save().then(playlist=>res.json(playlist));
    })
    .catch(err => res.status(404).json({playlistnotfound:"No playlist found"}))
})



module.exports = router;