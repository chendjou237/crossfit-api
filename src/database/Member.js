 
const DB = require("./db.json");
// const {saveToDatabase} = require("./utils")

const getAllMembers = () => {
  return DB.members;
};

const getOneMember = (memberId) => {
  const member = DB.members.find((member) => member.id === memberId)
  if (!member){
    throw {
        status: 400,
        message: `member with id ${memberId} don't exist`
    }
  }
  return member;
}


module.exports = { getAllMembers, getOneMember };