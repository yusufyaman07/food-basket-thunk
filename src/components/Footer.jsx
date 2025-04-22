const Footer = () => {
  return (
    <footer className="bg-gray-100 shadow-md mt-20">
      <div className="container mx-auto py-8 px-4 flex flex-col items-center text-gray-600 text-sm space-y-3">
        <p className="text-center text-base font-medium">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
        <div className="flex gap-6 text-sm">
          <span className="hover:text-black transition">Privacy</span>
          <span className="hover:text-black transition">Terms</span>
          <span className="hover:text-black transition">Contact</span>
        </div>
        <p className="text-xs text-gray-400">Created by Yusuf YAMAN</p>
      </div>
    </footer>
  );
};

export default Footer;
