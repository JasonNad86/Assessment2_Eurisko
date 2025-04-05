import { useState } from 'react';
import Navbar from './components/NavBar';
import UserCard from './components/UserCard';
import './App.css'

const sampleUsers = [
  { firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com', status: 'Active', dob: '1990-05-15' },
  { firstName: 'Jane', lastName: 'Smith', email: 'jane.smith@example.com', status: 'Locked', dob: '1988-10-22' },
  { firstName: 'Alice', lastName: 'Brown', email: 'alice.brown@example.com', status: 'Active', dob: '1995-04-11' },
  { firstName: 'Robert', lastName: 'Johnson', email: 'robert.johnson@example.com', status: 'Active', dob: '1985-12-30' },
  { firstName: 'Emily', lastName: 'Davis', email: 'emily.davis@example.com', status: 'Locked', dob: '1993-08-20' },
  { firstName: 'Michael', lastName: 'Miller', email: 'michael.miller@example.com', status: 'Active', dob: '1991-03-02' },
  { firstName: 'Sarah', lastName: 'Wilson', email: 'sarah.wilson@example.com', status: 'Active', dob: '1996-07-09' },
  { firstName: 'David', lastName: 'Anderson', email: 'david.anderson@example.com', status: 'Locked', dob: '1989-11-05' },
];

function App() {
  const [query, setQuery] = useState('');

  const filteredUsers = sampleUsers.filter((user) =>
    `${user.firstName} ${user.lastName}`.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="p-4 max-w-7xl mx-auto">
        <input
          type="text"
          placeholder="Search users..."
          className="w-full p-2 mb-4 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredUsers.map((user, idx) => (
            <UserCard key={idx} user={user} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
