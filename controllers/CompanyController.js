import Company from '../models/Company.js';

export const getCompanyInfo=async (req, res) => {
  try {
    const companyInfo = await Company.findOne(); // Use Sequelize's findOne method
    if (!companyInfo) {
      return res.status(404).json({ success: false, error: 'Company information not found' });
    }
    res.status(200).json({ success: true, data: companyInfo });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Server Error' });
  }
};

export const updateCompanyInfo = async (req, res) => {
  const {Name, Logo, Description, Capital, Address, SocialMedia, PhoneNumber, Website} = req.body;

  try {
    let companyInfo = await Company.findOne();
    if (!companyInfo) {
      return res.status(404).json({ success: false, error: 'Company information not found' });
    }
    companyInfo = await companyInfo.update({
      Name,
      Logo,
      Description,
      Capital,
      Address,
      SocialMedia,
      PhoneNumber,
      Website,
    });

    res.status(200).json({success: true, data: companyInfo});
  } catch (error) {

    res.status(500).json({success: false, error: 'Error'});
  }
};
