import { Star } from 'lucide-react'
 

function Testimonals() {
  return (
    <div>
      <section className="py-4 mb-8 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="bg-white shadow-md rounded-lg p-6 relative">
              <p className="text-gray-600 mb-4">
                Leveraging the right tech solutions is crucial for startups
                aiming to scale efficiently and maintain. Leveraging the right
                tech solutions is crucial
              </p>
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    fill="currentColor"
                    stroke="none"
                    className="w-5 h-5 text-yellow-400"
                  />
                ))}
              </div>
              <div className="flex items-center gap-3">
                <img
                  src="/customer1.png"
                  alt="Customer Avatar"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-800">Customer Name</p>
                  <p className="text-sm text-gray-500">Our Customer</p>
                </div>
              </div>
              <img
                src="/quote_icon.png"
                alt="Quote Icon"
                className="w-5 h-5 absolute bottom-4 right-4"
              />
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow-md rounded-lg p-6 relative">
              <p className="text-gray-600 mb-4">
                Leveraging the right tech solutions is crucial for startups
                aiming to scale efficiently and maintain. Leveraging the right
                tech solutions is crucial
              </p>
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    fill="currentColor"
                    stroke="none"
                    className="w-5 h-5 text-yellow-400"
                  />
                ))}
              </div>
              <div className="flex items-center gap-3">
                <img
                  src="/customer2.png"
                  alt="Customer Avatar"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-800">Customer Name</p>
                  <p className="text-sm text-gray-500">Our Customer</p>
                </div>
              </div>
              <img
                src="/quote_icon.png"
                alt="Quote Icon"
                className="w-5 h-5 absolute bottom-4 right-4"
              />
            </div>

            {/* Card 3 */}
            <div className="bg-white shadow-md rounded-lg p-6 relative">
              <p className="text-gray-600 mb-4">
                Leveraging the right tech solutions is crucial for startups
                aiming to scale efficiently and maintain. Leveraging the right
                tech solutions is crucial
              </p>
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    fill="currentColor"
                    stroke="none"
                    className="w-5 h-5 text-yellow-400"
                  />
                ))}
              </div>
              <div className="flex items-center gap-3">
                <img
                  src="/customer3.png"
                  alt="Customer Avatar"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-800">Customer Name</p>
                  <p className="text-sm text-gray-500">Our Customer</p>
                </div>
              </div>
              <img
                src="/quote_icon.png"
                alt="Quote Icon"
                className="w-5 h-5 absolute bottom-4 right-4"
              />
            </div>

            {/* Card 4 */}
            <div className="bg-white shadow-md rounded-lg p-6 relative">
              <p className="text-gray-600 mb-4">
                Leveraging the right tech solutions is crucial for startups
                aiming to scale efficiently and maintain. Leveraging the right
                tech solutions is crucial
              </p>
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    fill="currentColor"
                    stroke="none"
                    className="w-5 h-5 text-yellow-400"
                  />
                ))}
              </div>
              <div className="flex items-center gap-3">
                <img
                  src="/customer4.png"
                  alt="Customer Avatar"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-800">Customer Name</p>
                  <p className="text-sm text-gray-500">Our Customer</p>
                </div>
              </div>
              <img
                src="/quote_icon.png"
                alt="Quote Icon"
                className="w-5 h-5 absolute bottom-4 right-4"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Testimonals
