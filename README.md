#  Ecommerce Full Stack Development Project

This is a full-stack **E-commerce web application** built using the MERN stack (MongoDB, Express.js, React, Node.js).      
The project provides complete functionality for users to browse products, add them to cart, and place orders.      
Admins can manage products, categories, and track sales.     

---

## Features   

### User Features  
- User authentication (Signup / Login with JWT)    
- Browse products by category and sub-category    
- Search & filter products               
- Add to cart, update cart, and checkout     
- Order history      

### Admin Features    
- Add, edit, and delete products   
- Upload product images               
- Manage categories and sub-categories     
- Mark products as bestseller    
- View/manage user orders      

---

## Tech Stack     

**Frontend**     
- React.js (Vite)   
- React Router   
- Axios                                                
- TailwindCSS / Bootstrap (based on your project setup)      

**Backend**    
- Node.js         
- Express.js        
- MongoDB + Mongoose   
- JWT Authentication         
- Multer (for image upload)                
- Cloudinary (for storing product images)           
                           
**Deployment**           
- Vercel (Frontend + Backend API deployment)     
- MongoDB Atlas (Database)            

---           

## Installation & Setup

**Clone the repo**
   
   git clone https://github.com/Neha061102/Ecommerce-FSD-Project.git
   cd Ecommerce-FSD-Project

**Backend setup**

cd backend
npm install
npm run dev
Runs the server at http://localhost:4000

**Frontend setup**

cd frontend
npm install
npm run dev
Runs the React app at http://localhost:5173

**Environment Variables**

Create a .env file in backend/ with:

PORT=4000
MONGO_URI=your-mongodb-connection-string
JWT_SECRET=your-secret-key
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret



