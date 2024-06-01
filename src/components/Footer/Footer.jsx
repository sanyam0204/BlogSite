import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";

function Footer() {
  return (
    <section className="relative overflow-hidden bottom-0 py-4 bg-[#1D1D1D] border border-t-2 border-t-[#2272FF] border-b-0 border-l-0 border-r-0">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="-m-6 flex flex-wrap">
          <div className="w-full p-6 md:w-1/2 lg:w-5/12">
            <div className="flex h-full flex-col justify-between">
              <div className="mb-4 inline-flex items-center">
                <Logo width="120px" />
              </div>
              <div>
                <p className="text-sm text-gray-600">
                  &copy; Copyright 2024. All Rights Reserved by SanyamJain.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-5  text-xs font-semibold uppercase text-[#2272FF]">
                Company
              </h3>
              <ul>
                <li className="mb-2">
                  <Link
                    className=" text-base font-medium text-gray-500 hover:text-gray-300"
                    to="/"
                  >
                    Features
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    className=" text-base font-medium text-gray-500 hover:text-gray-300"
                    to="/"
                  >
                    Pricing
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    className=" text-base font-medium text-gray-500 hover:text-gray-300"
                    to="/"
                  >
                    Affiliate Program
                  </Link>
                </li>
                <li>
                  <Link
                    className=" text-base font-medium text-gray-500 hover:text-gray-300"
                    to="/"
                  >
                    Press Kit
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-5  text-xs font-semibold uppercase text-[#2272FF]">
                Support
              </h3>
              <ul>
                <li className="mb-2">
                  <Link
                    className=" text-base font-medium text-gray-500 hover:text-gray-300"
                    to="/"
                  >
                    Account
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    className=" text-base font-medium text-gray-500 hover:text-gray-300"
                    to="/"
                  >
                    Help
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    className=" text-base font-medium text-gray-500 hover:text-gray-300"
                    to="/"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    className=" text-base font-medium text-gray-500 hover:text-gray-300"
                    to="/"
                  >
                    Customer Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-3/12">
            <div className="h-full">
              <h3 className="tracking-px mb-5  text-xs font-semibold uppercase text-[#2272FF]">
                Legals
              </h3>
              <ul>
                <li className="mb-2">
                  <Link
                    className=" text-base font-medium text-gray-500 hover:text-gray-300"
                    to="/"
                  >
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    className=" text-base font-medium text-gray-500 hover:text-gray-300"
                    to="/"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    className=" text-base font-medium text-gray-500 hover:text-gray-300"
                    to="/"
                  >
                    Licensing
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
