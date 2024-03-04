import React from 'react';
import { Link } from 'react-router-dom';

const reviews = [
  {
    id: 1,
    author: "Joe",
    title: "Great Experience",
    content: "The service was fantastic. Our waiter was attentive and the food was delicious. Highly recommend!",
    rating: 5,
  },
  {
    id: 2,
    author: "Virat",
    title: "Good",
    content: "The food was decent, but the service was slow. Might give it another try.",
    rating: 3,
  },
];
const Review = ({ review }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl my-5">
      <div className="md:flex">
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Review by {review.author}</div>
          <a href="review" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{review.title}</a>
          <p className="mt-2 text-gray-500">{review.content}</p>
          <div className="mt-4">
            <span className="text-yellow-400">★</span> {review.rating}/5
          </div>
        </div>
      </div>
    </div>
  );
};

const ReviewsPage = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">Customer Reviews</h2>
        {reviews.map((review) => (
          <Review key={review.id} review={review} />
        ))}
        <div className="flex justify-center mb-4">
        <button className='flex justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>
          <Link to={`/`} className="flex items-center justify-center">
            Home
          </Link>
        </button>
      </div>
      </div>
    </div>
  );
};

export default ReviewsPage;
