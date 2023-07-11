const FPDF = require('node-fpdf');

const pdf = new FPDF('P', 'mm', 'A4');

pdf.AddPage();

const enterprise = 'GLOBO TRANSPORTES E REPRESENTAÇÕES DE RAÇÃO ANIMAL LTDA-ME';
const contact = 'Rua Felipe Camarão, 840 - Sala 02 - (18) 3265-9589';
const document = '05.519.090/0001-45';

// Header
pdf.SetFont("Times", "BI", 14);
const enterpriseWidth = pdf.GetStringWidth(enterprise);
pdf.SetX(200-enterpriseWidth);
pdf.Cell(enterpriseWidth, 1, enterprise, 0, 1, "R");

pdf.Ln(5);

pdf.SetFont("Times", "BI", 12);
const contactWidth = pdf.GetStringWidth(contact);
pdf.SetX(200-contactWidth);
pdf.Cell(contactWidth, 1, contact, 0, 1, "R");

pdf.Ln(5);

pdf.SetFont("Times", "BI", 9);
const docuemntWidth = pdf.GetStringWidth(document);
pdf.SetX(200-docuemntWidth);
pdf.Cell(docuemntWidth, 1, document, 0, 1, "R");

pdf.Ln(2);

pdf.SetLineWidth(0.5);
pdf.Line(7, 25, 203, 25);

// Footer
const date = new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });
const email = 'transglobo@gmail.com';
const page = "Página " + pdf.PageNo();

pdf.SetLineWidth(0.5);
pdf.Line(7, (pdf.GetPageHeight() - 18), 203, (pdf.GetPageHeight() - 18));

pdf.Ln(2);

pdf.SetFont("Times", "", 9);
pdf.Text(9, (pdf.GetPageHeight() - 14), date);

pdf.SetFont("Times", "BI", 9);
pdf.Text((200 - pdf.GetStringWidth(email)), (pdf.GetPageHeight() - 15), email);

pdf.SetFont("Times", "", 9);
pdf.Text((200 - pdf.GetStringWidth(page)), (pdf.GetPageHeight() - 9), page);

// Document Data
const dateDay = new Date().toLocaleDateString('pt-BR', { timeZone: 'UTC' });

pdf.SetFont("Arial", "", 10);
pdf.Text(42, 34, dateDay);

// Representation Data
const rep = 'Coopermota (Fábrica de Ração - Cândido Mota)';
const resp = '';

pdf.SetFont("Arial", "B", 10);
pdf.Text(12, 49, "À");

pdf.SetFont("Arial", "", 10);
pdf.Text(12, 54, rep);

pdf.SetFont("Arial", "B", 10);
pdf.Text(12, 58, "NÚMERO DO PEDIDO DA FÁBRICA:");

pdf.SetFont("Arial", "", 10);
pdf.Text((12 + pdf.GetStringWidth("NÚMERO DO PEDIDO DA FÁBRICA:") + 2), 58, 1);

pdf.SetFont("Arial", "B", 10);
pdf.Text(12, 67, "ATT.:");

pdf.SetFont("Arial", "", 10);
pdf.Text((12 + pdf.GetStringWidth("ATT.:") + 2), 67, resp);

// Document title
const title = "AUTORIZAÇÃO DE CARREGAMENTO";

pdf.SetFont("Times", "BI", 14);
pdf.Text(((210 - pdf.GetStringWidth(title)) / 2), 80, title);

// Driver's data
const driverId = '001';
const driverName = 'José Aparecido dos Santos';
const driverCpf = '234.432.545-54';
const driverRg = '23.624.764-1';
const driverCnh = '93868306375';
const driverTruckPlate = 'KSU-4235';
const driverTruckCar = '';

pdf.SetFont("Arial", "B", 10);
pdf.Text(22, 89, ("AUTORIZAMOS O"));

pdf.SetFont("Arial", "B", 10);
pdf.Text(22, 94.5, ("SR. MOTORISTA:"));

pdf.SetFont("Arial", "", 10);
pdf.Text((22 + pdf.GetStringWidth("SR. MOTORISTA:") + 2), 94.5, (driverId+'     '+driverName));

pdf.SetFont("Arial", "B", 10);
pdf.Text(22, 100, ("CPF:"));

pdf.SetFont("Arial", "", 10);
pdf.Text((22 + pdf.GetStringWidth("CPF:") + 2), 100, driverCpf);

pdf.SetFont("Arial", "B", 10);
pdf.Text(85, 100, ("RG:"));

pdf.SetFont("Arial", "", 10);
pdf.Text((85 + pdf.GetStringWidth("RG:") + 2), 100, driverRg);

pdf.SetFont("Arial", "B", 10);
pdf.Text(150, 100, ("CNH:"));

pdf.SetFont("Arial", "", 10);
pdf.Text((150 + pdf.GetStringWidth("CNH:") + 2), 100, driverCnh);

pdf.SetFont("Arial", "B", 10);
pdf.Text(22, 105, ("PLACA VEIC.:"));

pdf.SetFont("Arial", "", 10);
pdf.Text((22 + pdf.GetStringWidth("PLACA VEIC.:") + 2), 105, driverTruckPlate);

pdf.SetFont("Arial", "B", 10);
pdf.Text(128, 105, ("PLACA CARROC.:"));

pdf.SetFont("Arial", "", 10);
pdf.Text((128 + pdf.GetStringWidth("PLACA CARROC.:") + 3),105, driverTruckCar);

