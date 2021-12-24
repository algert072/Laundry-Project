const Preference = require('../models/Preferences');
const preference = {
  detergent:"Tide",
  fabricSoftener:"Gain",
  bleachForWhites:"Don't Use Bleach",
  waterTempDark:'Cold',
  waterTempLight:'Cold',
  waterTempWhite:'Cold',
  drying:'Medium',
  dryerSheets:'Bounce',
  foldingPants:'Fold',
  foldingDressShirts:'Hang',
  foldingJeans:'Fold',
  foldingGolfShirts:'Fold',
  laundryInstructions:'',
  dryCleaningInstructions:'',
  foldingInstructions:''
}
exports.getPreference = async (req, res) => {
  try {
    let preferences = await Preference.findOne({user_id: req.user.id});
    if(!preferences){
      let newPreference = new Preference({
        ...preference,
        user_id: req.user.id,
      })
      await newPreference.save();
      preferences = newPreference
    }
    res.json({
      preferences
    })
  } catch (error) {
    res.json({
      msg: 'not found',
    })
  }
}

exports.updatePreference = async (req, res) => {
  try {
    let preferences = await Preference.findOne({user_id: req.user.id});
    if(!preferences){
      let newPreference = new Preference({
        ...preference,
        user_id: req.user.id,
      })
      await newPreference.save();
      preferences = newPreference
    }
    else {
      preferences.detergent = req.body.detergent || preferences.detergent
      preferences.fabricSoftener = req.body.fabricSoftener || preferences.fabricSoftener
      preferences.bleachForWhites = req.body.bleachForWhites || preferences.bleachForWhites
      preferences.waterTempDark = req.body.waterTempDark || preferences.waterTempDark
      preferences.waterTempLight = req.body.waterTempLight || preferences.waterTempLight
      preferences.waterTempWhite = req.body.waterTempWhite || preferences.waterTempWhite
      preferences.drying = req.body.drying || preferences.drying
      preferences.dryerSheets = req.body.dryerSheets || preferences.dryerSheets
      preferences.foldingPants = req.body.foldingPants || preferences.foldingPants
      preferences.foldingDressShirts = req.body.foldingDressShirts || preferences.foldingDressShirts
      preferences.foldingJeans = req.body.foldingJeans || preferences.foldingJeans
      preferences.foldingGolfShirts = req.body.foldingGolfShirts || preferences.foldingGolfShirts
      preferences.laundryInstructions = req.body.laundryInstructions || preferences.laundryInstructions
      preferences.dryCleaningInstructions = req.body.dryCleaningInstructions || preferences.dryCleaningInstructions
      preferences.foldingInstructions = req.body.foldingInstructions || preferences.foldingInstructions
      await preferences.save();
    }
    res.json({
      preferences
    })
  } catch (error) {
    console.log(error);
    res.json({
      msg: 'not found',
    })
  }
}