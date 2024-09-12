import React from "react";
import Image from "next/image";
import image1 from '../Image/face1.jpg'
import image2 from '../Image/face2.jpg'
import image3 from '../Image/face3.jpg'
import image4 from '../Image/face4.jpg'
import image5 from '../Image/face5.jpg'

function Widget() {
  return (
    <div className="bg-white mt-10 shadow-lg rounded-xl">
        <h2 className="p-5 text-xl font-bold">Order Status</h2>
      <div className="min-w-full overflow-x-scroll text-center text-gray-400">
        <div className=" flex border-b border-gray-700">
          <div className="flex-1 px-4 py-6 font-bold">Client Name </div>
          <div className="flex-1 px-4 py-6 font-bold">Order No </div>
          <div className="flex-1 px-4 py-6 font-bold">Product Cost </div>
          <div className="flex-1 px-4 py-6 font-bold">Payment Status</div>
        </div>
        <div>
          <div className="flex border-b border-gray-700">
            <div className="flex-1 flex justify-center px-4 py-6"><Image className="w-8 mr-2 rounded-full" src={image1}/> Henry Klein</div>
            <div className="flex-1 px-4 py-6">02312</div>
            <div className="flex-1 px-4 py-6">$14,500 </div>
            <div className="flex-1 px-4 py-6">
                <span className="p-2 border text-green-500 rounded-sm border-green-500">Approved</span>
                </div>
          </div>
          <div className="flex border-b border-gray-700">
            <div className="flex-1 flex justify-center px-4 py-6"><Image className="w-8 mr-2 rounded-full" src={image2}/>Estella Bryan</div>
            <div className="flex-1 px-4 py-6">02312</div>
            <div className="flex-1 px-4 py-6">$14,500 </div>
            <div className="flex-1 px-4 py-6">
            <span className="p-2 border text-amber-500 rounded-sm border-amber-500">Pending</span>
            </div>
          </div>
          <div className="flex border-b border-gray-700">
            <div className="flex-1 flex justify-center px-4 py-6"><Image className="w-8 mr-2 rounded-full" src={image3}/>Lucy Abbott</div>
            <div className="flex-1 px-4 py-6">02312</div>
            <div className="flex-1 px-4 py-6">$14,500 </div>
            <div className="flex-1 px-4 py-6">
            <span className="p-2 border text-red-500 rounded-sm border-red-500">Rejected</span>
            </div>
          </div>
          <div className="flex border-b border-gray-700">
            <div className="flex-1 flex justify-center px-4 py-6"><Image className="w-8 mr-2 rounded-full" src={image4}/>Peter Gill</div>
            <div className="flex-1 px-4 py-6">02312</div>
            <div className="flex-1 px-4 py-6">$14,500 </div>
            <div className="flex-1 px-4 py-6">
            <span className="p-2 border text-green-500 rounded-sm border-green-500">Approved</span>
            </div>
          </div>
          <div className="flex">
            <div className="flex-1 flex justify-center px-4 py-6"><Image className="w-8 mr-2 rounded-full" src={image5}/>Sallie Reyes</div>
            <div className="flex-1 px-4 py-6">02312</div>
            <div className="flex-1 px-4 py-6">$14,500 </div>
            <div className="flex-1 px-4 py-6">
            <span className="p-2 border text-green-500 rounded-sm border-green-500">Approved</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Widget;