// Truck's proprietary data
const proprietaryName = 'José Aparecido dos Santos';
const proprietaryDocument = '234.432.545-54';

pdf.SetFont("Arial", "B", 10);
pdf.Text(22, 111, "PROPRIETÁRIO:");

pdf.SetFont("Arial", "", 10);
pdf.Text((22 + pdf.GetStringWidth("PROPRIETÁRIO:") + 2), 111, proprietaryName);

pdf.SetFont("Arial", "B", 10);
pdf.Text(140.2, 111, "CPF/CNPJ:");

pdf.SetFont("Arial", "", 10);
pdf.Text((140.2 + pdf.GetStringWidth("CPF/CNPJ:") + 2), 111, proprietaryDocument);

// Client's data
const clientName = 'Coopermota (Negócios)';
const clientId = '002';
const clientDoc1 = '24.423.642/0001-34';
const clientDoc2 = '';
const clientCity = 'Rancharia';
const clientState = "São Paulo";
const representation = 'Coopermota (Fábrica de Ração - Cândido Mota)';

pdf.SetFont("Arial", "B", 10);
pdf.Text(22, 120, ("A CARREGAR PARA O(S) CLIENTE(S) ABAIXO DESCRITO(S):"));

pdf.Text(40, 126, ("CLIENTE:"));

pdf.SetFont("Arial", "", 10);
pdf.Text((40 + pdf.GetStringWidth("CLIENTE:") + 2), 126, clientName);

pdf.SetFont("Arial", "B", 10);
pdf.Text(130, 126, ("CÓDIGO:"));

pdf.SetFont("Arial", "", 10);
pdf.Text((130 + pdf.GetStringWidth("CÓDIGO:") + 1), 126, clientId);

pdf.SetFont("Arial", "B", 10);
pdf.Text(37.5, 130.5, ("CPF/CNPJ:"));

pdf.SetFont("Arial", "", 10);
pdf.Text((37.5 + pdf.GetStringWidth("CPF/CNPJ:") + 2), 130.5, clientDoc1);

pdf.SetFont("Arial", "B", 10);
pdf.Text(134.5, 130.5, ("RG/IE:"));

pdf.SetFont("Arial", "", 10);
pdf.Text((134.5 + pdf.GetStringWidth("RG/IE:") + 2), 130.5, clientDoc2);

pdf.SetFont("Arial", "B", 10);
pdf.Text(41.5, 135, ("CIDADE:"));

pdf.SetFont("Arial", "", 10);
pdf.Text((41.5 + pdf.GetStringWidth("CIDADE:") + 2), 135, clientCity);

pdf.SetFont("Arial", "B", 10);
pdf.Text(129.4, 135, ("ESTADO:"));

pdf.SetFont("Arial", "", 10);
pdf.Text((129.4 + pdf.GetStringWidth("ESTADO:") + 2), 135, clientState);

pdf.SetFont("Arial", "B", 10);
pdf.Text(24, 139.5, ("REPRESENTANTE:"));

pdf.SetFont("Arial", "", 10);
pdf.Text((24 + pdf.GetStringWidth("REPRESENTANTE:") + 2), 139.5, representation);

// Items table
pdf.SetFont("Arial", "B", 10);
pdf.Text(22, 148, ("O(S) SEGUINTE(S) PRODUTO(S):"));

pdf.SetFont("Arial", "BI", 10);
pdf.SetXY(62, 152);
pdf.Cell(12, 5, ("Qtde.:"));
pdf.Cell(8, 5, (""));
pdf.Cell(60, 5, ("Descrição do Produto:"));

let weight = 0.0;
let y = 157;

const items = [
  { product: { description: 'Sal para gado.' }, weight: 50.0 },
  { product: { description: 'Ração para gado.' }, weight: 5000.0 },
];

for (const item of items) {
  const weightUn = item.weight / 1000;
  const desc = item.product.description;

  pdf.SetXY(62, y);
  pdf.SetFont("Arial", "", 10);
  pdf.Cell(12, 5, (weightUn.toString()));
  pdf.SetFont("Arial", "BI", 10);
  pdf.Cell(8, 5, ("Ton"));
  pdf.SetFont("Arial", "", 10);
  pdf.Cell(60, 5, (desc));

  weight += weightUn;
  y += 5;
}

pdf.SetFont("Arial", "BI", 10);
pdf.SetXY(52, y);
pdf.Cell(10, 5, ("Total"), 0, 0, "R");
pdf.Cell(12, 5, (weight.toString()), "T");
pdf.Cell(8, 5, ("Ton"), "T");

// Observations
pdf.SetFont("Arial", "B", 8);
pdf.Text(18, 189, ("OBSERVAÇÃO:"));

// Message
const msg = ("CERTOS DE SUAS PROVIDÊNCIAS, ANTECIPAMOS NOSSOS AGRADECIMENTOS.");

pdf.SetFont("Arial", "B", 10);
pdf.Text(((210 - pdf.GetStringWidth(msg)) / 2), 232, msg);

// Signature
pdf.SetXY(12, 269);
pdf.SetFont("Arial", "B", 10);
pdf.Cell(pdf.GetStringWidth(enterprise)+2, 5, enterprise, "T", 0, "C");

// Export to local file
pdf.Output('F', `testReport.pdf`)

export const module = this;
