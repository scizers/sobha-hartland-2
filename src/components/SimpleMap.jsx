"use client";

const SimpleMap = () => {
  const latitude = 25.023083;
  const longitude = 55.296111;

  return (
    <div className="w-full h-[450px] rounded-lg overflow-hidden shadow-lg">
      <iframe
        src={`https://www.google.com/maps?q=${latitude},${longitude}&z=14&output=embed`}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default SimpleMap;
