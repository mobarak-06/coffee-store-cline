import Swal from "sweetalert2";
import coffeeImg from "../assets/images/cups/Rectangle 10.png";
import { Link } from "react-router-dom";

const coffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, quantity, supplier, taste } = coffee;

  const handelDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your coffee has been deleted.",
                icon: "success",
              });
              const remaining = coffees.filter((cof) => cof._id !== _id);
              setCoffees(remaining);
            }
          });
      }
    });
  };
  return (
    <div className="card card-side bg-[#F5F4F1] p-4">
      <figure>
        <img src={coffeeImg} alt="Movie" />
      </figure>
      <div className="flex justify-between w-full p-6">
        <div>
          <h2 className="card-title">Name: {name}</h2>
          <p>{quantity}</p>
          <p>{supplier}</p>
          <p>{taste}</p>
        </div>
        <div className="card-actions justify-end">
          <div className="join join-vertical space-y-4">
            <button className="btn join-item text-white bg-[#986b4b] hover:text-black">
              view
            </button>
            <Link to={`updateCoffee/${_id}`}>
              <button className="btn join-item bg-black text-white hover:text-black">
                edit
              </button>
            </Link>
            <button
              onClick={() => handelDelete(_id)}
              className="btn join-item bg-red-500 text-white hover:text-black"
            >
              delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default coffeeCard;
