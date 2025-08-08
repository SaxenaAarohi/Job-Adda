//@ts-nocheck
export default function Savebtn({ jobid , saved }) {

  async function handlesave() {
    try {
      const res = await fetch(`http://localhost:3000/api/jobs/${jobid}/save`);
      const data = await res.json();

      if (data.success) {
        alert("Saved");
      }
      else {
        alert(data.message);
      }

    }
    catch(err){
      console.log(err.messgae);
    }

}

  return (
    <button
      onClick={() => handlesave()}
      className="inline-block mt-4 bg-blue-600 text-center text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-700 transition"
    >
      {
        saved ? "Saved" : "Save job"
      }
    
    </button>
  )
}