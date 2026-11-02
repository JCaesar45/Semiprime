import express from "express";
import { isSemiPrime } from "./semiprime";

const app = express();
app.use(express.json());

app.get("/api/verify/:serial", (req, res) => {
  const serial = Number(req.params.serial);
  if (!Number.isInteger(serial) || serial < 1) {
    return res.status(400).json({ ok: false, error: "Serial must be a positive integer." });
  }
  const authentic = isSemiPrime(serial);
  res.json({ ok: true, serial, authentic });
});

app.listen(3000, () => console.log("Maison Noir auth service on :3000"));
