import { useState } from 'react';
import { Heart } from 'lucide-react';

const Index = () => {
  const [likes, setLikes] = useState(0);

  return (
    <div className="min-h-screen bg-gray-700 p-8">
      <div className="max-w-2xl mx-auto bg-gray-800 rounded-xl shadow-md overflow-hidden">
        <div className="p-8">
          <h1 className="text-4xl font-bold mb-4 text-center text-gray-100">All About Cats</h1>
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg" 
            alt="A cute cat" 
            className="mx-auto object-cover w-full h-64 mb-6 rounded-lg"
          />
          <p className="text-gray-300 mb-4">
            Cats are fascinating creatures known for their independence, agility, and affectionate nature. 
            They have been domesticated for thousands of years and are one of the most popular pets worldwide.
          </p>
          <h2 className="text-2xl font-semibold mb-2 text-gray-200">Quick Cat Facts:</h2>
          <ul className="list-disc list-inside text-gray-300 mb-6">
            <li>Cats sleep for about 70% of their lives</li>
            <li>A group of cats is called a "clowder"</li>
            <li>Cats have over 20 vocalizations, including the famous meow</li>
            <li>They have excellent night vision</li>
          </ul>
          <div className="flex items-center justify-center">
            <button 
              onClick={() => setLikes(likes + 1)} 
              className="flex items-center bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600 transition-colors"
            >
              <Heart className="mr-2" /> Like Cats: {likes}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
