import { useEffect, useState } from "react";
import axios from "axios";
import { useParams,Link } from "react-router-dom";
import icon from "../../icons/square_icon.png";
import "./foodlist_details.css";
export const FoodDetails = () => {
  const [item, setItem] = useState({});
  const { code } = useParams();
//   console.log(code);

  useEffect(() => {
    axios.get(`https://sudhanshu7352.github.io/practice/db.json`).then((res) => {
      //  console.log(res.data.data);

       let ans = res.data.data.filter((e)=>e.code ==code)
      //  console.log(ans)
       setItem(ans[0]);
    });
  }, []);
  return (
    <div className="upper_div">
      <div>
        <div>
          <img src={icon} alt="icon" />
        </div>
        <div className="name_div">
          <span>
            <b>{item.product_name}</b>{" "}
          </span>
          <span>({item.generic_name})</span>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>URL</td>
            <td><a href={item.url}>link</a></td>
          </tr>
          <tr>
            <td>Container</td>
            <td>{item.packaging}</td>
          </tr>
          <tr>
            <td>Serving_size</td>
            <td>{item.serving_size}</td>
          </tr>
          <tr>
            <td>Energy_100g</td>
            <td>{item.energy_100g}</td>
          </tr>
          <tr>
            <td>Omega_3_fat_100g</td>
            <td>{item.omega_3_fat_100g}</td>
          </tr>
          <tr>
            <td>Fat_100g</td>
            <td>{item.fat_100g}</td>
          </tr>
          <tr>
            <td>Fiber_100g</td>
            <td>{item.fiber_100g}</td>
          </tr>
          <tr>
            <td>Cholesterol_100g</td>
            <td>{item.cholesterol_100g}</td>
          </tr>
          <tr>
            <td>Quantity</td>
            <td>{item.quantity}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
