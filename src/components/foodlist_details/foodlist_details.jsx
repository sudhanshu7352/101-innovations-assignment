import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import icon from "../../icons/square_icon.png";
import "./foodlist_details.css"
export const FoodDetails = () => {
  const [item, setItem] = useState({});
  const { code } = useParams();
  console.log(code);

  useEffect(() => {
    axios.get(`http://localhost:3001/data?code=${code}`).then((res) => {
      console.log(res.data[0]);
      setItem(res.data[0]);
    });
  }, []);
  return (
    <div className="upper_div">
      <div >
        <div>
          <img src={icon} alt="icon" />
        </div>
        <div  className="name_div">
          <span>
            <b>{item.product_name}</b>{" "}
          </span>
          <span>({item.generic_name})</span>
        </div>
      </div>
    </div>
  );
};
