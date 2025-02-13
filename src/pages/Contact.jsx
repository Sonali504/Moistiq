const Contact = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-pink-400 to-purple-600 p-6">
      <div className="bg-white shadow-lg rounded-xl p-8 max-w-4xl w-full flex flex-col md:flex-row gap-8">
        
        {/* Contact Form Section */}
        <div className="w-full md:w-1/2">
          <h1 className="text-2xl font-bold text-gray-800">Contact Us</h1>
          <form className="mt-6 space-y-4">
            <div>
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email address"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
            <div>
              <textarea
                rows="4"
                placeholder="Message"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              ></textarea>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="copy" className="mr-2" />
              <label htmlFor="copy" className="text-gray-600">
                Send me a copy of this message
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-bold py-3 rounded-md hover:bg-blue-700 transition"
            >
              SEND
            </button>
          </form>
        </div>

        {/* Contact Information Section */}
        <div className="w-full md:w-1/2 space-y-6">
          <div className="flex items-center space-x-4 bg-gray-100 p-4 rounded-lg">
            <span className="bg-blue-100 p-2 rounded-full text-blue-600">
              📞
            </span>
            <div>
              <h3 className="font-semibold text-gray-700">Technical Support</h3>
              <p className="text-gray-600 text-sm">support@example.com</p>
              <p className="text-gray-600 text-sm">+1 234-567-89</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 bg-gray-100 p-4 rounded-lg">
            <span className="bg-blue-100 p-2 rounded-full text-blue-600">
              💼
            </span>
            <div>
              <h3 className="font-semibold text-gray-700">Sales Questions</h3>
              <p className="text-gray-600 text-sm">sales@example.com</p>
              <p className="text-gray-600 text-sm">+1 234-567-89</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 bg-gray-100 p-4 rounded-lg">
            <span className="bg-blue-100 p-2 rounded-full text-blue-600">
              📰
            </span>
            <div>
              <h3 className="font-semibold text-gray-700">Press</h3>
              <p className="text-gray-600 text-sm">press@example.com</p>
              <p className="text-gray-600 text-sm">+1 234-567-89</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 bg-gray-100 p-4 rounded-lg">
            <span className="bg-blue-100 p-2 rounded-full text-blue-600">
              🐞
            </span>
            <div>
              <h3 className="font-semibold text-gray-700">Bug Report</h3>
              <p className="text-gray-600 text-sm">bugs@example.com</p>
              <p className="text-gray-600 text-sm">+1 234-567-89</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
