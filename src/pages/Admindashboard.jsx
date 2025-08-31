import React, { useState, useEffect } from "react";
import {  useNavigate } from "react-router-dom";
import { FaTshirt, FaClipboardList, FaUsers, FaEdit, FaTrash, FaStar } from "react-icons/fa";
import {useLocation} from "react-router-dom"
import axiosInstance from "../utils/axiosInstance";




const Admindashboard = () => {

    const [activePanel, setActivePanel] = useState("products");
    const [orders, setOrders] = useState([]);
    const [products, setProducts] = useState([]);
    const [users, setUsers] = useState([]);
    const [loading,setLoading] = useState(false)
    const navigate = useNavigate();
     
      const location = useLocation();  
  const updatedProduct = location.state?.updatedProduct;
     useEffect(() => {
   
    const fetchProducts = async () => {
   const { data } = await axiosInstance.get("http://localhost:5001/api/products");
      setProducts(data);
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    
    if (updatedProduct) {
      setProducts((prevProducts) =>
        prevProducts.map((p) =>
          p._id === updatedProduct._id ? updatedProduct : p
        )
      );
    }
  }, [updatedProduct]);

    useEffect(() => {
        setLoading(true);

        const fetchData = async () => {
           try {
             let endpoint = "" ;
             switch(activePanel) {
                case "orders":
                endpoint = "http://localhost:5001/api/orders";
                 break;
                 case "products" :
                  endpoint = "http://localhost:5001/api/products";
                  break;
                  case "users" :
                    endpoint = "http://localhost:5001/api/users";
                    break;
                    default:
                        return;
             }

             const response = await fetch (endpoint);
             const data = await response.json() ;
             if (activePanel === "orders") setOrders(data)
            else if (activePanel === "products") setProducts(data)
            else if (activePanel === "users") setUsers(data)
            } catch(error) {
               console.error(`error fetching ${activePanel}: `,error)
            } finally{
                setLoading(false)
            }
        };
        fetchData();
         }, [activePanel]);

         const renderProductsPanel = () => (
    <div className="p-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Products Management</h2>
        <button
          className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded transition duration-300"
          onClick={() => navigate("/AddProduct")}
        >
          Add New Product
        </button>
      </div>
      
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      ) : products.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-gray-500">No products found.</p>
        </div>
      ) : (
        <div className="overflow-x-auto bg-white rounded-lg shadow">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {products.map((product) => (
                <tr key={product._id} className="hover:bg-gray-50 transition duration-150">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      {product.images?.[0] && (
                        <img 
                          src={product.images[0]} 
                          alt={product.title}
                          className="h-10 w-10 rounded-full object-cover mr-3"
                        />
                      )}
                      <div>
                        <div className="text-sm font-medium text-gray-900">{product.title}</div>
                        <div className="text-xs text-gray-500">{product.sku}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900"> {product.price}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 capitalize">{product.type}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button
                      onClick={() => navigate(`/edit-product/${product._id}`)}
                      className="text-blue-600 hover:text-blue-900 mr-4"
                      title="Edit"
                    >
                      <FaEdit className="inline" />
                    </button>
                    <button
                      onClick={() => handleDeleteProduct(product._id)}
                      className="text-red-600 hover:text-red-900"
                      title="Delete"
                    >
                      <FaTrash className="inline" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
        const handleDeleteProduct = async (productId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this product?");
    if (!confirmDelete) return;

    try {
     const response = await fetch(`http://localhost:5001/api/products/${productId}`, {
  method: 'DELETE',
});

      
      
      if (response.ok) {
        setProducts(products.filter(product => product._id !== productId));
      } else {
        console.error('Failed to delete product');
      }
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };


         const panels = {
    products: renderProductsPanel(),
    orders: (
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Orders Panel</h2>
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
          </div>
        ) : orders.length === 0 ? (
          <p className="text-gray-500">No orders found.</p>
        ) : (
          <div className="overflow-x-auto bg-white rounded-lg shadow">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {orders.map((order) => (
                  <tr key={order._id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">#{order._id.slice(-6)}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{order.firstName} {order.lastName}</div>
                      <div className="text-sm text-gray-500">{order.email}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        {order.status || "Processing"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    ),
    users: (
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Users Panel</h2>
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
          </div>
        ) : users.length === 0 ? (
          <p className="text-gray-500">No users found.</p>
        ) : (
          <div className="overflow-x-auto bg-white rounded-lg shadow">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {users.map((user) => (
                  <tr key={user._id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.email}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user._id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button className="text-red-600 hover:text-red-900">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    )
  
}








      
  return (
   <div className="flex flex-col md:flex-row h-screen bg-gray-50">
      <aside className="w-full md:w-64 bg-gray-800 text-white p-4 md:p-6 md:fixed md:h-full z-20">
        <h2 className="text-xl font-bold mb-6">Admin Dashboard</h2>
        <ul>
          <li
            className={`flex items-center gap-2 mb-2 cursor-pointer p-2 rounded ${activePanel === "products" ? "bg-gray-700" : "hover:bg-gray-700"}`}
            onClick={() => setActivePanel("products")}
          >
            <FaTshirt /> Products
          </li>
          <li
            className={`flex items-center gap-2 mb-2 cursor-pointer p-2 rounded ${activePanel === "orders" ? "bg-gray-700" : "hover:bg-gray-700"}`}
            onClick={() => setActivePanel("orders")}
          >
            <FaClipboardList /> Orders
          </li>
          <li
            className={`flex items-center gap-2 mb-2 cursor-pointer p-2 rounded ${activePanel === "users" ? "bg-gray-700" : "hover:bg-gray-700"}`}
            onClick={() => setActivePanel("users")}
          >
            <FaUsers /> Users
          </li>
        </ul>
      </aside>

      <main className="flex-1 p-4 md:p-6 md:ml-64 overflow-y-auto">
        {panels[activePanel]}
      </main>
    </div>
  );
};


export default Admindashboard;
