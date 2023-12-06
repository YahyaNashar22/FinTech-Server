import Transactions from "../models/transactions.js";

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

    // Fetch total count of transactions without limiting the result set
    const totalCount = await Transactions.count();

    // Fetch paginated transactions
    const transactions = await Transactions.findAll({
      limit: pageSize,
      offset: offset,
    });

    res.set('X-Total-Count', totalCount); // Set the total count in response headers
    res.status(200).json(transactions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
  
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


// get expenses
export const getExpenses = async (req, res) => {
  try {
    const expenses = await Transactions.findAll({
      where: {
        type: 0, // Assuming type 0 represents expenses
      },
    });

    res.status(200).json(expenses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
