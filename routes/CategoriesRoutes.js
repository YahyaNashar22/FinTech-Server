import { getAllCategories, createCategory, updateCategory, deleteCategory } from "../controllers/CategoriesController";
import { express } from "express";

const router = express.Router();

router.get('/categories', getAllCategories) // Route To get all the categories

router.post('/category', createCategory) // Route To create a category

router.put('/category/:id', updateCategory) // Route To update a category

router.delete('/category/:id', deleteCategory) // Route To delete a category