import Transactions from "../models/transactions.js";
import { Sequelize ,Op} from 'sequelize';

 // CREATE NEW TRANSACTIONS 
export const CreateTransaction = async (req, res) => {
  const { title, type, Date, value, UserID, CategoryID } = req.body;
  try {
    const newTrans = await Transactions.create({
      title,
      type,
      Date,
      value,
      UserID,
      CategoryID,
    });

    res.status(200).json({
      message: "Transaction created successfully",
      transaction: newTrans,
    });
  } catch (err) {
    console.error('Error creating transaction:', err.message);
    res.status(500).json({ error: "Transaction couldn't be created" });
  }
};

 

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


//FETCH DATA FOR THE PIE 
export const getExpenses = async (req, res) => {
  try {
    const expenses = await Transactions.findAll({
      attributes: ['title', 'value'], // Extracting 'title' and 'value' fields
      where: {
        type: 0, // Assuming type 0 represents expenses
      },
    });

    // Map the expenses to the format expected by the frontend
    const formattedExpenses = expenses.map((expense) => ({
      category: expense.title,
      amount: expense.value,
    }));

    res.status(200).json(formattedExpenses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};



// Fetch dynamic data for the bar chart
export const getBarChartData = async (req, res) => {
  try {
    // Aggregate income and expenses by year in the database
    const aggregatedData = await Transactions.findAll({
      attributes: [
        [Sequelize.fn('YEAR', Sequelize.col('Date')), 'year'],
        [Sequelize.fn('SUM', Sequelize.literal('CASE WHEN type = 1 THEN value ELSE 0 END')), 'income'],
        [Sequelize.fn('SUM', Sequelize.literal('CASE WHEN type = 0 THEN value ELSE 0 END')), 'expense'],
      ],
      group: [Sequelize.fn('YEAR',Sequelize.col('Date'))],
      order: [[Sequelize.fn('YEAR', Sequelize.col('Date')), 'ASC']], // Order by year in ascending order
      raw: true,
    });

    // Prepare data for the frontend chart
    const chartData = {
      options: {
        colors: ['#4DA192', '#14EBBE'],
        chart: { id: 'basic-bar' },
        xaxis: {
          categories: aggregatedData.map((data) => data.year),
        },
      },
      series: [
        {
          name: 'Income',
          data: aggregatedData.map((data) => data.income),
        },
        {
          name: 'Expense',
          data: aggregatedData.map((data) => data.expense),
        },
      ],
    };

    res.status(200).json(chartData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

//just expense 
export const getExpenseForLineChart = async (req, res) => {
  try {
    console.log('Executing getExpenseForLineChart');

    const expenseData = await Transactions.findAll({
      attributes: [
        [Sequelize.fn('YEAR', Sequelize.col('Date')), 'year'],
        [Sequelize.fn('SUM', Sequelize.literal('CASE WHEN type = 0 THEN value ELSE 0 END')), 'expense'],
      ],
      group: [Sequelize.fn('YEAR', Sequelize.col('Date'))],
      order: [[Sequelize.fn('YEAR', Sequelize.col('Date')), 'ASC']],
      raw: true,
    });

    console.log('Expense Data:', expenseData);

    const lineChartData = {
      options: {
        colors: ['#14EBBE'],
        chart: { id: 'basic-line' },
        xaxis: {
          categories: expenseData.map((data) => data.year),
        },
      },
      series: [
        {
          name: 'Expense',
          data: expenseData.map((data) => data.expense),
        },
      ],
    };

    res.status(200).json(lineChartData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};



// Fetch dynamic data for the line chart
export const getLineChartData = async (req, res) => {
  try {
    // Aggregate income and expenses by month in the database
    const aggregatedData = await Transactions.findAll({
      attributes: [
        [Sequelize.fn('MONTHNAME', Sequelize.col('Date')), 'month'],
        [Sequelize.fn('SUM', Sequelize.literal('CASE WHEN type = 1 THEN value ELSE 0 END')), 'income'],
        [Sequelize.fn('SUM', Sequelize.literal('CASE WHEN type = 0 THEN value ELSE 0 END')), 'expense'],
        [Sequelize.fn('MIN', Sequelize.col('Date')), 'minDate'], // Get the minimum date for ordering
      ],
      group: [Sequelize.fn('MONTHNAME', Sequelize.col('Date'))],
      order: [
        [Sequelize.col('minDate'), 'ASC'], // Order by the minimum date in ascending order
      ],
      raw: true,
    });

    // Prepare data for the frontend chart
    const chartData = {
      options: {
        colors: ['#4DA192', '#14EBBE'],
        chart: { id: 'basic-bar' },
        xaxis: {
          categories: aggregatedData.map((data) => data.month),
        },
      },
      series: [
        {
          name: 'Income',
          data: aggregatedData.map((data) => Number(data.income)),
        },
        {
          name: 'Expense',
          data: aggregatedData.map((data) => Number(data.expense)),
        },
      ],
    };

    res.status(200).json(chartData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


// Fetch dynamic data for the Material-UI chart
export const getIncomeAreaChartData = async (req, res) => {
  try {
    // Modify this part based on your database schema and model
    const aggregatedData = await Transactions.findAll({
      attributes: [
        [Sequelize.fn('MONTHNAME', Sequelize.col('Date')), 'month'],
        [Sequelize.fn('SUM', Sequelize.literal('CASE WHEN type = 1 THEN value ELSE 0 END')), 'income'],
        [Sequelize.fn('SUM', Sequelize.literal('CASE WHEN type = 0 THEN value ELSE 0 END')), 'expense'],
        [Sequelize.fn('MIN', Sequelize.col('Date')), 'minDate'],
      ],
      group: [Sequelize.fn('MONTHNAME', Sequelize.col('Date'))],
      order: [
        [Sequelize.col('minDate'), 'ASC'],
      ],
      raw: true,
    });

    // Prepare data for the frontend chart
    const chartData = {
      options: {
        colors: ['#4DA192', '#14EBBE'],
        chart: { id: 'income-area-chart' },
        xaxis: {
          categories: aggregatedData.map((data) => data.month),
        },
      },
      series: [
        {
          name: 'Income',
          data: aggregatedData.map((data) => Number(data.income)),
        },
        {
          name: 'Expense',
          data: aggregatedData.map((data) => Number(data.expense)),
        },
      ],
    };

    res.status(200).json(chartData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};



// ... (previous imports)

export const getWeeklyBarChartData = async (req, res) => {
  try {
    // Aggregate income by week in the database
    const aggregatedData = await Transactions.findAll({
      attributes: [
        [Sequelize.fn('WEEKDAY', Sequelize.col('Date')), 'weekday'], // Use WEEKDAY instead of WEEK
        [Sequelize.fn('SUM', Sequelize.literal('CASE WHEN type = 1 THEN value ELSE 0 END')), 'income'],
      ],
      group: [Sequelize.fn('WEEKDAY', Sequelize.col('Date'))],
      order: [[Sequelize.fn('WEEKDAY', Sequelize.col('Date')), 'ASC']], // Order by weekday in ascending order
      raw: true,
    });

    // Prepare data for the frontend chart
    const chartData = {
      options: {
        colors: ['#4DA192'],
        chart: { id: 'basic-bar' },
        xaxis: {
          categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], // Days of the week
        },
      },
      series: [
        {
          name: 'Income',
          data: [0, 0, 0, 0, 0, 0, 0], // Initialize with zeros for all days
        },
      ],
    };

    // Map the aggregated data to the correct day in the x-axis
    aggregatedData.forEach((data) => {
      chartData.series[0].data[data.weekday] = data.income;
    });

    res.status(200).json(chartData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
