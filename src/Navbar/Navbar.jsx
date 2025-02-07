import React from "react";
import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function Navbar() {
  const navigation = [
    { name: "Home", path: "/" },
    { name: "Portfolio", path: "/Portfolio" },
    { name: "Services", path: "/Services" },
    { name: "Contact", path: "/Contact" },
  ];

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        aria-label="Global"
        className="flex items-center justify-between p-6 lg:px-8"
      >
        {/* Logo */}
        <div className="flex relative lg:flex-1">
          <NavLink
            to="/"
            className="-m-1.5 flex-row flex p-1.5 justify-center items-center"
          >
            <span className="sr-only">Tsarasoa Production</span>
            <img
              alt="Logo"
              src="/assets/images/LogoTSP.png"
              className="h-20 pt-4 w-auto"
            />
            <h5 className="text-white">Tsarasoa Production</h5>
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `text-sm font-semibold ${
                  isActive ? "text-red-600" : "text-gray-100"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Log in button */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <NavLink to="/login" className="text-sm font-semibold text-gray-100">
            Log in <span aria-hidden="true">&rarr;</span>
          </NavLink>
        </div>
      </nav>

      {/* Mobile Menu */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <NavLink
              to="/"
              className="-m-1.5 flex-row flex p-1.5 justify-center items-center"
            >
              <span className="sr-only">Tsarasoa Production</span>
              <img
                alt="Logo"
                src="/assets/images/LogoTSP.png"
                className="h-20 pt-4 w-auto"
              />
              <h5 className="text-white">Tsarasoa Production</h5>
            </NavLink>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-100/10">
              {/* Les liens du navigateur */}
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    className={({ isActive }) =>
                      `-mx-3 block rounded-lg px-3 py-2 text-base font-semibold ${
                        isActive
                          ? "text-red-600 bg-gray-700"
                          : "text-gray-100 hover:bg-gray-50"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
              <div className="py-6">
                <NavLink
                  to="/login"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </NavLink>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
