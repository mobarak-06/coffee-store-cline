import Swal from "sweetalert2";
const AddCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const newCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    console.log(newCoffee);

    // send data to the server
    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "success!",
            text: "Coffee Updated SuccessFully",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      });
  };
  return (
    <div
      className="md:w-[1200px] w-[650px]
        h-[765px] bg-[#F4F3F0] md:mx-auto   md:p-24"
    >
      <h1 className="text-6xl font-bold md:text-center">Add Coffee</h1>
      <form onSubmit={handleAddCoffee}>
        <div className="md:flex gap-6">
          <div className="form-control md:w-full">
            <label className="label">
              <span className="label-text">Coffee Name</span>
            </label>
            <input
              type="text"
              placeholder="Coffee Name"
              className="input input-bordered w-3/4 md:w-full"
              name="name"
              required
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <input
              type="text"
              placeholder="Available Quantity"
              className="input input-bordered w-3/4 md:w-full"
              name="quantity"
              required
            />
          </div>
        </div>
        <div className="md:flex gap-6">
          <div className="form-control md:w-full">
            <label className="label">
              <span className="label-text">Supplier</span>
            </label>
            <input
              type="text"
              placeholder="supplier"
              name="supplier"
              className="input input-bordered w-3/4 md:w-full"
              required
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Taste</span>
            </label>
            <input
              type="text"
              placeholder="Taste"
              name="taste"
              className="input input-bordered w-3/4 md:w-full"
              required
            />
          </div>
        </div>
        <div className="md:flex gap-6">
          <div className="form-control md:w-full">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <input
              type="text"
              placeholder="Category"
              name="category"
              className="input input-bordered w-3/4 md:w-full"
              required
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <input
              type="text"
              placeholder="Details"
              name="details"
              className="input input-bordered w-3/4 md:w-full"
              required
            />
          </div>
        </div>
        <div className="md:flex gap-6">
          <div className="form-control md:w-full">
            <label className="label">
              <span className="label-text">Photo Url</span>
            </label>
            <input
              type="text"
              placeholder="Photo Url"
              name="photo"
              className="input input-bordered w-3/4 md:w-full"
              required
            />
          </div>
        </div>
        <input
          className="btn mt-6 w-3/4 md:w-full bg-[#D2B48C]"
          type="submit"
          value="Add Coffee"
        />
      </form>
    </div>
  );
};

export default AddCoffee;
