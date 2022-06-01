// import React from "react";
// import { TiDelete } from "react-icons/ti";

// const ModalComponent = ({ open, setOpen, data }) => {
//   console.log(data);
//   return (
//     <div
//       className=" top-0 right-0 z-40 w-full h-screen bg-gray-600 bg-opacity-50  justify-center items-center "
//       style={
//         open ? { display: "flex", position: "fixed" } : { display: "none" }
//       }
//     >
//       <div
//         className={`w-full h-3/4 md:w-1/2 md:h-3/4 flex flex-col justify-between gap-3 items-center  bg-white rounded-lg  in transition-all  duration-300 ease-in animate-[wiggle_0.3s_linear]`}
//       >
//         <div className=" w-full flex flex-col justify-center items-center">
//           <TiDelete className="text-8xl  text-rose-800" />
//         </div>
//         <div className="w-full flex flex-col justify-center items-center p-3 gap-3">
//           <img alt="delete_item" src={data.url} className="w-1/2 h-2/3" />
//           <h3 className="md:text-xl text-gray-400">{data.title}</h3>
//         </div>
//         <div className="flex w-full p-2">
//           <button className="w-full md:w-1/2 bg-rose-700 p-3 text-white rounded-lg mx-2">
//             حذف
//           </button>
//           <button
//             onClick={() => setOpen(false)}
//             className="w-full md:w-1/2 bg-gray-400 p-3 text-white rounded-lg mx-2"
//           >
//             انصراف
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ModalComponent;
