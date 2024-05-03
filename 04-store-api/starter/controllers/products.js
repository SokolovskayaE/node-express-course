const Product = require('../models/product');

const getAllProductsStatic = async (req, res) => {
  //Query products with price greater than 30, sort by price, and select name and price fields
  const products = await Product.find({ price: { $gt: 30 } })
    .sort('price')
    .select('name price');
  //Send response with filtered products and their count
  res.status(200).json({ products, nbHits: products.length });
};
const getAllProducts = async (req, res) => {
  //Extracting Query Parameters:
  const { featured, company, name, sort, fields, numericFilters } = req.query;
  //Constructing Query Object:
  const queryObject = {};

  if (featured) {
    queryObject.featured = featured === 'true' ? true : false;
  }
  if (company) {
    queryObject.company = company;
  }
  if (name) {
    queryObject.name = { $regex: name, $options: 'i' };
  }
  if (numericFilters) {
    const operatorMap = {
      '>': '$gt',
      '>=': '$gte',
      '=': '$eq',
      '<': '$lt',
      '<=': '$lte',
    };
    const regEx = /\b(<|>|>=|=|<|<=)\b/g;
    let filters = numericFilters.replace(
      regEx,
      (match) => `-${operatorMap[match]}-`
    );
    const options = ['price', 'rating'];
    filters = filters.split(',').forEach((item) => {
      const [field, operator, value] = item.split('-');
      if (options.includes(field)) {
        queryObject[field] = { [operator]: Number(value) };
      }
    });
  }

  console.log(queryObject)
  //Creates a MongoDB query using the Mongoose find() method
  let result = Product.find(queryObject);
  //Sorting
  if (sort) {
    const sortList = sort.split(',').join(' ');
    result = result.sort(sortList);
  } else {
    result = result.sort('createdAt');
  }

  if (fields) {
    const fieldsList = fields.split(',').join(' ');
    result = result.select(fieldsList);
  }
  //Extracting Pagination Parameters
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;
 //Applying Pagination to the Query
  result = result.skip(skip).limit(limit);
  // 23 items
  // 4 pages: 7 7 7 2
 //Returning Paginated Results
  const products = await result;
  res.status(200).json({ products, nbHits: products.length });
};

module.exports = {
  getAllProducts,
  getAllProductsStatic,
};