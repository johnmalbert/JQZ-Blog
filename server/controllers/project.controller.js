const Project = require('../models/ProjectModel');
module.exports = {
    createProject: (req, res) => {
        console.log(req.body)
        Project.exists({title: req.body.title})
            .then(ProjectExists => {
            if(ProjectExists){
                return Promise.reject({ errors: { title:  { message: "A Project with that Title already exists."}}});
            } else {
                return Project.create(req.body);
            }
            })
            .then(data => res.status(200).json({message: "success", results: data}))
            .catch(err => res.json({ message: "error", errors: err.errors }));
    },
    getAllProjects: (req, res) => {
        Project.find()
            .then(data => res.json({message: "success", results: data}))
            .catch(err => res.json({message: "error", errors: err.errors}));
    },
    getOneProject: (req, res) => {
        Project.findById(req.params.id)
            .then(data => res.status(200).json({message: "success", results: data}))
            .catch(err => res.json({message: "error", errors: err.errors}))
    },
    updateProject: (req, res) => {
        Project.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})
            .then(data => res.json({message: "success", results: data}))
            .catch(err => res.json({message: "error", errors: err.errors}));
    },
    deleteProject: (req, res) => {
        Project.findOneAndDelete({_id: req.params.id})
            .then(data => res.json({message: "success", results: data}))
            .catch(err => res.json({message: "error", errors: err.errors}))
    },
}