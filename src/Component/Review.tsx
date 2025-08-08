// @ts-nocheck
"use client";
import { useEffect, useState } from "react";

export default function Review({ user, company }) {
  const [review, setReview] = useState("");
  const [reviews, setReviews] = useState([]);

  async function getReviews() {
    try {
      const res = await fetch(`/api/review?companyId=${company.id}`);
      const data = await res.json();
      setReviews(data?.data || []);
    } 
    catch (err) {
      console.error("Error fetching reviews:", err);
    }
  }

  useEffect(() => {
    getReviews();
  }, []);

  async function handlereview() {
    if (!review.trim()) {
      alert("Please write something before submitting.");
      return;
    }
    if (!user?.id) {
      alert("You must be logged in to submit a review.");
      return;
    }

    const newreview = {
      content: review,       
      company: company.id,   
      user_id: user  
    };

    try {
      const res = await fetch("/api/review", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newreview)
      });

      const data = await res.json();

      if (data.success) {
        alert("Review added");
        setReview("");
        getReviews();
      } 
      else {
        alert(`Something went wrong: ${data.message || "Unknown error"}`);
      }
    } catch (err) {
      console.error("Error submitting review:", err);
    }
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-3">Review</h2>

      <ul className="space-y-3">

        {reviews?.map((r) => (
          <li
            key={r.id}
            className="bg-gray-800 p-4 rounded-lg border border-gray-700"
          >
            <p className="text-gray-400">{r.content}</p>
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
