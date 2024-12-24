import User from "./components/User";

const users = [
  {
    name: "Aarav Sharma",
    image:
      "https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWVufGVufDB8MHwwfHx8MA%3D%3D",
    profession: "Software Engineer",
  },
  {
    name: "Isha Verma",
    image:
      "https://plus.unsplash.com/premium_photo-1708271595672-57b4a6a2d3cd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdvbWFufGVufDB8MHwwfHx8MA%3D%3D",
    profession: "Doctor",
  },
  {
    name: "Rohan Gupta",
    image:
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1lbnxlbnwwfDB8MHx8fDA%3D",
    profession: "Architect",
  },
  {
    name: "Meera Desai",
    image:
      "https://images.unsplash.com/photo-1665686304312-16e3a16be0ed?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdvbWFufGVufDB8MHwwfHx8MA%3D%3D",
    profession: "Teacher",
  },
  {
    name: "Aditya Kapoor",
    image:
      "https://images.unsplash.com/photo-1512663150964-d8f43c899f76?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1lbnxlbnwwfDB8MHx8fDA%3D",
    profession: "Lawyer",
  },
  {
    name: "Priya Iyer",
    image:
      "https://plus.unsplash.com/premium_photo-1705018501151-4045c97658a3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d29tYW58ZW58MHwwfDB8fHww",
    profession: "Artist",
  },
  {
    name: "Karan Malhotra",
    image:
      "https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1lbnxlbnwwfDB8MHx8fDA%3D",
    profession: "Entrepreneur",
  },
  {
    name: "Ananya Roy",
    image:
      "https://plus.unsplash.com/premium_photo-1694557636097-5969bae91ba8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29tYW58ZW58MHwwfDB8fHww",
    profession: "Scientist",
  },
  {
    name: "Arjun Singh",
    image:
      "https://media.istockphoto.com/id/927561308/photo/young-man-wearing-winter-clothes-in-the-street.webp?a=1&b=1&s=612x612&w=0&k=20&c=eTPPBjYQWG8-UQtgaVdJN7kiya3dpbBsqnA2xfrP3I8=",
    profession: "Civil Engineer",
  },
  {
    name: "Sanya Mehta",
    image:
      "https://media.istockphoto.com/id/1952108243/photo/photo-of-young-women-in-winter-wear-standing-on-yellow-background-stock-photo.webp?a=1&b=1&s=612x612&w=0&k=20&c=gGmDGm4JBxWo1M1UAkvjjsvQxj7XckqmIpBb3SWROk0=",
    profession: "Journalist",
  },
];

function App() {
  return (
    <>
      <h1 className="text-center m-5 text-3xl font-black">User List</h1>
      {users.map((user, key) => (
        <User
          key={user.name + key}
          name={user.name}
          desc={user.profession}
          img={user.image}
        />
      ))}
    </>
  );
}

export default App;
