// src/components/Navbar.tsx
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-blue-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-4xl font-bold">
        The Focus</h1>
        <div className="flex space-x-4">
          <Link href="/" className="text-white hover:underline">Home</Link>
          <Link href="/blog" className="text-white hover:underline">Blog</Link>
          <Link href="/about" className="text-white hover:underline">About Us</Link>
          <Link href="/contact" className="text-white hover:underline">Contact Us</Link>
        </div>
      </div>
    </nav>
  );
}
