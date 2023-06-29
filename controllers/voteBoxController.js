const milletvekiliVoteBoxModel = require("../models/milletvekiliVoteboxModel");
const cumhurBaskanligiVoteBoxModel = require("../models/cumhurBVoteboxModel");

exports.getAllMilletvekiliVote = async (req, res, next) => {
  try {
    const milletvekiliVote = await milletvekiliVoteBoxModel.find();

    const organizedData = milletvekiliVote.reduce((acc, vote) => {
      const existingMahalle = acc.find((mahalle) => mahalle.mahalleName === vote.mahalleName);

      if (existingMahalle) {
        existingMahalle.ballot_list.push({
          ballot_no: vote.boxNumber.toString(),
          results: [
            { name: 'Millet', vote: vote.millet.toString() },
            { name: 'Hak-Par', vote: vote.hakPar.toString() },
            { name: 'TKP', vote: vote.tkp.toString() },
            { name: 'TKH', vote: vote.tkh.toString() },
            { name: 'Sol Parti', vote: vote.solParti.toString() },
            { name: 'Genç Parti', vote: vote.gencParti.toString() },
            { name: 'Memleket Partisi', vote: vote.memleket.toString() },
            { name: 'BBP', vote: vote.bbp.toString() },
            { name: 'Ak Parti', vote: vote.akParti.toString() },
            { name: 'Yeniden Refah Partisi', vote: vote.yenidenRefah.toString() },
            { name: 'MHP', vote: vote.mhp.toString() },
            { name: 'Yeşil Sol', vote: vote.yesilSol.toString() },
            { name: 'AB', vote: vote.ab.toString() },
            { name: 'ANAP', vote: vote.anap.toString() },
            { name: 'YP', vote: vote.yp.toString() },
            { name: 'HKP', vote: vote.hkp.toString() },
            { name: 'Milli Yol', vote: vote.milliYol.toString() },
            { name: 'Vatan Partisi', vote: vote.vatanPartisi.toString() },
            { name: 'GBP', vote: vote.gbp.toString() },
            { name: 'CHP', vote: vote.chp.toString() },
            { name: 'İYİ Parti', vote: vote.iyiParti.toString() },
            { name: 'AP', vote: vote.ap.toString() },
            { name: 'Zafer Partisi', vote: vote.zaferPartisi.toString() },
          ],
        });
      } else {
        acc.push({
          mahalleName: vote.mahalleName,
          ballot_list: [
            {
              ballot_no: vote.boxNumber.toString(),
              results: [
                { name: 'Millet', vote: vote.millet.toString() },
                { name: 'Hak-Par', vote: vote.hakPar.toString() },
                { name: 'TKP', vote: vote.tkp.toString() },
                { name: 'TKH', vote: vote.tkh.toString() },
                { name: 'Sol Parti', vote: vote.solParti.toString() },
                { name: 'Genç Parti', vote: vote.gencParti.toString() },
                { name: 'Memleket Partisi', vote: vote.memleket.toString() },
                { name: 'BBP', vote: vote.bbp.toString() },
                { name: 'Ak Parti', vote: vote.akParti.toString() },
                { name: 'Yeniden Refah Partisi', vote: vote.yenidenRefah.toString() },
                { name: 'MHP', vote: vote.mhp.toString() },
                { name: 'Yeşil Sol', vote: vote.yesilSol.toString() },
                { name: 'AB', vote: vote.ab.toString() },
                { name: 'ANAP', vote: vote.anap.toString() },
                { name: 'YP', vote: vote.yp.toString() },
                { name: 'HKP', vote: vote.hkp.toString() },
                { name: 'Milli Yol', vote: vote.milliYol.toString() },
                { name: 'Vatan Partisi', vote: vote.vatanPartisi.toString() },
                { name: 'GBP', vote: vote.gbp.toString() },
                { name: 'CHP', vote: vote.chp.toString() },
                { name: 'İYİ Parti', vote: vote.iyiParti.toString() },
                { name: 'AP', vote: vote.ap.toString() },
                { name: 'Zafer Partisi', vote: vote.zaferPartisi.toString() },
              ],
            },
          ],
        });
      }

      return acc;
    }, []);

    res.status(200).json({
      status: 'success',
      results: organizedData.length,
      data: organizedData,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
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

    const organizedData = cumhurBaskanligiVote.reduce((acc, vote) => {
      const existingSchool = acc.find((school) => school.schoolName === vote.mahalleName);

      if (existingSchool) {
        const existingBallot = existingSchool.ballot_list.find((ballot) => ballot.ballot_no === vote.boxNumber);

        if (existingBallot) {
          existingBallot.results.push({
            name: 'Recep Tayyip Erdogan',
            vote: vote.rte.toString(),
          }, {
            name: 'Muharram Ince',
            vote: vote.ince.toString(),
          }, {
            name: 'Kemal Kılıçdaroğlu',
            vote: vote.kemal.toString(),
          }, {
            name: 'Sinan Oğan',
            vote: vote.sinan.toString(),
          });
        } else {
          existingSchool.ballot_list.push({
            ballot_no: vote.boxNumber.toString(),
            results: [{
              name: 'Recep Tayyip Erdogan',
              vote: vote.rte.toString(),
            }, {
              name: 'Muharram Ince',
              vote: vote.ince.toString(),
            }, {
              name: 'Kemal Kılıçdaroğlu',
              vote: vote.kemal.toString(),
            }, {
              name: 'Sinan Oğan',
              vote: vote.sinan.toString(),
            }],
          });
        }
      } else {
        acc.push({
          schoolName: vote.mahalleName,
          ballot_list: [{
            ballot_no: vote.boxNumber.toString(),
            results: [{
              name: 'Recep Tayyip Erdogan',
              vote: vote.rte.toString(),
            }, {
              name: 'Muharram Ince',
              vote: vote.ince.toString(),
            }, {
              name: 'Kemal Kılıçdaroğlu',
              vote: vote.kemal.toString(),
            }, {
              name: 'Sinan Oğan',
              vote: vote.sinan.toString(),
            }],
          }],
        });
      }

      return acc;
    }, []);

    res.status(200).json({
      status: 'success',
      results: organizedData.length,
      data: organizedData,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
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
