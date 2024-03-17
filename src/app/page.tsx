import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Home() {
  return (
    <main className="flex h-full flex-col justify-between font-mono">
      <div className="w-56 h-screen flex flex-col gap-4 bg-slate-100 pt-8 shadow-xl drop-shadow-xl">
        <h3 className="text-3xl font-bold text-center">Wenakkk</h3>
        <button className="rounded-3xl text-sm bg-green-700 hover:bg-green-800 text-white w-4/6 mx-auto py-2 drop-shadow-lg">
          Sign Up / Log In
        </button>
        <div className="flex flex-col justify-between h-full">
          <ul className="menu w-full rounded-box font-semibold px-2">
            <li><a>Smart Thermometer</a></li>
            <li><a>Meal Planning</a></li>
            <li>
              <details>
                <summary>Recipes</summary>
                <ul>
                  <li><a>Trending</a></li>
                  <li><a>Find your Taste</a></li>
                  <li><a>Explore the World</a></li>
                  <li><a>By Categories</a></li>
                </ul>
              </details>
            </li>
          </ul>
          <div className="flex flex-col bg-slate-300 drop-shadow-lg px-6 pb-4 pt-2 gap-4">
            <div className="flex flex-col text-sm text-slate-600 font-medium">
              <Link href={"/"}>About Us</Link>
              <Link href={"/"}>Privacy</Link>
            </div>
            <div className="flex gap-2 justify-between mx-6">
              <a href=""><FaGithub size={'1.5em'} /></a>
              <a href=""><FaFacebookF size={'1.5em'} /></a>
              <a href=""><FaInstagram size={'1.5em'} /></a>
              <a href=""><FaLinkedinIn size={'1.5em'} /></a>
            </div>
            <p className="text-xs">®/™©2024 Wenakkk by Hari Setiawan. All rights reserved.</p>
          </div>
        </div>
      </div>
      <div className="w-5/6">

      </div>
    </main>
  );
}
