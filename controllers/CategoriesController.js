import categories from "../models/categories";

// To get all gategories

export const getAllCategories = async (req, res) => {
  try {
    const Allcategories = await categories.findAll(); // findAll(): retrieves all records from the table associated with the model
    res.status(200).json({ success: true, data: Allcategories});
  } catch (error) {
    res.status(500).json({ success: false, error: 'Server Error'});
  }
}

// To create a category

export const createCategory = async (req, res) => {
  const { Name, type }=req.body;
  try {
    const newCategory = await categories.create({ Name, type });
    res.status(201).json({ success: true, data: newCategory});
  } catch (error) {
    res.status(500).json({success: false, error: 'Server Error' });
  }
};

// To update a category

export const updateCategory = async (req, res) => {
  const { id } = req.params;
  const { Name, type } = req.body;
  try {
    const category = await categories.findByPk(id); // finds a single record by its primary key and fetch the data
    if (!category) {
      return res.status(404).json({ success: false, error: 'Category not found' });
    }
    await category.update({ Name, type });
    res.status(200).json({ success: true, data: category });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Server Error' });
  }
};

// To delete a category

export const deleteCategory = async (req, res) => {
  const { id } = req.params;
  try {
    const category = await categories.findByPk(id);
    if (!category) {
      return res.status(404).json({ success: false, error: 'Category not found' });
    }
    await category.destroy(); // to delete the instance represented by category from the database
    res.status(200).json({ success: true, data: {} }); // no data is being returned as a result of the deletion operation
  } 
  
  catch (error) {
    res.status(500).json({ success: false, error: 'Server Error' });
  }
};