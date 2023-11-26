import Notifications from "../models/notification.js";

//create new notification 


export const CreatNotification =async(req,res)=>{
    const{Name, Date,TransactionID}=req.body;
    try{
        const newnotification=await Notifications.create({
            Name,
            Date,
            TransactionID
        });
        res.status(200).json({message:" new notification created" , notification:newnotification})

    }
    catch(err){
        console.log(err);
        res.status(500).json({error:"notification couldn't be created" });}
    }



    //get notifiation 
    export const getAllNotifications = async (req, res) => {
        try {
         
          const notifiation = await Notifications.findAll();
      
          res.status(200).json(notifiation);
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'Internal Server Error' });
        }
      }

       // Delete a notification by ID
  export const deleteNotificationById = async (req, res) => {
    try {
      const deleted = await Notifications.destroy({
        where: { id: req.params.id },
      });
      if (deleted === 0) {
        res.status(404).json({ error: 'notification not found' });
      } else {
        res.status(204).send();
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };


    // Update a notification by ID
    export const updateNotificationById = async (req, res) => {
        try {
          const [updatedRows] = await Notifications.update(req.body, {
            where: { id: req.params.id },
          });
          if (updatedRows === 0) {
            res.status(404).json({ error: 'notification not found' });
          } else {
            const updatedNotification = await Notifications.findByPk(req.params.id);
            res.status(200).json(updatedNotification);
          }
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'Internal Server Error' });
        }
      };
      

