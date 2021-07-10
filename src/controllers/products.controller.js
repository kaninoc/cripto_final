import product from "../models/products"

export const createProduct = async (req, res) => {
    //const { nombre, categoria, precio, imgURL } = req.body;
    
    console.log( req.body);
    res.send(req.body);
    /*try {
      const newProduct = new Product({
        nombre,
        categoria,
        precio,
        imgURL,
      });
  
      const productoGuardado = await newProduct.save();
  
      res.status(201).json(productoGuardado);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }*/
  };

export const getProduct = (req,res) => {
    res.json("get products")
}

export const getProductbyId = (req,res) => {
    
}

export const updateProductbyId = (req,res) => {
    
}

export const deleteProductbyId = (req,res) => {
    
}