import Navbar from "./components/NavBar";
import UserCard from "./components/UserCard";

const sampleUsers = [
  {
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    status: "Active",
    dob: "1990-05-15",
  },
  {
    firstName: "Jane",
    lastName: "Smith",
    email: "jane.smith@example.com",
    status: "Locked",
    dob: "1988-10-22",
  },
  {
    firstName: "Alice",
    lastName: "Johnson",
    email: "alice.johnson@example.com",
    status: "Active",
    dob: "1995-02-10",
  },
  {
    firstName: "Bob",
    lastName: "",
    email: "bob.martin@example.com",
    status: "Locked",
    dob: "1980-08-05",
  },
  {
    firstName: "Charlie",
    lastName: "Brown",
    email: "charlie.brown@example.com",
    status: "Active",
    dob: "1992-11-30",
  },
  {
    firstName: "David",
    lastName: "Lee",
    email: "david.lee@example.com",
    status: "Locked",
    dob: "1987-07-14",
  },
  {
    firstName: "Eve",
    lastName: "",
    email: "eve.green@example.com",
    status: "Active",
    dob: "1993-09-21",
  },
  {
    firstName: "Grace",
    lastName: "Black",
    email: "grace.black@example.com",
    status: "Locked",
    dob: "1985-03-17",
  },
  {
    firstName: "Hannah",
    lastName: "",
    email: "hannah.purple@example.com",
    status: "Active",
    dob: "1996-12-03",
  },
];

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="p-4 mx-auto">
        <input
          type="text"
          placeholder="Search users..."
          className="w-[250px] p-2 mb-4 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          {sampleUsers.map((user, idx) => (
            <UserCard key={idx} user={user} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
