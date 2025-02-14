import PropTypes from "prop-types";

export default function CourseCard({ icon, title, description, price }) {
  return (
    <div className="bg-white size-full p-6 rounded-lg shadow-md flex flex-col">
      {/* Left: Icon */}
      <img src={icon} alt={title} className="w-16 h-16 mb-4" /> {/* Icon on the left */}

      {/* Left: Text Content */}
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-600 text-base">{description}</p>
        <p className="text-base font-semibold">Price: ${price}</p>
      </div>
    </div>
  );
}

// ✅ Add PropTypes to validate props
CourseCard.propTypes = {
  icon: PropTypes.string.isRequired, 
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};


