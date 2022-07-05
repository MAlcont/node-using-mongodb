import mongoose from 'mongoose';
import { ProductSchema } from '../models/models';

const Product = mongoose.model('Product', ProductSchema);

export const addnewProduct = (req, res) => {
    let newProduct = new Product(req.body);

    newProduct.save((err, Product) => {
        if (err) {
            res.send(err);
        }
        res.json(Product);
    });
}
