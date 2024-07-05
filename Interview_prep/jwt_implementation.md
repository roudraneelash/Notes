const { username, password } = req.body;
const user = users.find(u => u.username === username);
if (user && await bcrypt.compare(password, user.password)) {
const token = jwt.sign({ username: user.username }, secretKey, { expiresIn: '1h' });
res.json(token);
}else
{
res.json("invalid credentials");
}

// frontend

// Save the token
localStorage.setItem('token', yourToken);

// Retrieve the token
const token = localStorage.getItem('token');

axios.get('url',headers: {
'Authorization': `Bearer ${token}` // Include the token in the Authorization header
});
