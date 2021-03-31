const Portfolio = require('../models/PortfolioModel');
module.exports = {
    createPortfolio: (req, res) => {
        Portfolio.exists({name: req.body.name})
            .then(PortfolioExists => {
            if(PortfolioExists){
                return Promise.reject({ errors: { name:  { message: "A Portfolio with that name already exists."}}});
            } else {
                return Portfolio.create(req.body);
            }
            })
            .then(data => res.status(200).json({message: "success", results: data}))
            .catch(err => res.json({ message: "error", errors: err.errors }));
    },
    getAllPortfolios: (req, res) => {
        Portfolio.find()
            .then(data => res.status(200).json({message: "success", results: data}))
            .catch(err => res.json({message: "error", errors: err.errors}));
    },
    getOnePortfolio: (req, res) => {
        Portfolio.findById(req.params.id)
            .then(data => res.status(200).json({message: "success", results: data}))
            .catch(err => res.json({message: "error", errors: err.errors}))
    },
    updatePortfolio: (req, res) => {
        Portfolio.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})
            .then(data => res.json({message: "success", results: data}))
            .catch(err => res.json({message: "error", errors: err.errors}));
    },
    deletePortfolio: (req, res) => {
        Portfolio.findOneAndDelete({_id: req.params.id})
            .then(data => res.json({message: "success", results: data}))
            .catch(err => res.json({message: "error", errors: err.errors}))
    },
}