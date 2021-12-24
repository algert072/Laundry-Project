const mongoose = require('mongoose');
// const config = require('config')
// const db = config.get('mongoURI')

// const connectDB = async () => {
//   try {
//     await mongoose.connect(db, {
//       useNewUrlParser: true,
//   });
//   console.log('MongoDB Connected')

//   } catch (error) {
//     console.error(error.message);
//     process.exit(1)s
//   }
// }
const connectDB = async () => {
  try {
    await mongoose.connect(
      process.env.MONGODB_URI || 'mongodb://localhost/Subscription',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log('MongoDB Connected');
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};
module.exports = connectDB;
