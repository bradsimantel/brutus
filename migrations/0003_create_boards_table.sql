CREATE TABLE boards (
  id SERIAL PRIMARY KEY,
  organization_id SERIAL REFERENCES organizations(id) ON DELETE CASCADE NOT NULL,
  name VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);