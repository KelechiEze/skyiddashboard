import "./CreateSalesperson.css";

const CreateSalesperson = () => {
  return (
    <div className="create-salesperson-container">
      <h1>Create Salesperson</h1>
      <p>Add a new salesperson to your team</p>
      <div className="form-container">
        <h2>Create New Salesperson</h2>
        <p>Fill out the form below to add a new salesperson to the system</p>

        <form className="salesperson-form">
          <label>Full Name</label>
          <input type="text" placeholder="John Doe" />

          <label>Email Address</label>
          <input type="email" placeholder="john@callbridge.com" />

          <label>Phone Number</label>
          <input type="tel" placeholder="(555) 123-4567" />

          <label>Department / Region</label>
          <select>
            <option>Select department</option>
          </select>

          <div className="status-toggle">
            <label>Status: Active</label>
            <input type="checkbox" defaultChecked />
          </div>

          <div className="form-buttons">
            <button type="button" className="clear-btn">Clear Form</button>
            <button type="submit" className="create-btn">Create Salesperson</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateSalesperson;
