const Item = require('../models/model');
module.exports = {
    createItem: (req, res) => {
        Item.exists({name: req.body.name})
            .then(ItemExists => {
            if(ItemExists){
                return Promise.reject({ errors: { name:  { message: "A Item with that name already exists."}}});
            } else {
                return Item.create(req.body);
            }
            })
            .then(data => res.status(200).json({message: "success", results: data}))
            .catch(err => res.json({ message: "error", errors: err.errors }));
    },
    getAllItems: (req, res) => {
        Item.find()
            .then(data => res.status(200).json({message: "success", results: data}))
            .catch(err => res.json({message: "error", errors: err.errors}));
    },
    getOneItem: (req, res) => {
        Item.findById(req.params.id)
            .then(data => res.status(200).json({message: "success", results: data}))
            .catch(err => res.json({message: "error", errors: err.errors}))
    },
    updateItem: (req, res) => {
        Item.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})
            .then(data => res.json({message: "success", results: data}))
            .catch(err => res.json({message: "error", errors: err.errors}));
    },
    deleteItem: (req, res) => {
        Item.findOneAndDelete({_id: req.params.id})
            .then(data => res.json({message: "success", results: data}))
            .catch(err => res.json({message: "error", errors: err.errors}))
    },
}