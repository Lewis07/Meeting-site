let dbConn = require('../database/db.config');

// Constructeur (don't do in arrow function)
let Avion = function(avion){
    this.numAvion = avion.numAvion;
    this.design = avion.design;
    this.itineraire = avion.itineraire;
}

// Récupérer liste des avions
Avion.getAllAvions = (result) => {
    dbConn.query('SELECT * FROM avion',(err,res) => {
        if(err){
            console.log('Impossible de récupérer tous les listes des avions',err);
            result(null,err);
        }
        console.log('Liste des avions');
        result(null,res);
    })
}

// Récupérer un avion
Avion.getOneAvion = (id,result) => {
    dbConn.query('SELECT * FROM avion WHERE id = ?',id,(err,res) => {
        if(err){
            console.log("Erreur lors de la récupération de l'id",err);
            result(null,err);
        }
        else{
            result(null,res);
        }
    })
} 

// Enregistrement d'un avion
Avion.postAvion = (avionData,result) => {
    // console.log(avionData);
    // console.log('INSERT INTO avion SET ?',avionData);

    dbConn.query('INSERT INTO avion SET ?',avionData,(err,res) => {
        if(err){
            console.log("Echec de l'enregistrement");
            result(null,{status:false,message:err});
        }
        else if(!err){
            console.log("avion enregistré avec succès");
            result(null,{status:true,message:"avion enregistré avec succèssss",insertId:res.id});
        }
    })
}

module.exports = Avion;