const memberService = require("../services/memberService")

const getOneMember = (req, res) => {
    const {
        params:{
            memberId
        }
    } = req
if(!memberId){
    res.status(400).send({status:"FAILED", error:"Please provide a member id"})
}
try {
        const members = memberService.getOneMember(memberId)
        res.status(201).send({status:"OK", data: members})
    
} catch (error) {
    res.status(error?.status || 500).send({status:"FAILED", error:error?.message || error})
}}

module.exports = {getOneMember}