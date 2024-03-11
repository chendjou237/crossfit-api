const recordService = require("../services/recordService")

const getRecordForWorkout = (req, res) => {
    const {
        params:{
            workoutId
        }
    } = req
if(!workoutId){
    res.status(400).send({status:"FAILED", error:"Please provide a workout id"})
}
try {
        const records = recordService.getRecordForWorkout(workoutId)
        res.status(201).send({status:"OK", data: records})
    
} catch (error) {
    res.status(error?.status || 500).send({status:"FAILED", error:error?.message || error})
}}

module.exports = {getRecordForWorkout}