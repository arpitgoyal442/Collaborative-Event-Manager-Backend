
CREATE TABLE IF NOT EXISTS users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password_hash VARCHAR(60) NOT NULL,  
    profile_picture_url TEXT,
    created_at TIMESTAMP DEFAULT NOW()
   
);
  
CREATE TABLE IF NOT EXISTS events (
    event_id SERIAL PRIMARY KEY,
    event_name VARCHAR(255) NOT NULL,
    event_date DATE NOT NULL,
    event_time TIME,
    location TEXT,
    description TEXT,
    organizer_id INT REFERENCES users(user_id),  
    created_at TIMESTAMP DEFAULT NOW()
    
);

CREATE TABLE collaborators (
    collaborator_id SERIAL PRIMARY KEY,
    event_id INT REFERENCES events(event_id),  -- Reference to the event
    user_id INT REFERENCES users(user_id),      -- Reference to the collaborator
    is_owner BOOLEAN DEFAULT FALSE,            -- Indicates if the collaborator is an owner
    joined_at TIMESTAMP DEFAULT NOW(),
    left_at TIMESTAMP,  -- Use NULL if the collaborator is currently part of the event
    UNIQUE (event_id, user_id)  -- Ensure a user can't be added to the same event multiple times
);