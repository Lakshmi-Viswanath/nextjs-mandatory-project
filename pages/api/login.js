import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';



export default async function handler(req, res) {
  try {
    if (req.method === 'POST') {
      const { email, password } = req.body;

      const usersRes = await fetch('http://localhost:5000/users');
      if (!usersRes.ok) {
        console.error('Error fetching users from JSON server:', usersRes.statusText);
        return res.status(500).json({ message: 'Failed to fetch users' });
      }
      const users = await usersRes.json();

      const user = users.find(user => user.email === email);
      if (!user) {
        console.log('User not found:', email);
        return res.status(400).json({ message: 'Invalid credentials' });
      }

      console.log('User found:', user);


      const isMatch = await bcrypt.compare(password, user.password);
      console.log('Password match status:', isMatch);

      if (!isMatch) {
        console.log('Password does not match for user:', email);
        return res.status(400).json({ message: 'Invalid credentials' });
      }


      const token = jwt.sign({ email: user.email }, JWT_SECRET, { expiresIn: '1h' });

      console.log('Login successful:', { email, token });

      return res.status(200).json({ token });
    } else {
      return res.status(405).json({ message: 'Method not allowed' });
    }
  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
