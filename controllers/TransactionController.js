import Transactions from "../models/transactions.js";
import Categories from "../models/categories.js";
import Users from "../models/users.js";

 // CREATE NEW TRANSACTIONS 
 export const CreatTransaction = async (req,res)=>{
  const{title,type,Date,value,UserID,CategoryID}=req.body;
  try{
      const newtrans=await Transactions.create({
          title,
          type,
          Date,
          value,
          UserID,
          CategoryID
          
      });
  
       res.status(200).json({message:"transaction created successfully", transaction:newtrans})


  }
  catch (err) {
      console.log(err);
      res.status(500).json({ error: "transaction couldn't be created" });
    }
}
 


//get+pagination


  
 

export const getAllTransactions = async (req, res) => {
  try {
    const page = req.query.page || 1; // default to page 1
    const pageSize = 5; // limit to 5 transactions
    const offset = (page - 1) * pageSize;

    const transactions = await Transactions.findAll({
      limit: pageSize,
      offset: offset,
    });

    res.status(200).json(transactions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
  
 





  
  // Get a specific transaction by ID
  export const getTransactionById = async (req, res) => {
    try {
      const transaction = await Transactions.findByPk(req.params.id);
      if (!transaction) {
        res.status(404).json({ error: 'Transaction not found' });
      } else {
        res.status(200).json(transaction);
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  // Update a transaction by ID
  export const updateTransactionById = async (req, res) => {
    try {
      const [updatedRows] = await Transactions.update(req.body, {
        where: { id: req.params.id },
      });
      if (updatedRows === 0) {
        res.status(404).json({ error: 'Transaction not found' });
      } else {
        const updatedTransaction = await Transactions.findByPk(req.params.id);
        res.status(200).json(updatedTransaction);
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  // Delete a transaction by ID
  export const deleteTransactionById = async (req, res) => {
    try {
      const deletedCount = await Transactions.destroy({
        where: { id: req.params.id },
      });
      if (deletedCount === 0) {
        res.status(404).json({ error: 'Transaction not found' });
      } else {
        res.status(204).send();
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };



 
// export const CreatTransaction = async (req, res) => {
//   try {
//     const { title, type, Date, value, UserId, categoryId } = req.body;

//     // Create a new transaction
//     const newTransaction = await Transactions.create({
//       title,
//       type,
//       Date, // 'Date' is a reserved keyword, so use the uppercase 'Date'
//       value,
//       UserId, // Assuming your foreign key for user is named 'UserId'
//       CategoryId: categoryId, // Assuming your foreign key for category is named 'CategoryId'
//     });

//     res.status(201).json({ message: 'Transaction added successfully', data: newTransaction });
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };




// // Fetch all transactions
// export const getAll = async (req, res) => {
//     try {
//       const AllTransaction = await Transactions.findAll();
//       return res.status(200).json(AllTransaction);
//     } catch (err) {
//       console.log(err);
//       res.status(500).json({ err: "cannot fetch transactions" });
//     }
//   };

//   // Update transaction

// export const updateTransaction = async (req, res) => {
//     try {
//         const{title,type,Date,value,UserID}=req.body;
//       await Transactions.update({title,type,Date,value,UserID }),
//         {
//           where: { title: req.body },
//         };
//       return res.status(200).json({ message: "transaction updated successfully" });
//     } catch (err) {
//       console.log(err);
//       res.status(500).json({ error: "Trouble updating transaction info" });
//     }
//   };
 // export const getAllTransactions = async (req, res) => {
  //   try {
  //     const transactions = await Transactions.findAll();
  //     include: [Categories, Users ]

  //     res.status(200).json(transactions);
  //   } catch (error) {
  //     console.error(error);
  //     res.status(500).json({ error: 'Internal Server Error' });
  //   }
  // };




   // Create a new transaction
// export const createTransaction = async (req, res) => {
//     try {
//       const transaction = await Transactions.create(req.body);
//       res.status(201).json(transaction);
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   };
  
  // Get all transactions