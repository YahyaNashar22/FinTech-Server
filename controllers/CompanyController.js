import Company from "../models/company.js";

// To create a company info

export const createCompanyInfo = async (req, res) => {
  const { 
    Name,
    Description,
    Capital,
    Updated_Capital,
    Address,
    Social_Media,
    Phone_Number,
    Website 
  } = req.body;

  try {
    const newCompanyInfo = await Company.create({ 
      Name,
      Logo: req.file.filename,
      Description,
      Capital,
      Updated_Capital,
      Address,
      Social_Media,
      Phone_Number,
      Website 
    });

    res.status(201).json({ success: true, data: newCompanyInfo });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Server Error" });
  }
};

// To get company Info
export const getCompanyInfo = async (req, res) => {
  try {
    const companyInfo = await Company.findOne(); // Use Sequelize's findOne method
    if (!companyInfo) {
      return res
        .status(404)
        .json({ success: false, error: "Company information not found" });
    }
    res.status(200).json({ success: true, data: companyInfo });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Server Error" });
  }
};

// To update company Info
export const updateCompanyInfo = async (req, res) => {
  const {
    Name,
    Description,
    Capital,
    Updated_Capital,
    Address,
    Social_Media,
    Phone_Number,
    Website,
  } = req.body;

  req.body.logo = req.file.path;
  try {
    let companyInfo = await Company.findOne();
    if (!companyInfo) {
      return res
        .status(404)
        .json({ success: false, error: "Company information not found" });
    }
    companyInfo = await companyInfo.update({
      Name,
      Logo: req.file ? req.file.filename : companyInfo.Logo,
      Description,
      Capital,
      Updated_Capital,
      Address,
      Social_Media,
      Phone_Number,
      Website,
    });

    res.status(200).json({ success: true, data: companyInfo });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Error" });
  }
};