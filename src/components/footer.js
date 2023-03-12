const Footer = () => {
  return (
    <footer className=" w-full p-4 bg-[#161527] font-medium">
      <div className="mx-auto max-w-[1080px]">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            {/* TODO: Add the logo here. */}
            <span className="text-md text-[#E4E4ED] hover:text-[#a1a1a1] sm:text-center">
              <a href="">
                Coinvise
              </a>
            </span>
            <a
              href="https://github.com/senali_d/"
              target="_blank"
              className="text-[#E4E4ED] hover:text-[#a1a1a1]"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
          <span className="text-md text-[#E4E4ED] hover:text-[#a1a1a1] sm:text-center">
            © {new Date().getFullYear()}{" "}
            <a href="" className="hover:underline">
              Coinvise
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
