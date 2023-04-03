import React, { useState } from 'react';

export default function StylishForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [isTrue, setIsTrue] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Date:', date);
    console.log('Is True:', isTrue);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="date">Date</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(event) => setDate(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label>
          <input
            type="radio"
            name="isTrue"
            value="true"
            checked={isTrue}
            onChange={(event) => setIsTrue(event.target.value === 'true')}
          />
          True
        </label>
        <label>
          <input
            type="radio"
            name="isTrue"
            value="false"
            checked={!isTrue}
            onChange={(event) => setIsTrue(event.target.value === 'true')}
          />
          False
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
