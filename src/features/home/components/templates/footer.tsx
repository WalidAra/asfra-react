import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";

import expresscard from "@/assets/images/element/expresscard.svg";
import mastercard from "@/assets/images/element/mastercard.svg";
import paypal from "@/assets/images/element/paypal.svg";
import visa from "@/assets/images/element/visa.svg";

export default function Footer() {
  return (
    <footer>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Contact Us Column */}
          <div>
            <h3 className="text-navy-800 font-semibold text-lg mb-6">
              Contact Us
            </h3>
            <div className="space-y-4">
              <p className="text-gray-600 font-medium">Customer Care</p>
              <p className="text-navy-800 font-semibold text-lg hover:text-blue-600 transition-colors">
                <Link to="tel:+971(4)3409933">+971(4)3409933</Link>
              </p>

              <div className="pt-2">
                <p className="text-gray-600 mb-1">Need live support?</p>
                <p className="text-blue-600 font-semibold hover:underline">
                  <Link to="mailto:info@asfartrip.com">info@asfartrip.com</Link>
                </p>
              </div>
            </div>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-navy-800 font-semibold text-lg mb-6">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="#"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h3 className="text-navy-800 font-semibold text-lg mb-6">
              Support
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="#"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Booking Policy
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  User Guide
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Products Column */}
          <div>
            <h3 className="text-navy-800 font-semibold text-lg mb-6">
              Products
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="#"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Flights
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Hotels
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Cars
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Insurance
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Holidays
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Yacht Rental
                </Link>
              </li>
            </ul>
          </div>

          {/* Partners Column */}
          <div>
            <h3 className="text-navy-800 font-semibold text-lg mb-6">
              Partners
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="#"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  API
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Become an affiliate
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex items-center justify-between w-full mb-4">
          <div>
            <h3 className="text-navy-800 font-semibold text-lg mb-3">
              Payment & Security
            </h3>
            <div className="flex space-x-4">
              <ul className="list-inline mb-0 mt-3">
                <li className="inline-block mr-2">
                  {" "}
                  <Link to="">
                    <img src={paypal} className="h-[30px] mr-1" alt="paypal" />
                  </Link>
                </li>
                <li className="inline-block mr-2">
                  {" "}
                  <Link to="">
                    <img src={visa} className="h-[30px] mr-1" alt="visa" />
                  </Link>
                </li>
                <li className="inline-block mr-2">
                  {" "}
                  <Link to="">
                    <img
                      src={mastercard}
                      className="h-[30px] mr-1"
                      alt="mastercard"
                    />
                  </Link>
                </li>
                <li className="inline-block mr-2">
                  {" "}
                  <Link to="">
                    <img
                      src={expresscard}
                      className="h-[30px] mr-1"
                      alt="expresscard"
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-navy-800 font-semibold text-lg mb-3">
              Follow us on
            </h3>
            <div className=" flex space-x-4">
              <a href="">
                <FaFacebook className="size-5" />
              </a>
              <a href="">
                <FaTwitter className="size-5" />
              </a>
              <a href="">
                <FaInstagram className="size-5" />
              </a>
              <a href="">
                <FaTiktok className="size-5" />
              </a>
            </div>
          </div>
        </div>
        <Separator />
        <div className=" mt-4 ">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground mb-6 md:mb-0">
              Copyright © 2025 asfartrip.com. All Rights Reserved.
            </p>

            <div className="flex gap-6 text-muted-foreground items-center">
              <a href="">Privacy policy </a>
              <a href="">Terms and conditions</a>
              <a href="">Refund policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
