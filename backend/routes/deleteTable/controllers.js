const Tables = require('../../models/models');

exports.deleteTable = async (req, res) => {
  try {
    // console.log(User);
    const { id } = req.params;
    // console.log(id);
    // console.log(require('../../models/models'));
    await Tables[id].drop();
    console.log(Tables);
  } catch (e) {
    console.log(e);
  }
};
