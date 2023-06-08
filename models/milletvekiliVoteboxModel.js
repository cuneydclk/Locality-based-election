const mongoose = require("mongoose");

const milletvekiliVoteSchema = new mongoose.Schema({
  "Mahalle/Köy": String,
  "Sandık No": String,

  "Kayıtlı Seçmen Sayısı": Number,
  "Oy Kullanan Seçmen Sayısı": Number,
  "Toplam Geçerli Oy": Number,
  "Toplam Geçersiz Oy": Number,

  MİLLET: Number,
  "HAK-PAR": Number,
  TKP: Number,
  TKH: Number,
  "SOL PARTİ": Number,
  GENÇPARTİ: Number,
  MEMLEKET: Number,
  BBP: Number,
  "AK PARTİ": Number,
  "YENİDEN REFAH": Number,
  MHP: Number,
  "YEŞİL SOL PARTİ": Number,
  AB: Number,
  ANAP: Number,
  YP: Number,
  HKP: Number,
  "MİLLİ YOL": Number,
  "VATAN PARTİSİ": Number,
  GBP: Number,
  CHP: Number,
  "İYİ PARTİ": Number,
  AP: Number,
  "ZAFER PARTİSİ": Number,
});

const milletvekiliVote = mongoose.model(
  "MilletvekiliVoteBoxs",
  milletvekiliVoteSchema
);

module.exports = milletvekiliVote;
