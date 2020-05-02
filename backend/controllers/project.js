'use strict'
var Project = require('../models/project');
var fs = require('fs');
var path = require('path');
var controller = {
    home: function(req, res){
          return res.status(200).send({
            message: 'Soy la home'
          });
    },
    test: function(req, res){
          return res.status(200).send({
            message: "Soy el metodo test desde el controlador"
          });
    },
    saveProject: function(req, res){
          var project = new Project();
          var params = req.body;
          project.name = params.name;
          project.description = params.description;
          project.category = params.category;
          project.year = params.year;
          project.langs = params.langs;
          project.image = null;
          project.save((err, projectStored) => {
              if (err) return res.status(500).send({message: 'Error Al Guardar'});
              if (!projectStored) return res.status(404).send({message: 'no se Ha Podido Guardad La Informacion'});
              return res.status(200).send({project: projectStored});
          });
    },
    getProject: function(req, res) {
      var projectId = req.params.id;
      if (projectId == null) return res.status(404).send({message: 'el proyecto no existe'});
      Project.findById(projectId, (err, project) => {
        if (err) return res.status(500).send({message: 'Error al devolver los datos'});
        if (!project) return res.status(404).send({message: 'El Proyecto No Existe'});
        return res.status(200).send({project});
      });
    },
    getProjects: function (req, res){
      Project.find({}).sort('-year').exec((err, projects) => {
        if(err) return res.status(500).send({message: 'Error al devolver los datos.'});
        if(!projects) return res.status(404).send({message: 'No Hay Projectos que mostrar'});
        return res.status(200).send({projects});
      });
    },
    updateProject: function( req, res){
        var projectId = req.params.id;
        var update = req.body;
        Project.findByIdAndUpdate(projectId, update, {new:true}, (err, projectUpdated) => {
          if(err) return res.status(500).send({message: 'Error Al Actualizar'});
          if(!projectUpdated) return res.satus(404).send({message: 'No Existe el Projecto Para Actualizar'});
          return res.status(200).send({project: projectUpdated})
        });
    },
    deleteProject: function(req, res){
      var projectId = req.params.id;
      Project.findOneAndDelete(projectId, (err, projectRemoved) => {
        if(err) return res.status(500).send({message: 'No Se A Podido Borrar el Projecto'});
        if(!projectRemoved) return res.status(404).send({message: 'No se Puede Eliminar ese Project'});
        return res.status(200).send({projec: projectRemoved});
      });
    },
    uploadImage: function(req, res){
      var projectId = req.params.id;
      var fileName = 'Image No Subida...';
      if(req.files){
        var filePath = req.files.image.path;
        var fileSplit = filePath.split('/');
        var fileName = fileSplit[1];
        var extSplit = fileName.split('\.');
        var fileExt = extSplit[1];
        if (fileExt == 'png' || fileExt == 'jpg' || fileExt == 'jpeg' || fileExt == 'gif') {
          Project.findOneAndUpdate(projectId, {image: fileName}, {new: true}, (err, projectUpdated) => {
            if (err) return res.status(500).send({message: 'La Imagen No Se Guardo'});
            if (!projectUpdated) return res.status(404).send({message: 'Imagen No Existe'});
            return res.status(200).send({
              project: projectUpdated
            });
          });
        }else {
          fs.unlink(filePath, (err) => {
            return res.status(200).send({message: 'La Extencion no es Valida'});
          });
        }
      }else {
        return res.status(200).send({
          message: fileName
        });
      }
    },
    getImageFile: function(req, res){
      var file = req.params.image;
      var path_file = './uploads/'+file;
      fs.exists(path_file, (exists) => {
        if (exists){
          return res.sendFile(path.resolve(path_file));
        }else{
          return res.status(200).send({
            message: "no Existe La Imagen..."
          });
        }
      });
    }
};
module.exports = controller;
