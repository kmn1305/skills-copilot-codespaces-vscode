// Create web server
const express = require('express');
const os = require('os');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
	res.json({
		message: 'Hello from skills-copilot-codespaces-vscode',
		hostname: os.hostname(),
		pid: process.pid,
	});
});

app.get('/health', (req, res) => {
	res.json({ status: 'ok', uptime: process.uptime() });
});

app.post('/echo', (req, res) => {
	res.json({ received: req.body });
});

if (require.main === module) {
	app.listen(PORT, () => {
		console.log(`Server listening on port ${PORT}`);
	});
}

module.exports = app;

