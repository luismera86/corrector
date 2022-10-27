
const element = document.getElementById('delivery-evaluation');

export const savePdf = () => {
    let doc = new jsPDF('p', 'pt', 'letter');
    let margin = 0;
    let scale = (1) ; 
    doc.html (element, {
        x: margin,
        y: margin,
        html2canvas: {
            scale: scale
        },
        callback: function (doc) {
            doc.output('dataurlnewwindow', 'test.pdf');
        }
    });

  
}
    
