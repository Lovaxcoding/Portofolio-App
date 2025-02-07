export default function Footer(){
    return (
      <footer className="w-full h-screen bg-black flex justify-center items-center">
        <div className="bg-black text-white pt-16">
          {/* Section principale */}
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Let’s make this official, sign up and access the vault
            </h1>
            <div className="flex justify-center items-center gap-2 mb-6">
              {/* Images des membres */}
              <div className="flex -space-x-2">
                <img
                  src="/path/to/image1.jpg"
                  alt="User 1"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <img
                  src="/path/to/image2.jpg"
                  alt="User 2"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <img
                  src="/path/to/image3.jpg"
                  alt="User 3"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
              </div>
              <p className="text-gray-400">295+ people already joined</p>
            </div>
            <button className="bg-white text-black py-2 px-6 rounded-full font-semibold hover:bg-gray-200">
              Become a member
            </button>
          </div>

          {/* Footer */}
          <div className="mt-16 border-t border-gray-700 pt-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto text-sm grid-flow-row-dense auto-cols-fr ">
              {/* Sitemap */}
              <div>
                <h3 className="font-bold uppercase mb-4">Sitemap</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:underline">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Portofolio
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              {/* Company */}
              <div>
                <h3 className="font-bold uppercase mb-4">Company</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:underline">
                      Licensing
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Terms & Conditions
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Cookie Policy
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h3 className="font-bold uppercase mb-4">Contact</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:underline">
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Support
                    </a>
                  </li>
                </ul>
              </div>

              {/* Newsletter */}
              <div>
                <h3 className="font-bold uppercase mb-4">Newsletter</h3>
                <p className="mb-4 text-gray-400">
                  You read this far, might as well sign up.
                </p>
                <form className="flex gap-2">
                  <input
                    type="text"
                    placeholder="First name"
                    className="bg-gray-800 text-white px-4 py-2 rounded-lg flex-1"
                  />
                  <input
                    type="email"
                    placeholder="john.doe@osmo.supply"
                    className="bg-gray-800 text-white px-4 py-2 rounded-lg flex-1"
                  />
                  <button className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200">
                    Sign up
                  </button>
                </form>
              </div>
            </div>

            {/* Footer bottom */}
            <div className="mt-16 text-center text-gray-600 text-xs">
              <p>©2025 OSMO. ALL RIGHTS RESERVED.</p>
              <p className="mt-2">Lovasoa Nantenaina</p>
            </div>
          </div>
        </div>
      </footer>
    );
}