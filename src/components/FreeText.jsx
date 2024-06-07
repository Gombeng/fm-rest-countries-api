/* eslint-disable react/prop-types */
export default function FreeText({ children, className }) {
  return (
    <h1 className={`text-xl text-center my-20 ${className}`}>{children}</h1>
  );
}

function Heading({ children, className }) {
  return <h1 className={`font-bold text-lg mb-2 ${className}`}>{children}</h1>;
}

function Paragraph({ name, value }) {
  return (
    <p className="mb-1.5">
      <span className="">{name}:</span>
      <span className="text-dark-gray"> {value}</span>
    </p>
  );
}

export { Heading, Paragraph };
