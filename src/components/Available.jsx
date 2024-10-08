import PropertyItem from "./PropertyItem";

export default function Available() {
  const propertyItemList = [
    {
      id: 1,
      imgSrc:
        "https://images.unsplash.com/photo-1601760562234-9814eea6663a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmVhbGVzdGF0ZXxlbnwwfHwwfHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60",
      propertyName: "Modern Design villa",
      price: "$3000.00",
      numberOfBedroom: "3",
      numberOfBathroom: "2",
    },
    {
      id: 2,
      imgSrc:
        "https://images.unsplash.com/photo-1601760562234-9814eea6663a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmVhbGVzdGF0ZXxlbnwwfHwwfHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60",
      propertyName: "Shabab villa",
      price: "$5000.00",
      numberOfBedroom: "5",
      numberOfBathroom: "4",
    },
    {
      id: 3,
      imgSrc:
        "https://images.unsplash.com/photo-1601760562234-9814eea6663a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmVhbGVzdGF0ZXxlbnwwfHwwfHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60",
      propertyName: "Design villa",
      price: "$2400.00",
      numberOfBedroom: "2",
      numberOfBathroom: "6",
    },
    {
      id: 4,
      imgSrc:
        "https://images.unsplash.com/photo-1601760562234-9814eea6663a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmVhbGVzdGF0ZXxlbnwwfHwwfHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60",
      propertyName: "Number 1 villa",
      price: "$3100.00",
      numberOfBedroom: "2",
      numberOfBathroom: "1",
    },
    {
      id: 5,
      imgSrc:
        "https://images.unsplash.com/photo-1601760562234-9814eea6663a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmVhbGVzdGF0ZXxlbnwwfHwwfHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60",
      propertyName: "Rohim villa",
      price: "$8000.00",
      numberOfBedroom: "7",
      numberOfBathroom: "3",
    },
  ];
  return (
    <section>
      <div className="container">
        <div className="mx-auto mb-12 max-w-[485px] text-center lg:mb-[70px]">
          <span className="mb-2 block text-lg font-semibold text-primary">
            Properties
          </span>
          <h2 className="mb-3 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]">
            Grab your Dream Property
          </h2>
          <p className="text-base text-body-color dark:text-dark-6">
            There are many variations of passages of Lorem Ipsum available but
            the majority have suffered alteration in some form.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {propertyItemList.map((property) => (
            <PropertyItem
              key={property.id}
              imgSrc={property.imgSrc}
              propertyName={property.propertyName}
              price={property.price}
              numberOfBedroom={property.numberOfBedroom}
              numberOfBathroom={property.numberOfBathroom}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
