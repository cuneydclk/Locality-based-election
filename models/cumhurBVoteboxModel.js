const mongoose = require('mongoose');

const cumhurBVoteSchema = new mongoose.Schema({
  "Sıra No": {
    type: Number
  },
  "İl Adı": {
    type: String
  },
  "İlçe Adı": {
    type: String
  },
  "Mahalle/Köy": {
    type: String
  },
  "Sandık No": {
    type: String
  },
  "Kayıtlı Seçmen Sayısı": {
    type: Number
  },
  "Oy Kullanan Seçmen Sayısı": {
    type: Number
  },
  "İtirazsız Geçerli Oy Sayısı": {
    type: Number
  },
  "İtirazlı Geçerli Oy Sayısı": {
    type: Number
  },
  "Toplam Geçerli Oy": {
    type: Number
  },
  "Toplam Geçersiz Oy": {
    type: Number
  },
  "RECEP TAYYİP ERDOĞAN": {
    type: Number
  },
  "MUHARREM İNCE": {
    type: Number
  },
  "KEMAL KILIÇDAROĞLU": {
    type: Number
  },
  "SİNAN OĞAN": {
    type: Number
  }
});

const cumhurBaskanligiVote = mongoose.model('CumhurBVoteBox', cumhurBVoteSchema);

module.exports = cumhurBaskanligiVote;
