const Algo = require('../models/AlgoModel');
module.exports = {
    createAlgo: (req, res) => {
        Algo.exists({title: req.body.title})
            .then(AlgoExists => {
            if(AlgoExists){
                return Promise.reject({ errors: { name:  { message: "A Algo with that name already exists."}}});
            } else {
                return Algo.create(req.body);
            }
            })
            .then(data => res.status(200).json({message: "success", results: data}))
            .catch(err => res.json({ message: "error", errors: err.errors }));
    },
    getAllAlgos: (req, res) => {
        Algo.find()
            .then(data => res.status(200).json({message: "success", results: data}))
            .catch(err => res.json({message: "error", errors: err.errors}));
    },
    getOneAlgo: (req, res) => {
        Algo.findById(req.params.id)
            .then(data => res.status(200).json({message: "success", results: data}))
            .catch(err => res.json({message: "error", errors: err.errors}))
    },
    updateAlgo: (req, res) => {
        Algo.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})
            .then(data => res.json({message: "success", results: data}))
            .catch(err => res.json({message: "error", errors: err.errors}));
    },
    deleteAlgo: (req, res) => {
        Algo.findOneAndDelete({_id: req.params.id})
            .then(data => res.json({message: "success", results: data}))
            .catch(err => res.json({message: "error", errors: err.errors}))
    },
}