
const data = [
  {
    name: "Karachi Office",
    id: "office_karachi",
    city: "Karachi",
    clients: [
      {
        name: "Ahmed Khan",
        id: "office_karachi_client1",
        projects: [
          { title: "Mobile App Development", status: "Completed" },
          { title: "Cloud Migration", status: "In Progress" },
          { title: "Database Optimization", status: "Pending" },
        ],
      },
      {
        name: "Fatima Ali",
        id: "office_karachi_client2",
        projects: [
          { title: "Website Redesign", status: "In Progress" },
          { title: "API Integration", status: "Completed" },
          { title: "SEO Optimization", status: "Pending" },
        ],
      },
      {
        name: "Hassan Raza",
        id: "office_karachi_client3",
        projects: [
          { title: "CRM System", status: "Completed" },
          { title: "Dashboard Development", status: "In Progress" },
          { title: "Report Automation", status: "Completed" },
        ],
      },
      {
        name: "Ayesha Malik",
        id: "office_karachi_client4",
        projects: [
          { title: "E-commerce Platform", status: "In Progress" },
          { title: "Payment Gateway", status: "Pending" },
          { title: "Inventory System", status: "Completed" },
        ],
      },
      {
        name: "Muhammad Usman",
        id: "office_karachi_client5",
        projects: [
          { title: "Social Media App", status: "Pending" },
          { title: "User Authentication", status: "In Progress" },
          { title: "Notification System", status: "Completed" },
        ],
      },
      {
        name: "Sara Khan",
        id: "office_karachi_client6",
        projects: [
          { title: "Video Streaming Platform", status: "Completed" },
          { title: "Content Management", status: "In Progress" },
          { title: "Analytics Dashboard", status: "Pending" },
        ],
      },
      {
        name: "Ali Hussain",
        id: "office_karachi_client7",
        projects: [
          { title: "Blog System", status: "In Progress" },
          { title: "Comment Module", status: "Completed" },
          { title: "Search Functionality", status: "Pending" },
        ],
      },
      {
        name: "Zainab Ahmed",
        id: "office_karachi_client8",
        projects: [
          { title: "Project Management Tool", status: "Completed" },
          { title: "Team Collaboration", status: "In Progress" },
          { title: "Time Tracking", status: "Pending" },
        ],
      },
      {
        name: "Bilal Hassan",
        id: "office_karachi_client9",
        projects: [
          { title: "Real Estate Portal", status: "Pending" },
          { title: "Property Listing", status: "In Progress" },
          { title: "Virtual Tours", status: "Completed" },
        ],
      },
      {
        name: "Hira Nasir",
        id: "office_karachi_client10",
        projects: [
          { title: "Healthcare App", status: "In Progress" },
          { title: "Appointment Booking", status: "Completed" },
          { title: "Medical Records", status: "Pending" },
        ],
      },
    ],
  },
  {
    name: "Lahore Office",
    id: "office_lahore",
    city: "Lahore",
    clients: [
      {
        name: "Imran Sheikh",
        id: "office_lahore_client1",
        projects: [
          { title: "Fintech Application", status: "Completed" },
          { title: "Wallet Integration", status: "In Progress" },
          { title: "Transaction History", status: "Pending" },
        ],
      },
      {
        name: "Nida Farooq",
        id: "office_lahore_client2",
        projects: [
          { title: "Learning Management System", status: "In Progress" },
          { title: "Course Management", status: "Completed" },
          { title: "Student Portal", status: "Pending" },
        ],
      },
      {
        name: "Faisal Malik",
        id: "office_lahore_client3",
        projects: [
          { title: "Restaurant Management", status: "Completed" },
          { title: "Online Ordering", status: "In Progress" },
          { title: "Delivery Tracking", status: "Pending" },
        ],
      },
      {
        name: "Amina Khan",
        id: "office_lahore_client4",
        projects: [
          { title: "Fashion E-commerce", status: "Pending" },
          { title: "Product Catalog", status: "In Progress" },
          { title: "Review System", status: "Completed" },
        ],
      },
      {
        name: "Tariq Ahmad",
        id: "office_lahore_client5",
        projects: [
          { title: "HR Management System", status: "In Progress" },
          { title: "Payroll Processing", status: "Completed" },
          { title: "Leave Management", status: "Pending" },
        ],
      },
      {
        name: "Rabia Nasir",
        id: "office_lahore_client6",
        projects: [
          { title: "Travel Booking Platform", status: "Completed" },
          { title: "Hotel Reservations", status: "In Progress" },
          { title: "Flight Bookings", status: "Pending" },
        ],
      },
      {
        name: "Kamran Ali",
        id: "office_lahore_client7",
        projects: [
          { title: "Fitness Tracking App", status: "Pending" },
          { title: "Workout Plans", status: "In Progress" },
          { title: "Nutrition Tracking", status: "Completed" },
        ],
      },
      {
        name: "Sana Iqbal",
        id: "office_lahore_client8",
        projects: [
          { title: "Social Commerce Platform", status: "In Progress" },
          { title: "Live Shopping", status: "Completed" },
          { title: "Influencer Dashboard", status: "Pending" },
        ],
      },
      {
        name: "Rizwan Hassan",
        id: "office_lahore_client9",
        projects: [
          { title: "Supply Chain Management", status: "Completed" },
          { title: "Warehouse Management", status: "In Progress" },
          { title: "Logistics Tracking", status: "Pending" },
        ],
      },
      {
        name: "Iqra Malik",
        id: "office_lahore_client10",
        projects: [
          { title: "Insurance Portal", status: "Pending" },
          { title: "Policy Management", status: "In Progress" },
          { title: "Claims Processing", status: "Completed" },
        ],
      },
    ],
  },
  {
    name: "Islamabad Office",
    id: "office_islamabad",
    city: "Islamabad",
    clients: [
      {
        name: "Muhammad Hassan",
        id: "office_islamabad_client1",
        projects: [
          { title: "Government Portal", status: "Completed" },
          { title: "Document Management", status: "In Progress" },
          { title: "Citizen Services", status: "Pending" },
        ],
      },
      {
        name: "Hana Zainab",
        id: "office_islamabad_client2",
        projects: [
          { title: "Banking Application", status: "In Progress" },
          { title: "Account Management", status: "Completed" },
          { title: "Loan Processing", status: "Pending" },
        ],
      },
      {
        name: "Samir Khan",
        id: "office_islamabad_client3",
        projects: [
          { title: "Energy Management System", status: "Completed" },
          { title: "Usage Monitoring", status: "In Progress" },
          { title: "Billing System", status: "Pending" },
        ],
      },
      {
        name: "Dina Ishaq",
        id: "office_islamabad_client4",
        projects: [
          { title: "Auction Platform", status: "Pending" },
          { title: "Bidding System", status: "In Progress" },
          { title: "Payment Processing", status: "Completed" },
        ],
      },
      {
        name: "Adnan Mirza",
        id: "office_islamabad_client5",
        projects: [
          { title: "Environmental Monitoring", status: "In Progress" },
          { title: "Data Analytics", status: "Completed" },
          { title: "Reporting System", status: "Pending" },
        ],
      },
      {
        name: "Leila Farooq",
        id: "office_islamabad_client6",
        projects: [
          { title: "Agricultural Platform", status: "Completed" },
          { title: "Crop Management", status: "In Progress" },
          { title: "Market Prices", status: "Pending" },
        ],
      },
      {
        name: "Wasim Ahmed",
        id: "office_islamabad_client7",
        projects: [
          { title: "Telecom Management", status: "Pending" },
          { title: "Subscriber Management", status: "In Progress" },
          { title: "Billing Services", status: "Completed" },
        ],
      },
      {
        name: "Maha Khan",
        id: "office_islamabad_client8",
        projects: [
          { title: "Construction Project Management", status: "In Progress" },
          { title: "Progress Tracking", status: "Completed" },
          { title: "Resource Planning", status: "Pending" },
        ],
      },
      {
        name: "Shahid Malik",
        id: "office_islamabad_client9",
        projects: [
          { title: "Manufacturing ERP", status: "Completed" },
          { title: "Production Planning", status: "In Progress" },
          { title: "Quality Control", status: "Pending" },
        ],
      },
      {
        name: "Saira Hassan",
        id: "office_islamabad_client10",
        projects: [
          { title: "Trade Portal", status: "Pending" },
          { title: "Export Documentation", status: "In Progress" },
          { title: "Customs Integration", status: "Completed" },
        ],
      },
    ],
  },
  {
    name: "Peshawar Office",
    id: "office_peshawar",
    city: "Peshawar",
    clients: [
      {
        name: "Babar Khan",
        id: "office_peshawar_client1",
        projects: [
          { title: "Textile Management System", status: "Completed" },
          { title: "Inventory Tracking", status: "In Progress" },
          { title: "Quality Assurance", status: "Pending" },
        ],
      },
      {
        name: "Yasmin Ali",
        id: "office_peshawar_client2",
        projects: [
          { title: "Logistics Network", status: "In Progress" },
          { title: "Route Optimization", status: "Completed" },
          { title: "Fleet Management", status: "Pending" },
        ],
      },
      {
        name: "Karim Hassan",
        id: "office_peshawar_client3",
        projects: [
          { title: "Construction Bidding Platform", status: "Pending" },
          { title: "Tender Management", status: "In Progress" },
          { title: "Contract Management", status: "Completed" },
        ],
      },
      {
        name: "Noor Fatima",
        id: "office_peshawar_client4",
        projects: [
          { title: "Retail POS System", status: "Completed" },
          { title: "Inventory Management", status: "In Progress" },
          { title: "Sales Analytics", status: "Pending" },
        ],
      },
      {
        name: "Hamid Raza",
        id: "office_peshawar_client5",
        projects: [
          { title: "Education Portal", status: "In Progress" },
          { title: "Admission System", status: "Completed" },
          { title: "Result Management", status: "Pending" },
        ],
      },
      {
        name: "Mia Khan",
        id: "office_peshawar_client6",
        projects: [
          { title: "Tourism Website", status: "Completed" },
          { title: "Package Management", status: "In Progress" },
          { title: "Booking Engine", status: "Pending" },
        ],
      },
      {
        name: "Sohail Ahmad",
        id: "office_peshawar_client7",
        projects: [
          { title: "Welfare Program Management", status: "Pending" },
          { title: "Beneficiary Tracking", status: "In Progress" },
          { title: "Fund Distribution", status: "Completed" },
        ],
      },
      {
        name: "Ranya Hassan",
        id: "office_peshawar_client8",
        projects: [
          { title: "Automotive Dealership", status: "In Progress" },
          { title: "Inventory Tracking", status: "Completed" },
          { title: "Service Scheduling", status: "Pending" },
        ],
      },
      {
        name: "Dawood Khan",
        id: "office_peshawar_client9",
        projects: [
          { title: "Municipality Management", status: "Completed" },
          { title: "Complaint Handling", status: "In Progress" },
          { title: "Service Delivery", status: "Pending" },
        ],
      },
      {
        name: "Lina Nasir",
        id: "office_peshawar_client10",
        projects: [
          { title: "Digital Marketing Platform", status: "Pending" },
          { title: "Campaign Management", status: "In Progress" },
          { title: "Analytics Engine", status: "Completed" },
        ],
      },
    ],
  },
  {
    name: "Quetta Office",
    id: "office_quetta",
    city: "Quetta",
    clients: [
      {
        name: "Zahir Ahmed",
        id: "office_quetta_client1",
        projects: [
          { title: "Mining Operations Platform", status: "Completed" },
          { title: "Production Tracking", status: "In Progress" },
          { title: "Safety Management", status: "Pending" },
        ],
      },
      {
        name: "Amina Nasir",
        id: "office_quetta_client2",
        projects: [
          { title: "Water Supply Management", status: "In Progress" },
          { title: "Cost Recovery System", status: "Completed" },
          { title: "Customer Portal", status: "Pending" },
        ],
      },
      {
        name: "Khalid Hassan",
        id: "office_quetta_client3",
        projects: [
          { title: "Livestock Trading Platform", status: "Pending" },
          { title: "Market Analysis", status: "In Progress" },
          { title: "Price Tracking", status: "Completed" },
        ],
      },
      {
        name: "Hiba Khan",
        id: "office_quetta_client4",
        projects: [
          { title: "Agricultural Cooperative", status: "Completed" },
          { title: "Member Management", status: "In Progress" },
          { title: "Harvest Planning", status: "Pending" },
        ],
      },
      {
        name: "Saleh Raza",
        id: "office_quetta_client5",
        projects: [
          { title: "Clinic Management System", status: "In Progress" },
          { title: "Patient Records", status: "Completed" },
          { title: "Prescription Management", status: "Pending" },
        ],
      },
      {
        name: "Rida Malik",
        id: "office_quetta_client6",
        projects: [
          { title: "Local Commerce Platform", status: "Completed" },
          { title: "Marketplace Setup", status: "In Progress" },
          { title: "Vendor Management", status: "Pending" },
        ],
      },
      {
        name: "Faqir Ahmad",
        id: "office_quetta_client7",
        projects: [
          { title: "Trust Fund Management", status: "Pending" },
          { title: "Asset Tracking", status: "In Progress" },
          { title: "Distribution System", status: "Completed" },
        ],
      },
      {
        name: "Nida Hassan",
        id: "office_quetta_client8",
        projects: [
          { title: "Education Scholarship Portal", status: "In Progress" },
          { title: "Student Registration", status: "Completed" },
          { title: "Fund Disbursement", status: "Pending" },
        ],
      },
      {
        name: "Rashid Khan",
        id: "office_quetta_client9",
        projects: [
          { title: "Border Trade System", status: "Completed" },
          { title: "Document Processing", status: "In Progress" },
          { title: "Revenue Tracking", status: "Pending" },
        ],
      },
      {
        name: "Saba Inam",
        id: "office_quetta_client10",
        projects: [
          { title: "Disaster Management Portal", status: "Pending" },
          { title: "Alert System", status: "In Progress" },
          { title: "Relief Coordination", status: "Completed" },
        ],
      },
    ],
  },
  {
    name: "Multan Office",
    id: "office_multan",
    city: "Multan",
    clients: [
      {
        name: "Ibrahim Malik",
        id: "office_multan_client1",
        projects: [
          { title: "Sugar Mill Management", status: "Completed" },
          { title: "Production Monitoring", status: "In Progress" },
          { title: "Logistics Integration", status: "Pending" },
        ],
      },
      {
        name: "Samina Ahmed",
        id: "office_multan_client2",
        projects: [
          { title: "Date Export Platform", status: "In Progress" },
          { title: "Quality Grading", status: "Completed" },
          { title: "Buyer Network", status: "Pending" },
        ],
      },
      {
        name: "Javed Hassan",
        id: "office_multan_client3",
        projects: [
          { title: "Textile Warehouse", status: "Pending" },
          { title: "Stock Management", status: "In Progress" },
          { title: "Export Documentation", status: "Completed" },
        ],
      },
      {
        name: "Nadia Khan",
        id: "office_multan_client4",
        projects: [
          { title: "Pottery Marketplace", status: "Completed" },
          { title: "Artisan Connect", status: "In Progress" },
          { title: "Online Showroom", status: "Pending" },
        ],
      },
      {
        name: "Ali Raza",
        id: "office_multan_client5",
        projects: [
          { title: "Agricultural Cooperative", status: "In Progress" },
          { title: "Crop Insurance", status: "Completed" },
          { title: "Market Information", status: "Pending" },
        ],
      },
      {
        name: "Leena Nasir",
        id: "office_multan_client6",
        projects: [
          { title: "Hospital Management", status: "Completed" },
          { title: "OPD System", status: "In Progress" },
          { title: "Pharmacy Module", status: "Pending" },
        ],
      },
      {
        name: "Atif Khan",
        id: "office_multan_client7",
        projects: [
          { title: "Tourism Platform", status: "Pending" },
          { title: "Heritage Site Mapping", status: "In Progress" },
          { title: "Tour Guide Network", status: "Completed" },
        ],
      },
      {
        name: "Mona Malik",
        id: "office_multan_client8",
        projects: [
          { title: "Grain Storage Management", status: "In Progress" },
          { title: "Moisture Control", status: "Completed" },
          { title: "Price Monitoring", status: "Pending" },
        ],
      },
      {
        name: "Rashid Ahmad",
        id: "office_multan_client9",
        projects: [
          { title: "Spice Trading Platform", status: "Completed" },
          { title: "Quality Standards", status: "In Progress" },
          { title: "International Markets", status: "Pending" },
        ],
      },
      {
        name: "Sadia Hassan",
        id: "office_multan_client10",
        projects: [
          { title: "Craft Products Portal", status: "Pending" },
          { title: "Wholesale Ordering", status: "In Progress" },
          { title: "Logistics Solutions", status: "Completed" },
        ],
      },
    ],
  },
  {
    name: "Faisalabad Office",
    id: "office_faisalabad",
    city: "Faisalabad",
    clients: [
      {
        name: "Nasir Ali",
        id: "office_faisalabad_client1",
        projects: [
          { title: "Textile Industry Portal", status: "Completed" },
          { title: "Factory Operations", status: "In Progress" },
          { title: "Quality Control", status: "Pending" },
        ],
      },
      {
        name: "Beena Khan",
        id: "office_faisalabad_client2",
        projects: [
          { title: "Apparel Trading Platform", status: "In Progress" },
          { title: "Buyer Management", status: "Completed" },
          { title: "Order Processing", status: "Pending" },
        ],
      },
      {
        name: "Waheed Hassan",
        id: "office_faisalabad_client3",
        projects: [
          { title: "Industrial Supply Chain", status: "Pending" },
          { title: "Vendor Network", status: "In Progress" },
          { title: "Procurement System", status: "Completed" },
        ],
      },
      {
        name: "Hira Iqbal",
        id: "office_faisalabad_client4",
        projects: [
          { title: "Chemical Manufacturing", status: "Completed" },
          { title: "Safety Management", status: "In Progress" },
          { title: "Compliance Tracking", status: "Pending" },
        ],
      },
      {
        name: "Tariq Khan",
        id: "office_faisalabad_client5",
        projects: [
          { title: "Dyeing Facility Management", status: "In Progress" },
          { title: "Waste Management", status: "Completed" },
          { title: "Energy Optimization", status: "Pending" },
        ],
      },
      {
        name: "Rita Malik",
        id: "office_faisalabad_client6",
        projects: [
          { title: "Stitching Unit Operations", status: "Completed" },
          { title: "Production Scheduling", status: "In Progress" },
          { title: "Payroll System", status: "Pending" },
        ],
      },
      {
        name: "Saqib Ahmed",
        id: "office_faisalabad_client7",
        projects: [
          { title: "Printing Services Platform", status: "Pending" },
          { title: "Order Management", status: "In Progress" },
          { title: "Delivery Tracking", status: "Completed" },
        ],
      },
      {
        name: "Zina Hassan",
        id: "office_faisalabad_client8",
        projects: [
          { title: "Finishing Facility", status: "In Progress" },
          { title: "Quality Standards", status: "Completed" },
          { title: "Packaging Solutions", status: "Pending" },
        ],
      },
      {
        name: "Karim Raza",
        id: "office_faisalabad_client9",
        projects: [
          { title: "Export Management System", status: "Completed" },
          { title: "Documentation", status: "In Progress" },
          { title: "Shipping Coordination", status: "Pending" },
        ],
      },
      {
        name: "Sana Khan",
        id: "office_faisalabad_client10",
        projects: [
          { title: "Wholesale Distribution", status: "Pending" },
          { title: "Inventory Management", status: "In Progress" },
          { title: "Dealer Portal", status: "Completed" },
        ],
      },
    ],
  },
  {
    name: "Sialkot Office",
    id: "office_sialkot",
    city: "Sialkot",
    clients: [
      {
        name: "Ashraf Malik",
        id: "office_sialkot_client1",
        projects: [
          { title: "Sports Equipment Manufacturing", status: "Completed" },
          { title: "Quality Inspection", status: "In Progress" },
          { title: "Export Logistics", status: "Pending" },
        ],
      },
      {
        name: "Ghazala Khan",
        id: "office_sialkot_client2",
        projects: [
          { title: "Cutlery Trading Platform", status: "In Progress" },
          { title: "Supplier Network", status: "Completed" },
          { title: "Wholesale Orders", status: "Pending" },
        ],
      },
      {
        name: "Majid Hassan",
        id: "office_sialkot_client3",
        projects: [
          { title: "Surgical Instruments Hub", status: "Pending" },
          { title: "Sterilization Tracking", status: "In Progress" },
          { title: "Certification Management", status: "Completed" },
        ],
      },
      {
        name: "Karima Ahmad",
        id: "office_sialkot_client4",
        projects: [
          { title: "Cricket Equipment Platform", status: "Completed" },
          { title: "International Standards", status: "In Progress" },
          { title: "Tournament Sponsorship", status: "Pending" },
        ],
      },
      {
        name: "Amir Raza",
        id: "office_sialkot_client5",
        projects: [
          { title: "Leather Goods Manufacturing", status: "In Progress" },
          { title: "Raw Material Sourcing", status: "Completed" },
          { title: "Finished Goods Store", status: "Pending" },
        ],
      },
      {
        name: "Mina Khan",
        id: "office_sialkot_client6",
        projects: [
          { title: "Steel Products Portal", status: "Completed" },
          { title: "Certification Records", status: "In Progress" },
          { title: "Client Management", status: "Pending" },
        ],
      },
      {
        name: "Saleem Ahmed",
        id: "office_sialkot_client7",
        projects: [
          { title: "Foundry Operations System", status: "Pending" },
          { title: "Casting Quality", status: "In Progress" },
          { title: "Shipping Management", status: "Completed" },
        ],
      },
      {
        name: "Noor Hassan",
        id: "office_sialkot_client8",
        projects: [
          { title: "Machinery Manufacturing Portal", status: "In Progress" },
          { title: "Parts Inventory", status: "Completed" },
          { title: "Maintenance Tracking", status: "Pending" },
        ],
      },
      {
        name: "Bilal Khan",
        id: "office_sialkot_client9",
        projects: [
          { title: "Engineering Solutions", status: "Completed" },
          { title: "Custom Design", status: "In Progress" },
          { title: "Project Management", status: "Pending" },
        ],
      },
      {
        name: "Suhira Malik",
        id: "office_sialkot_client10",
        projects: [
          { title: "Export Quality Control", status: "Pending" },
          { title: "Testing Facility", status: "In Progress" },
          { title: "Certification Hub", status: "Completed" },
        ],
      },
    ],
  },
  {
    name: "Hyderabad Office",
    id: "office_hyderabad",
    city: "Hyderabad",
    clients: [
      {
        name: "Suleman Khan",
        id: "office_hyderabad_client1",
        projects: [
          { title: "Sugar Industry Portal", status: "Completed" },
          { title: "Mill Operations", status: "In Progress" },
          { title: "Cane Supply Chain", status: "Pending" },
        ],
      },
      {
        name: "Rida Ahmed",
        id: "office_hyderabad_client2",
        projects: [
          { title: "Rice Trading Platform", status: "In Progress" },
          { title: "Quality Grading System", status: "Completed" },
          { title: "Export Management", status: "Pending" },
        ],
      },
      {
        name: "Farhan Hassan",
        id: "office_hyderabad_client3",
        projects: [
          { title: "Cotton Market Hub", status: "Pending" },
          { title: "Price Tracking", status: "In Progress" },
          { title: "Farmer Connect", status: "Completed" },
        ],
      },
      {
        name: "Hana Khan",
        id: "office_hyderabad_client4",
        projects: [
          { title: "Agribusiness Platform", status: "Completed" },
          { title: "Crop Advisory System", status: "In Progress" },
          { title: "Input Supply", status: "Pending" },
        ],
      },
      {
        name: "Dawood Raza",
        id: "office_hyderabad_client5",
        projects: [
          { title: "Livestock Market System", status: "In Progress" },
          { title: "Price Intelligence", status: "Completed" },
          { title: "Auction Platform", status: "Pending" },
        ],
      },
      {
        name: "Munira Malik",
        id: "office_hyderabad_client6",
        projects: [
          { title: "Cold Storage Management", status: "Completed" },
          { title: "Temperature Control", status: "In Progress" },
          { title: "Inventory System", status: "Pending" },
        ],
      },
      {
        name: "Safdar Ahmad",
        id: "office_hyderabad_client7",
        projects: [
          { title: "Textile Trading Platform", status: "Pending" },
          { title: "Supplier Database", status: "In Progress" },
          { title: "Order Management", status: "Completed" },
        ],
      },
      {
        name: "Sana Hassan",
        id: "office_hyderabad_client8",
        projects: [
          { title: "Spice Market Portal", status: "In Progress" },
          { title: "Quality Standards", status: "Completed" },
          { title: "Certification System", status: "Pending" },
        ],
      },
      {
        name: "Rashid Khan",
        id: "office_hyderabad_client9",
        projects: [
          { title: "Pharmaceutical Trading", status: "Completed" },
          { title: "Compliance Management", status: "In Progress" },
          { title: "Regulatory Tracking", status: "Pending" },
        ],
      },
      {
        name: "Saira Nasir",
        id: "office_hyderabad_client10",
        projects: [
          { title: "Logistics Hub", status: "Pending" },
          { title: "Warehouse Operations", status: "In Progress" },
          { title: "Fleet Management", status: "Completed" },
        ],
      },
    ],
  },
  {
    name: "Rawalpindi Office",
    id: "office_rawalpindi",
    city: "Rawalpindi",
    clients: [
      {
        name: "Anwar Khan",
        id: "office_rawalpindi_client1",
        projects: [
          { title: "Defense Sector Management", status: "Completed" },
          { title: "Asset Tracking", status: "In Progress" },
          { title: "Supply Chain", status: "Pending" },
        ],
      },
      {
        name: "Bushra Ahmed",
        id: "office_rawalpindi_client2",
        projects: [
          { title: "Military Hospital System", status: "In Progress" },
          { title: "Patient Management", status: "Completed" },
          { title: "Drug Inventory", status: "Pending" },
        ],
      },
      {
        name: "Naseer Hassan",
        id: "office_rawalpindi_client3",
        projects: [
          { title: "Defense Contractor Portal", status: "Pending" },
          { title: "Project Management", status: "In Progress" },
          { title: "Compliance Tracking", status: "Completed" },
        ],
      },
      {
        name: "Iqra Khan",
        id: "office_rawalpindi_client4",
        projects: [
          { title: "Government Employee System", status: "Completed" },
          { title: "Salary Management", status: "In Progress" },
          { title: "Leave Processing", status: "Pending" },
        ],
      },
      {
        name: "Hamza Raza",
        id: "office_rawalpindi_client5",
        projects: [
          { title: "Urban Development Platform", status: "In Progress" },
          { title: "Land Information", status: "Completed" },
          { title: "Building Permits", status: "Pending" },
        ],
      },
      {
        name: "Megan Malik",
        id: "office_rawalpindi_client6",
        projects: [
          { title: "Transportation Authority System", status: "Completed" },
          { title: "Route Management", status: "In Progress" },
          { title: "Public Transit", status: "Pending" },
        ],
      },
      {
        name: "Samad Ahmad",
        id: "office_rawalpindi_client7",
        projects: [
          { title: "Housing Development Program", status: "Pending" },
          { title: "Allotment System", status: "In Progress" },
          { title: "Payment Collection", status: "Completed" },
        ],
      },
      {
        name: "Zahra Hassan",
        id: "office_rawalpindi_client8",
        projects: [
          { title: "Public Education System", status: "In Progress" },
          { title: "Student Information", status: "Completed" },
          { title: "Result Management", status: "Pending" },
        ],
      },
      {
        name: "Mukhtar Khan",
        id: "office_rawalpindi_client9",
        projects: [
          { title: "Water Authority System", status: "Completed" },
          { title: "Distribution Network", status: "In Progress" },
          { title: "Billing Services", status: "Pending" },
        ],
      },
      {
        name: "Sonia Nasir",
        id: "office_rawalpindi_client10",
        projects: [
          { title: "Justice System Portal", status: "Pending" },
          { title: "Case Management", status: "In Progress" },
          { title: "Court Operations", status: "Completed" },
        ],
      },
    ],
  },
];

export default data;
