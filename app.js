import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const router = express.Router();

router.use(express.static(path.join(__dirname, 'dist')));
router.use((req, res) =>
  res.sendFile(path.join(__dirname, 'dist', 'index.html')));

app.use(process.env.PASSENGER_BASE_URI || '/', router);
app.listen(3000);