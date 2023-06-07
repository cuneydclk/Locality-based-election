const mongoose = require('mongoose');

const voteBoxSchema = new mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  "Sıra No": Number,
  "İl Adı": String,
  "İlçe Adı": String,
  "Mahalle/Köy": String,
  "Sandık No": String,
  "Kayıtlı Seçmen Sayısı": Number,
  "Oy Kullanan Seçmen Sayısı": Number,
  "İtirazsız Geçerli Oy Sayısı": Number,
  "İtirazlı Geçerli Oy Sayısı": Number,
  "Toplam Geçerli Oy": Number,
  "Toplam Geçersiz Oy": Number,
  "MİLLET": Number,
  "HAK-PAR": Number,
  "TKP": Number,
  "TKH": Number,
  "SOL PARTİ": Number,
  "GENÇPARTİ": Number,
  "MEMLEKET": Number,
  "BBP": Number,
  "AK PARTİ": Number,
  "YENİDEN REFAH": Number,
  "MHP": Number,
  "YEŞİL SOL PARTİ": Number,
  "AB": Number,
  "ANAP": Number,
  "YP": Number,
  "HKP": Number,
  "MİLLİ YOL": Number,
  "VATAN PARTİSİ": Number,
  "GBP": Number,
  "CHP": Number,
  "İYİ PARTİ": Number,
  "AP": Number,
  "ZAFER PARTİSİ": Number,
  "SOSYALİST GÜÇ BİRLİĞİ İTTİFAKI": Number,
  "CUMHUR İTTİFAKI": Number,
  "EMEK VE ÖZGÜRLÜK İTTİFAKI": Number,
  "MİLLET İTTİFAKI": Number,
  "ATA İTTİFAKI": Number
});

const VoteBox = mongoose.model('VoteBox', voteBoxSchema);

module.exports = VoteBox;
