const ParalaxEffect = ({ image, heightClass = "h-[550px]" }) => {
  return (
    <section
      style={{
        position: "relative",
        backgroundImage: `url(${image})`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className={`relative w-full flex items-center justify-center ${heightClass}`}
    ></section>
  );
};

export default ParalaxEffect;
