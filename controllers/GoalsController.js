import { col } from "sequelize";
import Goals from "../models/goals.js"

//create a new Goal

export const createGoal = async (req, res) => {
    const { Value, Status, Start_Date, End_Date } = req.body;
    try{
        const newGoal = await Goals.create({ Value, Status, Start_Date, End_Date });
        return res.status(200).json({ messsage:"Goal created successfully", newGoal })

    }
    catch (err){
        console.log(err);

        res.status(404).json({ error: err.messsage })
    }
}

//get all Goals

export const getAllGoals = async (req, res) => {
    const goals =  await Goals.findAll({})
    res.status(200).send(goals)
}

//Get single Goal

export const getOneGoal = async (req, res) => {
    const id = req.params.id
    try{
        const goal = await Goals.findOne({ where:{ id: id }})
        res.status(200).send(goal)
    }catch (err){
        console.log(err)
        res.status(404).json({error: "Couldn't find Goal"})
    }
}


// update goal

export const updateGoal = async (req, res) => {
    const id = req.params.id
    try{
        const goal = await Goals.update(req.body, { where: { id: id }})
        res.status(200).send(goal)
    }catch (err){
        console.log(err)
        res.status(404).json({error: "Couldn't find Goal"})
    }
}

//delete goal by id

export const deleteGoal = async (req, res) => {
    const id = req.params.id
    try{
        await Goals.destroy({ where:{ id: id }})
        res.status(200).send("goal is deleted !!!")
    }catch (err){
        console.log(err)
        res.status(404).json({error: "Couldn't find Goal"})
    }
}
// {
//     "Value": 20000,
//     "Status": true,
//     "Start_Date": "12/1/2000",
//     "End_Date": "12/12/2000"
// }