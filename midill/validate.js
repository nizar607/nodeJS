const yup = require("yup");

// nom: String,
// adresse: String,
// nbChambre: String,
// email: String,

const validate = async (req, res, next) => {
  try {
    const schema = yup.object().shape({
      adresse: yup.string().required(),
      email: yup.string().email().required(),
    });
    await schema.validate(req.body, { abortEarly: false });
    next();
  } catch (error) {
    res.status(400).json({
      error: error.errors,
    });
  }
};
module.exports = validate;


// const yup = require("yup");
// const validate = async (req, res, next) => {
//   try {
//     const schema = yup.object().shape({
//       name: yup.string().required(),
//       email: yup.string().email().required(),
//       cin: yup.number().required(),
//     });
//     await schema.validate(req.body, { abortEarly: false });
//     next();
//   } catch (error) {
//     res.status(400).json({
//       error: error.errors,
//     });
//   }
// };
// module.exports = validate;
