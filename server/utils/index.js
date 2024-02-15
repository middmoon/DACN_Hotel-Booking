const _ = require("lodash");

const getInfoData = ({ fields = [], object = {} }) => {
  return _.pick(object, fields);
};

const isEmail = (string) => {};

module.exports = {
  getInfoData,
};
