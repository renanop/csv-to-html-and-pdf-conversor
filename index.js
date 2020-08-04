const Reader = require("./Reader");
const Processor = require("./Processor");
const Table = require("./Table");
const HtmlParser = require("./HtmlParser");
const Writer = require("./Writer");
const pdfWriter = require("./PDFWriter");

var leitor = new Reader();
var processor = new Processor();
var htmlParser = new HtmlParser();
var writer = new Writer();

async function main() {
    var dados = await leitor.ReadFunc("./users.csv");
    var processedData = await processor.Processor(dados);
    var tabularData = new Table(processedData);
    var html =  await htmlParser.Parse(tabularData);
    writer.Write(Date.now() + ".html", html);
    pdfWriter.WritePDF(Date.now() + ".pdf", html);


    
    console.log(html);

}



main();