import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Users from '../users.jsx';

// Mock your data for testing
jest.mock('../Data.json', () => [
  {
    ID: 1,
    Name: "John Smith",
    Email: "john.smith@example.com",
    Role: "Admin",
    Date_Created: "2023-11-01",
    Status: "Active",
    Handles: ["User Management", "Role Management", "Settings"]
  },
  {
    ID: 2,
    Name: "Alice Johnson",
    Email: "alice.johnson@example.com",
    Role: "User",
    Date_Created: "2023-11-02",
    Status: "Offline",
    Handles: ["View Dashboard", "Edit Profile", "Upload Files"]
},
{
    ID: 3,
    Name: "Michael Davis",
    Email: "michael.davis@example.com",
    Role: "Manager",
    Date_Created: "2023-11-03",
    Status: "Active",
    Handles: ["Manage Budget", "Create Project", "View Team Performance"]
},
{
    ID: 4,
    Name: "Sarah Wilson",
    Email: "sarah.wilson@example.com",
    Role: "Director",
    Date_Created: "2023-11-04",
    Status: "Offline",
    Handles: ["Board Meetings", "Policy Decision", "Strategic Planning"]
},
{
    ID: 5,
    Name: "James Brown",
    Email: "james.brown@example.com",
    Role: "Admin",
    Date_Created: "2023-11-05",
    Status: "Active",
    Handles: ["User Management", "Role Management", "Settings"]
},
{
    ID: 6,
    Name: "Olivia Johnson",
    Email: "olivia.johnson@example.com",
    Role: "User",
    Date_Created: "2023-11-06",
    Status: "Offline",
    Handles: ["View Dashboard", "Edit Profile", "Upload Files"]
},
{
    ID: 7,
    Name: "Matthew Clark",
    Email: "matthew.clark@example.com",
    Role: "Influencer",
    Date_Created: "2023-11-01",
    Status: "Active",
    Handles: ["Create Content", "Attend Events", "View Analytics"]
},
{
    ID: 8,
    Name: "Emily White",
    Email: "emily.white@example.com",
    Role: "User",
    Date_Created: "2023-11-02",
    Status: "Offline",
    Handles: ["View Dashboard", "Edit Profile", "Upload Files"]
},
{
    ID: 9,
    Name: "Daniel Lee",
    Email: "daniel.lee@example.com",
    Role: "Admin",
    Date_Created: "2023-11-03",
    Status: "Active",
    Handles: ["User Management", "Role Management", "Settings"]
},
{
    ID: 10,
    Name: "Jennifer Anderson",
    Email: "jennifer.anderson@example.com",
    Role: "User",
    Date_Created: "2023-11-04",
    Status: "Offline",
    Handles: ["View Dashboard", "Edit Profile", "Upload Files"]
},
{
    ID: 11,
    Name: "Robert Taylor",
    Email: "robert.taylor@example.com",
    Role: "Developer",
    Date_Created: "2023-11-05",
    Status: "Active",
    Handles: ["Coding", "Bug Fixing", "Code Review"]
},
{
    ID: 12,
    Name: "Linda Hall",
    Email: "linda.hall@example.com",
    Role: "Designer",
    Date_Created: "2023-11-06",
    Status: "Offline",
    Handles: ["Graphic Design", "Prototyping", "User Interface Design"]
},
{
    ID: 13,
    Name: "William Martinez",
    Email: "william.martinez@example.com",
    Role: "Admin",
    Date_Created: "2023-11-01",
    Status: "Active",
    Handles: ["User Management", "Role Management", "Settings"]
},
{
    ID: 14,
    Name: "Patricia Adams",
    Email: "patricia.adams@example.com",
    Role: "User",
    Date_Created: "2023-11-02",
    Status: "Offline",
    Handles: ["View Dashboard", "Edit Profile", "Upload Files"]
},
{
    ID: 15,
    Name: "Charles Harris",
    Email: "charles.harris@example.com",
    Role: "Tester",
    Date_Created: "2023-11-03",
    Status: "Active",
    Handles: ["Test Planning", "Test Execution", "Defect Reporting"]
},
{
    ID: 16,
    Name: "Elizabeth Turner",
    Email: "elizabeth.turner@example.com",
    Role: "Consultant",
    Date_Created: "2023-11-04",
    Status: "Offline",
    Handles: ["Client Meetingst", "Recommendations", "Project Evaluation"]
},
{
    ID: 17,
    Name: "Thomas Jackson",
    Email: "thomas.jackson@example.com",
    Role: "Admin",
    Date_Created: "2023-11-05",
    Status: "Active",
    Handles: ["User Management", "Role Management", "Settings"]
},
{
    ID: 18,
    Name: "Mary Miller",
    Email: "mary.miller@example.com",
    Role: "User",
    Date_Created: "2023-11-06",
    Status: "Offline",
    Handles: ["View Dashboard", "Edit Profile", "Upload Files"]
},
{
    ID: 19,
    Name: "Christopher Wilson",
    Email: "christopher.wilson@example.com",
    Role: "Team Lead",
    Date_Created: "2023-11-01",
    Status: "Active",
    Handles: ["Team Coordination", "Performance Reviews", "Mentoring"]
},
{
    ID: 20,
    Name: "Jessica Smith",
    Email: "jessica.smith@example.com",
    Role: "Manager",
    Date_Created: "2023-11-02",
    Status: "Offline",
    Handles: ["Manage Budget", "Create Project", "View Team Performance"]
}
]);

describe('Users Component', () => {
    let component;
  
    beforeEach(() => {
      component = render(<Users />);
    });
  
  
    it('should search for users based on input', () => {
      const event = { target: { value: 'John' } };
      component.search(event);
  
      // Assuming Data is imported globally or available in the scope
      expect(component.users.length).toBe(1);
      expect(component.users[0].Name).toBe('John Smith');
    });
  
    it('should sort users by ID in ascending order', () => {
      component.sortById();
  
      // Assuming Data is imported globally or available in the scope
      expect(component.users[0].ID).toBe(1);
      expect(component.users[component.users.length - 1].ID).toBe(20);
    });
  
    it('should sort users by Name in descending order', () => {
      component.sortByName();
  
      // Assuming Data is imported globally or available in the scope
      expect(component.users[0].Name).toBe('William Martinez');
      expect(component.users[component.users.length - 1].Name).toBe('Alice Johnson');
    });
  
    // Add more test cases for other sorting functions if needed
  
    // You can add more test cases for other functionalities as needed
  });
  