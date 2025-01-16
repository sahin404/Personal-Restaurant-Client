import Swal from "sweetalert2";
import useCarts from "../../../hoooks/useCarts/useCarts"
import { MdDelete } from "react-icons/md";
import useAxiosSecure from "../../../hoooks/useAxiosSecure/useAxiosSecure";

const Carts = () => {
  const axiosSecure = useAxiosSecure();
  const [cart, refetch] = useCarts();
  const handleDelete = id => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {

        axiosSecure.delete(`carts/${id}`)
          .then(res => {
            if (res.status === 200 || res.status === 204) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Your Product has been deleted.",
                icon: "success"
              });
            }
          })
      }
    });
  }

  const totalPrice = cart.reduce((total, product) => total + product.price, 0).toFixed(2); // Calculate total price 
  return (
    <div>
      <div className="flex items-center justify-evenly text-2xl text-semibold">
        <h1>Total Orders: {cart.length}</h1>
        <h1>Total Price: ${totalPrice}</h1>
        <h1 className="btn btn-secondary">Make Payment</h1>
      </div>
      <div className="divider"></div>
      <div>
        {
          <div className="overflow-x-auto">
            <table className="table text-lg">
              {/* head */}
              <thead>
                <tr className="text-lg">
                  <th>No</th>
                  <th>Item Image</th>
                  <th>Item Name</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>{
                cart.map((crt, index) => <tbody key={crt._id} >
                  {/* row 1 */}
                  <tr>
                    <th>
                      <label>
                        {index + 1}
                      </label>
                    </th>
                    <td>
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={crt.image} />
                        </div>
                      </div>

                    </td>
                    <td>
                      {crt.name}
                    </td>
                    <td>${crt.price}</td>
                    <th>
                      <button onClick={() => { handleDelete(crt._id) }} className="btn ">
                        <MdDelete className="text-3xl text-red-600" />
                      </button>
                    </th>
                  </tr>

                </tbody>)
              }


            </table>
          </div>
        }
      </div>
    </div>
  )
}

export default Carts