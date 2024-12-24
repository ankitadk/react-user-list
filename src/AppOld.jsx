import Card from "./components/Card";

const items = [
  {
    name: "Paneer Butter Masala",
    img: "https://media.istockphoto.com/id/1665320059/photo/indian-paneer-butter-masala-directly-above-photo-on-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=SUResIg0QTtf-m2zfXj4ZMO9IJlXwYKX1JZEvr5yvP8=",
    desc: "A rich and creamy tomato-based curry with soft paneer cubes, flavored with Indian spices.",
    price: 250,
    type: "veg",
    ratings: 4.7,
  },
  {
    name: "Chicken Biryani",
    img: "https://plus.unsplash.com/premium_photo-1694141250007-fc4711bb9df1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Q2hpY2tlbiUyMEJpcnlhbml8ZW58MHwwfDB8fHww",
    desc: "Aromatic basmati rice cooked with tender chicken, saffron, and a blend of spices.",
    price: 300,
    type: "Non-Vegetarian",
    ratings: 4.8,
  },
  {
    name: "Masala Dosa",
    img: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TWFzYWxhJTIwRG9zYXxlbnwwfDB8MHx8fDA%3D",
    desc: "A crispy fermented rice crepe stuffed with spiced potato filling, served with chutney and sambar.",
    price: 120,
    type: "veg",
    ratings: 4.5,
  },
  {
    name: "Butter Chicken",
    img: "https://media.istockphoto.com/id/639389404/photo/authentic-indian-food.webp?a=1&b=1&s=612x612&w=0&k=20&c=BIz-9inz1CdT5LkBOStg1LImZxPSAg5PyhCgFa4VqVc=",
    desc: "A rich and creamy chicken curry made with butter, tomatoes, and a mix of Indian spices.",
    price: 320,
    type: "Non-Vegetarian",
    ratings: 4.9,
  },
];

function App() {
  return (
    <>
      {/* <h1 className="text-center font-black mt-20 text-4xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </h1> */}
      <div className="flex gap-4 justify-center mt-12">
        {items.map((item, key) => (
          <Card
            key={item.name + key}
            img={item.img}
            title={item.name}
            desc={item.desc}
            type={item.type}
            ratings={item.ratings}
          />
        ))}
      </div>
    </>
  );
}

export default App;
