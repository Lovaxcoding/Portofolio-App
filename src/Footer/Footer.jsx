export default function Footer(){
    return (
      <footer className=" h-auto w-full px-32 relative flex flex-wrape justify-center items-center flex-col">
        <div className=" text-white py-16 pb">
          {/* Section principale */}
          <div className="text-center text-wrap mx-auto">
            <h1 className="text-4xl text-wrap font-bold mb-12 sm:text-7xl ">
              Let’s make this <span className="text-red-600"> official</span>, sign up and access the vault
            </h1>
            <div className="flex justify-center items-center gap-2 mb-6">
              {/* Images des membres */}
              <div className="flex -space-x-2">
                <img
                  src="/assets/images/user1.jpeg"
                  alt="User 1"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <img
                  src="/assets/images/user2.jpeg"
                  alt="User 2"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <img
                  src="/assets/images/user3.jpeg"
                  alt="User 3"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
              </div>
              <p className="text-gray-400">295+ people already joined</p>
            </div>
            <button className="bg-white text-black py-2 px-6 rounded-full font-semibold hover:bg-red-400 hover:text-white">
              Book now
            </button>
          </div>

          {/* Footer */}
          <div className="mt-16 border-t border-gray-700 relative  pt-8">
            <div className="flex flex-row gap-20 w-full flex-wrap p-12">
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

              <div>
                <h3 className="font-bold uppercase mb-4">Newsletter</h3>
                <p className="mb-4 text-gray-400">
                  You read this far, might as well sign up.
                </p>
                <form className="flex gap-2 flex-wrap">
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
                  <button className="bg-white w-32 text-black px-4 py-2 rounded-lg hover:bg-gray-200">
                    Sign up
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="absolute -z-10 right-0 bottom-0 w-full">
          <img
            src="/assets/images/bg2.jpeg"
            alt=""
            className="w-full h-screen brightness-50 object-cover -z-10 opacity-20"
          />
        </div> */}
        <div className="mt-16 text-center bottom-0 text-gray-600 text-xs">
          <p>©2025 OSMO. ALL RIGHTS RESERVED.</p>
          <p className="mt-2">Lovasoa Nantenaina</p>
        </div>
      </footer>
    );
}