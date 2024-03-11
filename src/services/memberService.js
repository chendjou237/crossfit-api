const Member = require("../database/Member");

const getOneMember = (workoutId) => {
  try {
    const member = Member.getOneMember(workoutId);
    return member;
  } catch (error) {
    throw error;
  }
};
module.exports = { getOneMember };