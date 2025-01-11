import React, { useEffect, useState } from "react";
import "./list.css";
import axios from "axios";
import { toast } from "react-toastify";

const List = ({url}) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`);
    // console.log(response.data);
    if (response.data.success) {
      setList(response.data.data);
      toast.success(response.data.message)
    } else {
      toast.error("error");
    }
  };

  const removefood=async (foodId)=>{
      //console.log(foodId);
      const response=await axios.post(`${url}/api/food/remove`,{id:foodId});
      //console.log(response.data);
      await fetchList();
      if(response.data.success){
        toast.success(response.data.message)
      }else{
        toast.error("food is not deleted")
      }
  }

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="list add flex-col">
      <p>All Foods List</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item,index)=>{
          return(
            <div className="list-table-format">
               <img src={`${url}/image/`+item.image} key={item._id} alt="" />
               <p>{item.name}</p>
               <p>{item.category}</p>
               <p>{item.price}</p>
               <p onClick={()=>removefood(item._id)} className="cursur">X</p>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default List;