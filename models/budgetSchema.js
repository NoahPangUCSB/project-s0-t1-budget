const mongoose = require("mongoose");

// TB- This is a schema file to help define the schema of what the user budget will look like

const budgetSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Missing user email"], //required at all time, if missing then 'Missing user email' will show
    unique: true,
  },
  month: {
    type: Number,
    required: [true, "Budget month is missing"],
  },
  year: {
    type: Number,
    required: [true, "Budget year is missing"],
  },
  labels: {
    type: [],
    required: [true, "There is no budget label"],
  },
  data: {
    type: [],
    required: [true, "Missing Budget Data"],
  },
});

module.exports =
  mongoose.Model.budgetSchema || mongoose.model("Budget Schema", budgetSchema);
// console.log(module.exports)