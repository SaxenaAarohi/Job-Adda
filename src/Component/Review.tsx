"use client";
import prismaClient from "@/services/prisma";
import { useEffect, useState } from "react"
import { BiTrash } from "react-icons/bi";
 
type User = {
  id : string,
  email : string
}

type reviewtype = {
id : string,
content : string,
user : User 
}

export default function Review({ user, companyid } : {
  user  : string,
  companyid : string
}) {

  const [reviews, setReviews] = useState([]);
  const [review, setReview] = useState("");

 async function handlereview() {
    
  const data = {
   content : review,
   user_id : user,
   company : companyid
  };

  const res = await fetch("/api/review" , {
    method : "POST",
    body : JSON.stringify(data)
  });
  

  const ans = await res.json();

  if(ans.success){
    alert("Saved");
  }
  else{
    alert(ans.message )
  }

  }


  async function handledlt(id : string){
  
     const res = await fetch("/api/review/"+id ,{
      method : "DELETE"
     });

     const data = await res.json();
      alert(data.message)
     
  }


  useEffect(()=>{
    async function getreviews(){
      const res = await fetch("/api/review/"+ companyid);
      const data = await res.json();

      setReviews(data?.data);
    }
    getreviews();
  },[])
  

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-3">Reviews</h2>

      <ul className="space-y-3">
       
        {reviews?.map((r : reviewtype) => (
          <li
            key={r.id}
            className="bg-gray-800 p-4 flex justify-between rounded-lg border border-gray-700"
          >
            <p className="text-gray-200">{r.content}</p>
             { r.user.id == user ?      
              <button className="text-gray-400" title="Delete Review" onClick={()=>handledlt(r.id)}><BiTrash/></button>
            : <p></p>
            }
          </li>
        ))}

      </ul>

      <div className="max-w-3xl mx-auto mt-6 bg-gray-900 p-6 rounded-2xl shadow-lg">

        <textarea
          onChange={(e) => setReview(e.target.value)}
          value={review}
          placeholder="Write your review..."
          className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          rows={4}
        />

        <button
          className="mt-3 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all"
          onClick={handlereview}
        >
          Submit Review
        </button>

      </div>
    </div>
  );
}
