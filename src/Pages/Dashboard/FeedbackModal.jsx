import  { useState } from 'react';

const FeedbackModal = ({ classId, instructorName, instructorEmail, onSubmit, onClose }) => {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(feedback);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-bold mb-4">Send Feedback</h2>
        <p className="mb-4">Class ID: {classId}</p>
        <p className="mb-4">Instructor: {instructorName}</p>
        <p className="mb-4">Instructor Email: {instructorEmail}</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="feedback" className="mb-2 text-center">
            Feedback:
          </label>
          <textarea
            id="feedback"
            className="w-full h-24 border border-gray-300 rounded p-2 mb-4"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            required
          ></textarea>
          <div className="flex justify-end">
            <button
              type="button"
              className="mr-2 bg-gray-300 hover:bg-gray-400 text-gray-800 px-3 py-1 rounded"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FeedbackModal;
