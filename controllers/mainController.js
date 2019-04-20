const Tournament = require('../models/tournament');
const Player = require('../models/player');
const Round = require('../models/round');


exports.getMain = (req, res, next) => {
  res.render('main', {
    pageTitle: 'Home',
  });
};

exports.getCreate = (req, res, next) => {
  res.render('create', {
    pageTitle: 'Turnier erstellen',
  });
};

exports.getTournaments = (req, res, next) => {

  Tournament.findAll().then(tournaments => {
    res.render('tournaments', {
      pageTitle: 'Turniere',
      tournaments: tournaments,
    });
  });

};


exports.postCreate = (req, res, next) => {

  roundCount = req.body.roundcount;
  tournamentName = req.body.tournamentname;

  Tournament.create({roundCount: roundCount, tournamentName: tournamentName}).then(tournament => {

    const playerList = [];

    for (i = 1; i < 5; i++) {
      playerList.push({name: req.body['player' + i], tournamentId: tournament.id});
    }

    Player.bulkCreate(playerList).then( players => {

      const roundList = [];
      for (i = 0; i < tournament.roundCount; i++) {
        roundList.push({roundNumber: i});
      }

      Round.bulkCreate(roundList).then( rounds => {

        res.redirect('/tournaments');

      });
    });
  });
};