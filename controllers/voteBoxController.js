const milletvekiliVoteBoxModel = require("../models/milletvekiliVoteboxModel");
const cumhurBaskanligiVoteBoxModel = require("../models/cumhurBVoteboxModel");

exports.getAllMilletvekiliVote = async (req, res, next) => {
  try {
    const milletvekiliVote = await milletvekiliVoteBoxModel.find();
    res.status(200).json({
      status: "success",
      results: milletvekiliVote.length,
      data: {
        milletvekiliVote,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.postMilletvekiliVote = async (req, res, next) => {
  try {
    const newMilletvekiliVote = await milletvekiliVoteBoxModel.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        milletvekiliVote: newMilletvekiliVote,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};



exports.postMilletvekilligiVoteArray = async (req, res, next) => {
  try {
    const dataArray = req.body; // Assuming the array of data is passed in the request body

    const createdVotes = [];

    for (const data of dataArray) {
      try {
        const newMilletvekilligiVote = await milletvekiliVoteBoxModel.create(data);
        createdVotes.push(newMilletvekilligiVote);
      } catch (err) {
        // Handle specific error for individual vote creation
        console.error(`Error creating milletvekilligi vote: ${err}`);
      }
    }

    res.status(201).json({
      status: "success",
      data: {
        milletvekilligiVotes: createdVotes,
      },
    });
  } catch (err) {
    // Handle general error for the overall process
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};




exports.getMilletvekiliVoteMahalle = async (req, res, next) => {
  try {
    const milletvekiliVote = await milletvekiliVoteBoxModel.find({ mahalleName: req.params.mahalleName });

    const transformedVotes = milletvekiliVote.map((vote) => {
      const voteCounts = [
        { "millet": vote.millet },
        { "hakPar": vote.hakPar },
        { "tkp": vote.tkp },
        { "tkh": vote.tkh },
        { "solParti": vote.solParti },
        { "gencParti": vote.gencParti },
        { "memleket": vote.memleket },
        { "bbp": vote.bbp },
        { "akParti": vote.akParti },
        { "yenidenRefah": vote.yenidenRefah },
        { "mhp": vote.mhp },
        { "yesilSol": vote.yesilSol },
        { "ab": vote.ab },
        { "anap": vote.anap },
        { "yp": vote.yp },
        { "hkp": vote.hkp },
        { "milliYol": vote.milliYol },
        { "vatanPartisi": vote.vatanPartisi },
        { "gbp": vote.gbp },
        { "chp": vote.chp },
        { "iyiParti": vote.iyiParti },
        { "ap": vote.ap },
        { "zaferPartisi": vote.zaferPartisi }
      ];

      return {
        _id: vote._id,
        mahalleName: vote.mahalleName,
        boxNumber: vote.boxNumber,
        totalVote: vote.totalVote,
        voteCounts: voteCounts,
        __v: vote.__v
      };
    });

    res.status(200).json({
      status: "success",
      results: transformedVotes.length,
      data: {
        milletvekiliVote: transformedVotes,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};


exports.getMilletvekiliVoteBoxNumber = async (req, res, next) => {
  try {
    const milletvekiliVote = await milletvekiliVoteBoxModel.findOne({ boxNumber: req.params.boxNumber });

    const voteCounts = [
      { "millet": milletvekiliVote.millet },
      { "hakPar": milletvekiliVote.hakPar },
      { "tkp": milletvekiliVote.tkp },
      { "tkh": milletvekiliVote.tkh },
      { "solParti": milletvekiliVote.solParti },
      { "gencParti": milletvekiliVote.gencParti },
      { "memleket": milletvekiliVote.memleket },
      { "bbp": milletvekiliVote.bbp },
      { "akParti": milletvekiliVote.akParti },
      { "yenidenRefah": milletvekiliVote.yenidenRefah },
      { "mhp": milletvekiliVote.mhp },
      { "yesilSol": milletvekiliVote.yesilSol },
      { "ab": milletvekiliVote.ab },
      { "anap": milletvekiliVote.anap },
      { "yp": milletvekiliVote.yp },
      { "hkp": milletvekiliVote.hkp },
      { "milliYol": milletvekiliVote.milliYol },
      { "vatanPartisi": milletvekiliVote.vatanPartisi },
      { "gbp": milletvekiliVote.gbp },
      { "chp": milletvekiliVote.chp },
      { "iyiParti": milletvekiliVote.iyiParti },
      { "ap": milletvekiliVote.ap },
      { "zaferPartisi": milletvekiliVote.zaferPartisi },
    ];

    const transformedVote = {
      _id: milletvekiliVote._id,
      mahalleName: milletvekiliVote.mahalleName,
      boxNumber: milletvekiliVote.boxNumber,
      totalVote: milletvekiliVote.totalVote,
      voteCounts: voteCounts,
      __v: milletvekiliVote.__v
    };

    res.status(200).json({
      status: "success",
      results: 1,
      data: transformedVote,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};



















//cumhur başkanlığı




exports.getAllCumhurBaskanligiVote = async (req, res, next) => {
  try {
    const cumhurBaskanligiVote = await cumhurBaskanligiVoteBoxModel.find();
    res.status(200).json({
      status: "success",
      results: cumhurBaskanligiVote.length,
      data: {
        cumhurBaskanligiVote,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};


exports.getCumhurBaskanligiVoteMahalle = async (req, res, next) => {
  try {
    const cumhurBaskanligiVote = await cumhurBaskanligiVoteBoxModel.find({ mahalleName: req.params.mahalleName });
    
    const transformedVotes = cumhurBaskanligiVote.map((vote) => {
      const voteCounts = [
        { "rte": vote.rte },
        { "ince": vote.ince },
        { "kemal": vote.kemal },
        { "sinan": vote.sinan }
      ];
      
      return {
        _id: vote._id,
        mahalleName: vote.mahalleName,
        boxNumber: vote.boxNumber,
        totalVote: vote.totalVote,
        voteCounts: voteCounts,
        __v: vote.__v
      };
    });
    
    res.status(200).json({
      status: "success",
      results: transformedVotes.length,
      data: {
        cumhurBaskanligiVote: transformedVotes,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};




exports.getCumhurBaskanligiVoteBoxNumber = async (req, res, next) => {
  try {
    const cumhurBaskanligiVote = await cumhurBaskanligiVoteBoxModel.findOne({ boxNumber: req.params.boxNumber });

    const transformedVote = {
      _id: cumhurBaskanligiVote._id,
      mahalleName: cumhurBaskanligiVote.mahalleName,
      boxNumber: cumhurBaskanligiVote.boxNumber,
      totalVote: cumhurBaskanligiVote.totalVote,
      voteCounts: [
        { "rte": cumhurBaskanligiVote.rte },
        { "ince": cumhurBaskanligiVote.ince },
        { "kemal": cumhurBaskanligiVote.kemal },
        { "sinan": cumhurBaskanligiVote.sinan }
      ],
      __v: cumhurBaskanligiVote.__v
    };

    res.status(200).json({
      status: "success",
      results: 1,
      data: transformedVote,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};



exports.postCumhurBaskanligiVote = async (req, res, next) => {
  try {
    const newCumhurBaskanligiVote = await cumhurBaskanligiVoteBoxModel.create(
      req.body
    );
    res.status(201).json({
      status: "success",
      data: {
        cumhurBaskanligiVote: newCumhurBaskanligiVote,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};



exports.postCumhurBaskanligiVoteArray = async (req, res, next) => {
  try {
    const dataArray = req.body; // Assuming the array of data is passed in the request body

    const createdVotes = [];

    for (const data of dataArray) {
      const newCumhurBaskanligiVote = await cumhurBaskanligiVoteBoxModel.create(data);
      createdVotes.push(newCumhurBaskanligiVote);
    }

    res.status(201).json({
      status: "success",
      data: {
        cumhurBaskanligiVotes: createdVotes,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
