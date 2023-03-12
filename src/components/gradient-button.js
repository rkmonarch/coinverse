import Link from "next/link";

const GradientButton = ({title, link}) => {
  return (
    <div>
      <Link
        href={link}
        className="px-10 py-3 border-0 border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-[#00bdff] via-[#008dff] to-[#a13bf7] hover:drop-shadow-[0_3px_5px_#7d7d7d] md:py-4 md:text-lg"
      >
        {title}
      </Link>
    </div>
  );
};

export default GradientButton;
