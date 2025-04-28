const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3001;

const visitantes = [
  { usuario: 'alejandra.m', contraseña: 'verde123', nombreCompleto: 'Alejandra Morales', boleto: '00123' },
  { usuario: 'david.p', contraseña: 'bosque456', nombreCompleto: 'David Pérez', boleto: '00124' },
  { usuario: 'lucia.r', contraseña: 'eco789', nombreCompleto: 'Lucía Ramírez', boleto: '00125' }
];

app.use(cors());
app.use(bodyParser.json());

app.post('/login', (req, res) => {
  const { usuario, contraseña } = req.body;
  const visitante = visitantes.find(v => v.usuario === usuario && v.contraseña === contraseña);

  if (visitante) {
    res.json({
      success: true,
      nombreCompleto: visitante.nombreCompleto,
      boleto: visitante.boleto
    });
  } else {
    res.status(401).json({
      success: false,
      mensaje: 'Datos incorrectos, intenta de nuevo.'
    });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});
